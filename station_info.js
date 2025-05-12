// station_info.js for all the code for the specific stations on each line
// the idea for this code in the future iteration (outside of the classroom final project) is to then input more specific data within each station button

map.on('load', () => {
    //
    // 1) define legend again to map layers to buttons
    //
    const legendItems = [
      { id: 'ibx-path',         label: 'Interborough Express' },
      { id: 'uticaavenue-path', label: 'Utica Avenue Line' },
      { id: 'secondavenue-path',label: 'Second Avenue Subway' },
      { id: 'flatlands-3-path', label: '3 Train to Flatlands' },
      { id: 'redhook-w-path',   label: 'W Train to Red Hook' },
      { id: 'tribx-path',       label: 'The Triboro' },
      { id: 'queenslink-path',  label: 'QueensLink' }
    ];
  
    //
    // 2) for each station-circle layer, this adds a matching symbol-layer for its labels
    //
    legendItems.forEach(item => {
      const stationLayerId = item.id.replace('-path', '-stations');
      const labelLayerId   = stationLayerId + '-labels';
  
      map.addLayer({
        id: labelLayerId,
        type: 'symbol',
        source: stationLayerId,         
        layout: {
          'text-field': ['get', 'station_name'],  
          'text-font': ['Open Sans Semibold','Arial Unicode MS Bold'],
          'text-size': 12,
          'text-offset': [0, 1.2],
          'text-anchor': 'top',
          visibility: 'none'          
        },
        paint: {
          'text-color': '#000'
        }
      });
    });
  
    //
    // 3) show the labels when selected and hide when not
    //
    const buttons = document.querySelectorAll('.legend-button');
    buttons.forEach((btn, i) => {
      const stationLayerId = legendItems[i].id.replace('-path', '-stations');
      const labelLayerId   = stationLayerId + '-labels';
  
      btn.addEventListener('click', () => {
        legendItems.forEach(item => {
          const hideId = item.id.replace('-path','-stations') + '-labels';
          map.setLayoutProperty(hideId, 'visibility', 'none');
        });
  
        if (btn.classList.contains('selected')) {
          map.setLayoutProperty(labelLayerId, 'visibility', 'visible');
        }
      });
    });


   // 4) stay selected when click and adds that bounce animation too
   legendItems.forEach(item => {
    const stationLayerId = item.id.replace('-path', '-stations');
    const hoverLayerId   = stationLayerId + '-hover';
    const selLayerId     = stationLayerId + '-selected';

    let bounceFrame;
    const bounceSeq = [0, 3, 8, 4, 6, 5]; 
    let seqIdx;

    map.on('mouseenter', stationLayerId, (e) => {
      map.getCanvas().style.cursor = 'pointer';
      const name      = e.features[0].properties.station_name;
      const baseColor = map.getPaintProperty(stationLayerId, 'circle-color');

      // removes old hover layer
      if (map.getLayer(hoverLayerId)) map.removeLayer(hoverLayerId);

      // adds new hover layer filtered to this station
      map.addLayer({
        id: hoverLayerId,
        type: 'circle',
        source: stationLayerId,
        filter: ['==', ['get','station_name'], name],
        paint: {
          'circle-radius': 0,
          'circle-color':  baseColor,
          'circle-stroke-color': '#fff',
          'circle-stroke-width': 2
        }
      });

      // animates bounce
      seqIdx = 0;
      (function bounce() {
        const r = 5 + bounceSeq[seqIdx]; 
        map.setPaintProperty(hoverLayerId, 'circle-radius', r);
        seqIdx++;
        if (seqIdx < bounceSeq.length) {
          bounceFrame = requestAnimationFrame(bounce);
        }
      })();
    });

    map.on('mouseleave', stationLayerId, () => {
      map.getCanvas().style.cursor = '';
      cancelAnimationFrame(bounceFrame);
      if (map.getLayer(hoverLayerId)) map.removeLayer(hoverLayerId);
    });

    // adds a persistent selected halo and shows popup
    map.on('click', stationLayerId, (e) => {
      const props     = e.features[0].properties;
      const name      = props.station_name || 'Station';
      const coords    = e.features[0].geometry.coordinates.slice();
      const baseColor = map.getPaintProperty(stationLayerId, 'circle-color');

      // clears any previously selected
      legendItems.forEach(it => {
        const oldId = it.id.replace('-path','-stations') + '-selected';
        if (map.getLayer(oldId)) map.removeLayer(oldId);
      });

      // adds selected halo
      map.addLayer({
        id: selLayerId,
        type: 'circle',
        source: stationLayerId,
        filter: ['==', ['get','station_name'], name],
        paint: {
          'circle-radius': 8,
          'circle-color':  baseColor,
          'circle-stroke-color': '#fff',
          'circle-stroke-width': 2
        }
      });

      // shows popup with close handler
      const popup = new mapboxgl.Popup({ offset: 12, closeOnClick: true })
        .setLngLat(coords)
        .setHTML(`
          <button class="mapboxgl-popup-close-button">×</button>
          <strong>${name}</strong>
        `)
        .addTo(map);

      // when user clicks the ✕, remove the selected halo
      popup.on('close', () => {
        if (map.getLayer(selLayerId)) map.removeLayer(selLayerId);
      });
    });
});
  });