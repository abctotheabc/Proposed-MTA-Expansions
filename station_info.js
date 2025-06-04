// station_info.js for all the code for the specific stations on each line
// the idea for this code in the future iteration (outside of the classroom final project) is to then input more specific data within each station button

// station_info.js

// ─── 0) Station‐specific HTML snippets ─────────────────────────────────────
const stationData = {
  "Flatlands Ave": `
    <h3>Flatlands Ave</h3>
  <em>(residents within 10-min walk)</em><br>
    <strong>Race / Ethnicity</strong><br>
    ▪ 3.12% White<br>
    ▪ 75.15% Black or African-American<br>
    ▪ 0.18% American Indian or Alaska Native<br>
    ▪ 0.25% Asian<br>
    ▪ 13.74% Some Other Race<br>
    ▪ 21.40% Hispanic or Latino (of any race)<br>

    <strong>Vehicle Access</strong><br>
    ▪ 61.18% have no vehicles available<br>

    <strong>Commute Mode to Work</strong><br>
    ▪ 24.22% drove alone<br>
    ▪ 1.30% carpooled<br>
    ▪ 56.72% took public transit<br>

    <strong>Commute Time to Work</strong><br>
    ▪ ≤ 30 mins: 1,329 (20.85%)<br>
    ▪ 31–44 mins: 1,125 (17.65%)<br>
    ▪ ≥ 45 mins: 3,921 (61.51%)<br>

    <strong>Poverty (FPL)</strong><br>
    ▪ below 50%: 12.35%<br>
    ▪ below 150%: 32.51%<br>
    ▪ below 200%: 42.26%<br>

    <strong>Median Income</strong><br>
    ▪ $53,108
  `,

  "Linden Blvd": `
  <h3>Linden Blvd</h3>
  <em>(residents within 10-min walk)</em><br>
  <strong>Race / Ethnicity</strong><br>
  ▪ 4.55% White<br>
  ▪ 72.56% Black or African American<br>
  ▪ 0.04% American Indian or Alaska Native<br>
  ▪ 3.12% Asian<br>
  ▪ 0.08% Native Hawaiian or Other Pacific Islander<br>
  ▪ 14.89% Some Other Race<br>
  ▪ 20.89% Hispanic or Latino (of any race)<br>

    <strong>Median Income</strong><br>
  ▪ $68,832<br>

  <strong>Commute Mode to Work</strong><br>
  ▪ 28.29% drove alone<br>
  ▪ 4.23% carpooled<br>
  ▪ 51.65% took public transit<br>
  ▪ 7.71% worked at home<br>

  <strong>Commute Time to Work</strong><br>
  ▪ ≤ 30 mins: 20.61%<br>
  ▪ 31–44 mins: 24.82%<br>
  ▪ ≥ 45 mins: 54.57%<br>

  <strong>Poverty (FPL)</strong><br>
  ▪ below 50%: 13.80%<br>
  ▪ below 150%: 29.94%<br>
  ▪ below 200%: 41.05%<br>

  <strong>Vehicle Access</strong><br>
  ▪ 59.05% have no vehicles available<br>
`,

"New Lots Av": `
  <h3>New Lots Av</h3>
    No additional data was collected for this station, as it has been in operation prior to our data collection period.
`,



  // Add more stations here in the same format:
  // "Another Station Name": `<h3>Another Station</h3>…`,
  // …
};













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


// 4) for each station‐circle layer, add click behavior:
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

    map.on('click', stationLayerId, (e) => {
      const props     = e.features[0].properties;
      const name      = props.station_name || 'Unknown Station';
      const coords    = e.features[0].geometry.coordinates.slice();
      const baseColor = map.getPaintProperty(stationLayerId, 'circle-color');
  
      // 4a) Clear any previously selected halos
      legendItems.forEach(it => {
        const oldId = it.id.replace('-path','-stations') + '-selected';
        if (map.getLayer(oldId)) map.removeLayer(oldId);
      });
  
      // 4b) Add the “selected” halo for this station
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

// 4c) Build the popup content (same as before)
const stationHtml = stationData[name] 
  ? stationData[name] 
  : `<h3>${name}</h3><p>No data available for this station.</p>`;

// 4d) Show the AnimatedPopup instead of mapboxgl.Popup
const popup = new AnimatedPopup({
    offset: 12,
    openingAnimation: {
      duration: 1000,
      easing: 'easeOutElastic',
      transform: 'scale'
    },
    closingAnimation: {
      duration: 300,
      easing: 'easeInBack',
      transform: 'scale'
    }
  })
  .setLngLat(coords)
  .setHTML(`
    <button class="mapboxgl-popup-close-button">×</button>
    ${stationHtml}
  `)
  .addTo(map);

// 4e) When the popup closes, remove the selected halo
popup.on('close', () => {
  if (map.getLayer(selLayerId)) map.removeLayer(selLayerId);
});
  });
});
});