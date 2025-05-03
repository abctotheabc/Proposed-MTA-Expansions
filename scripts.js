// javacode that connects with HTML to allow dialog box to be dismissed

function dismissDialog() {
  const dialog = document.getElementById('welcome-dialog');
  dialog.classList.add('fade-out');

  setTimeout(() => {
    dialog.style.display = 'none';
  }, 800); // 800ms matches your CSS transition duration
}

// adding mapbox below and navigation controls, locked in for just a section of NY/CT/NJ so people don't zoom to other places

mapboxgl.accessToken = 'pk.eyJ1IjoiYWJjOTM4OCIsImEiOiJjbTkxeXp0ZzEwNmg2MmpuN283eWFudDZnIn0.MTMyJc6JPqAIlKGjW8JSvg'

const map = new mapboxgl.Map({
container: 'map-container',
    style: 'mapbox://styles/mapbox/light-v11',
    center: [-73.97744, 40.71595],
    zoom: 10.26,
    bearing: 0,
    pitch: 0,
    maxBounds: [
        [-74.41746, 40.57397],
        [-73.53742, 40.85763]
    ],
    minZoom: 10.26
})


map.addControl(new mapboxgl.NavigationControl(), 'top-left');

map.addControl(new mapboxgl.ScaleControl({
  maxWidth: 100,
  unit: 'imperial'
}), 'bottom-left');

// adding 3d buildings!! you have to really zoom in to activate it but this will be for the third iteration of my code not done yet

    map.on('load', () => {

      map.addLayer({
        id: '3d-buildings',
        source: 'composite',
        'source-layer': 'building',
        filter: ['==', 'extrude', 'true'],
        type: 'fill-extrusion',
        minzoom: 15,
        paint: {
          'fill-extrusion-color': '#aaa',
          'fill-extrusion-height': ['get', 'height'],
          'fill-extrusion-base': ['get', 'min_height'],
          'fill-extrusion-opacity': 0.6
        }
      });

      map.addSource('boroughboundaries', {
        type: 'geojson',
        data: 'extras/borough_boundaries.geojson'
      });
    
      map.addLayer({
        id: 'boroughboundaries',
        type: 'line', 
        source: 'boroughboundaries',
        paint: {
        'line-color': '#000000',    
        'line-width': 0.9,
        'line-opacity': .5
        }
    });


// i built all of these geojson files i'm adding in to my code, with the path for proposed MTA lines and their stations
// adding background MTA lines + stations

map.addSource('mtalines', {
    type: 'geojson',
    data: 'paths/mtalines.geojson'
  });

  map.addLayer({
    id: 'mtalines',
    type: 'line', 
    source: 'mtalines',
    paint: {
    'line-color': '#731424',    
    'line-width': 0.6,
    'line-opacity': .2
    }
});

map.addSource('mtastations', {
    type: 'geojson',
    data: 'stations/mtastations.geojson'
  });

  map.addLayer({
    id: 'mtastations',
    type: 'circle', 
    source: 'mtastations',
    paint: {
    'circle-color': '#000000',    
    'circle-radius': 2,
    'circle-opacity': .2
    }
});

// adding proposed lines 10 min walking polygons

map.addSource('secondave_avg', {
    type: 'geojson',
    data: '10-min-walk/secondavenueavg.geojson'
  });

  map.addLayer({
    id: 'secondaveavg',
    type: 'fill',
    source: 'secondave_avg',
    layout: {
        visibility: 'none'
      },
    paint: {
    'fill-color': '#00add0',     
    'fill-opacity': .2 
    
    }
});

map.addSource('uticaavenue_avg', {
    type: 'geojson',
    data: '10-min-walk/uticaavenueavg.geojson'
  });

  map.addLayer({
    id: 'uticaavenueavg',
    type: 'fill',
    source: 'uticaavenue_avg',
    layout: {
        visibility: 'none'
      },
    paint: {
    'fill-color': '#00933c',     
    'fill-opacity': .2 
    
    }
});

map.addSource('ibxavg', {
    type: 'geojson',
    data: '10-min-walk/ibxavg.geojson'
  });

  map.addLayer({
    id: 'ibxavg',
    type: 'fill',
    source: 'ibxavg',
    layout: {
        visibility: 'none'
      },
    paint: {
    'fill-color': '#9b8ed8',     
    'fill-opacity': .2 
    
    }
});

map.addSource('tribxavg', {
    type: 'geojson',
    data: '10-min-walk/tribxavg.geojson'
  });

  map.addLayer({
    id: 'tribxavg',
    type: 'fill',
    source: 'tribxavg',
    layout: {
        visibility: 'none'
      },
    paint: {
    'fill-color': '#fbae34',     
    'fill-opacity': .2 
    
    }
});

map.addSource('queenslinkavg', {
    type: 'geojson',
    data: '10-min-walk/queenslinkavg.geojson'
  });

  map.addLayer({
    id: 'queenslinkavg',
    type: 'fill',
    source: 'queenslinkavg',
    layout: {
        visibility: 'none'
      },
    paint: {
    'fill-color': '#ff6324',     
    'fill-opacity': .2 
    
    }
});

map.addSource('redhook-w-avg', {
    type: 'geojson',
    data: '10-min-walk/redhook-w-avg.geojson'
  });

  map.addLayer({
    id: 'redhook-w-avg',
    type: 'fill',
    source: 'redhook-w-avg',
    layout: {
        visibility: 'none'
      },
    paint: {
    'fill-color': '#fccc0a',     
    'fill-opacity': .2 
    
    }
});

map.addSource('flatlands-3-avg', {
    type: 'geojson',
    data: '10-min-walk/flatlands-3-avg.geojson'
  });

  map.addLayer({
    id: 'flatlands-3-avg',
    type: 'fill',
    source: 'flatlands-3-avg',
    layout: {
        visibility: 'none'
      },
    paint: {
    'fill-color': '#ee352e',     
    'fill-opacity': .2 
    
    }
});


// adding the IBX line below

map.addSource('ibx-path', {
    type: 'geojson',
    data: 'paths/ibx-path.geojson'
  });

  map.addSource('ibx-stations', {
    type: 'geojson',
    data: 'stations/ibx_stations.geojson'
  });

  map.addLayer({
    id: 'ibx-line',
    type: 'line',
    source: 'ibx-path',
    paint: {
      'line-color': '#9b8ed8',
      'line-width': 3
    }
  });

  map.addLayer({
    id: 'ibx-stations',
    type: 'circle',
    source: 'ibx-stations',
    paint: {
      'circle-color': '#9b8ed8',
      'circle-width': 3,
    }
});





// adding the QueensLink line below
 map.addSource('queenslink-path', {
    type: 'geojson',
    data: 'paths/queenslink_path.geojson'
  });

  map.addSource('queenslink-stations', {
    type: 'geojson',
    data: 'stations/queenslink_stations.geojson'
  });

  map.addLayer({
    id: 'queenslink-line',
    type: 'line',
    source: 'queenslink-path',
    paint: {
      'line-color': '#ff6324',
      'line-width': 3
    }
  });

  map.addLayer({
    id: 'queenslink-stations',
    type: 'circle',
    source: 'queenslink-stations',
    paint: {
      'circle-color': '#ff6324',
      'circle-width': 3
    }
  });






// adding the Triborough line below
  map.addSource('tribx-path', {
    type: 'geojson',
    data: 'paths/triboro_path.geojson'
  });

  map.addSource('tribx-stations', {
    type: 'geojson',
    data: 'stations/triboro_stations.geojson'
  });

  map.addLayer({
    id: 'tribx-line',
    type: 'line',
    source: 'tribx-path',
    paint: {
      'line-color': '#fbae34',
      'line-width': 3
    }
  });

  map.addLayer({
    id: 'tribx-stations',
    type: 'circle',
    source: 'tribx-stations',
    paint: {
      'circle-color': '#fbae34',
      'circle-width': 3
    }
  });







// adding the Utica Avenue line below
     map.addSource('uticaavenue-path', {
        type: 'geojson',
        data: 'paths/uticaavenue_path.geojson'
      });
    
      map.addSource('uticaavenue-stations', {
        type: 'geojson',
        data: 'stations/uticaavenue_stations.geojson'
      });
    
      map.addLayer({
        id: 'uticaavenue-line',
        type: 'line',
        source: 'uticaavenue-path',
        paint: {
          'line-color': '#00933c',
          'line-width': 3
        }
      });
    
      map.addLayer({
        id: 'uticaavenue-stations',
        type: 'circle',
        source: 'uticaavenue-stations',
        paint: {
          'circle-color': '#00933c',
          'circle-width': 3
        }
      });
   






// adding the Second Avenue line below
     map.addSource('secondavenue-path', {
        type: 'geojson',
        data: 'paths/secondavenue-path.geojson'
      });
    
      map.addSource('secondavenue-stations', {
        type: 'geojson',
        data: 'stations/secondavenue_stations.geojson'
      });
    
      map.addLayer({
        id: 'secondavenue-line',
        type: 'line',
        source: 'secondavenue-path',
        paint: {
          'line-color': '#00add0',
          'line-width': 3
        }
      });
    
      map.addLayer({
        id: 'secondavenue-stations',
        type: 'circle',
        source: 'secondavenue-stations',
        paint: {
          'circle-color': '#00add0',
          'circle-width': 3
        }
      });
    






// adding the extension of the W into Red Hook line below
     map.addSource('redhook-w-path', {
        type: 'geojson',
        data: 'paths/redhook-w-path.geojson'
      });
    
      map.addSource('redhook-w-stations', {
        type: 'geojson',
        data: 'stations/redhook_w_stations.geojson'
      });
    
      map.addLayer({
        id: 'redhook-w-line',
        type: 'line',
        source: 'redhook-w-path',
        paint: {
          'line-color': '#fccc0a',
          'line-width': 3
        }
      });
    
      map.addLayer({
        id: 'redhook-w-stations',
        type: 'circle',
        source: 'redhook-w-stations',
        paint: {
          'circle-color': '#fccc0a',
          'circle-width': 3
        }
      });
 









// adding the extension of the 3 into Flatlands line below
     map.addSource('flatlands-3-path', {
        type: 'geojson',
        data: 'paths/flatlands_3_path.geojson'
      });
    
      map.addSource('flatlands-3-stations', {
        type: 'geojson',
        data: 'stations/flatlands_3_stations.geojson'
      });
    
      map.addLayer({
        id: 'flatlands-3-line',
        type: 'line',
        source: 'flatlands-3-path',
        paint: {
          'line-color': '#ee352e',
          'line-width': 3
        }
      });
    
      map.addLayer({
        id: 'flatlands-3-stations',
        type: 'circle',
        source: 'flatlands-3-stations',
        paint: {
          'circle-color': '#ee352e',
          'circle-width': 3
        }
      });
//
      
























const stationLayers = [
  'ibx-stations',
  'queenslink-stations',
  'tribx-stations',
  'uticaavenue-stations',
  'secondavenue-stations',
  'redhook-w-stations',
  'flatlands-3-stations'
];

// adding ant animation below that applies to all lines that will show a dashed line in comparision to static color

const dashArraySequence = [
    [0, 4, 3],
    [0.5, 4, 2.5],
    [1, 4, 2],
    [1.5, 4, 1.5],
    [2, 4, 1],
    [2.5, 4, 0.5],
    [3, 4, 0],
    [0, 0.5, 3, 3.5],
    [0, 1, 3, 3],
    [0, 1.5, 3, 2.5],
    [0, 2, 3, 2],
    [0, 2.5, 3, 1.5],
    [0, 3, 3, 1],
    [0, 3.5, 3, 0.5]
  ];

  let step = 0;

  const animatedLayers = {};

function animateDashArray(timestamp) {
  const newStep = Math.floor((timestamp / 50) % dashArraySequence.length);

  if (newStep !== step) {
    Object.keys(animatedLayers).forEach(id => {
        if (map.getLayer(id)) {
          map.setPaintProperty(id, 'line-dasharray', dashArraySequence[newStep]);
        }
      });
    step = newStep;
  }

  requestAnimationFrame(animateDashArray);
}

animateDashArray(0);

// reset all animations and overlays
function resetMapOverlays() {

  legendItems.forEach(item => {
    const lineId = item.id.replace('-path', '-line');
    if (map.getLayer(lineId)) {
      map.setPaintProperty(lineId, 'line-opacity', 1);
    }
  });
  
  // Reset all station opacities to 1
  stationLayers.forEach(layerId => {
    if (map.getLayer(layerId)) {
      map.setPaintProperty(layerId, 'circle-opacity', 1);
    }
  });


    // remove all line animations
    const allDashedLayers = [
      'ibx-path-dashed',
      'uticaavenue-path-dashed',
      'secondavenue-path-dashed',
      'flatlands-3-path-dashed',
      'redhook-w-path-dashed',
      'tribx-path-dashed',
      'queenslink-path-dashed'
    ];
  
    allDashedLayers.forEach(id => {
      if (map.getLayer(id)) {
        map.removeLayer(id);
      }
    });
  
    // clear tracking
    Object.keys(animatedLayers).forEach(id => delete animatedLayers[id]);
  
    // hide all polygons until clicked later down in code
    const polygonLayers = [
        'secondaveavg',
        'uticaavenueavg',
        'ibxavg',
        'tribxavg',
        'queenslinkavg',
        'redhook-w-avg',
        'flatlands-3-avg'
      ];
    
      polygonLayers.forEach(id => {
        if (map.getLayer(id)) {
          map.setLayoutProperty(id, 'visibility', 'none');
        }
      });

    }




    

// legend with labels to click to animate
const legendItems = [
    { id: 'ibx-path', label: 'Interborough Express', color: '#9b8ed8' },
    { id: 'uticaavenue-path', label: 'Utica Avenue Line', color: '#00933c' },
    { id: 'secondavenue-path', label: 'Second Avenue Subway', color: '#00add0' },
    { id: 'flatlands-3-path', label: '3 Train to Flatlands', color: '#ee352e' },
    { id: 'redhook-w-path', label: 'W Train to Red Hook', color: '#fccc0a' },
    { id: 'tribx-path', label: 'The Triboro', color: '#fbae34' },
    { id: 'queenslink-path', label: 'QueensLink', color: '#ff6324' }
  ];


// 2️⃣ build the DOM
  const legendContainer = document.createElement('div');
  legendContainer.id = 'legend-container';
  const legend = document.createElement('div');
  legend.id = 'map-legend';

  // 3️⃣ create one button per line
  legendItems.forEach(item => {
    const btn = document.createElement('button');
    btn.className           = 'legend-button';
    btn.textContent         = item.label;
    btn.style.backgroundColor = item.color;
    btn.dataset.lineId      = item.id;

    btn.addEventListener('click', () => {
      const dashedId     = `${item.id}-dashed`;
      const wasSelected = btn.classList.contains('selected');
    
      if (wasSelected) {
        // 🛑 De-select: remove the dash-layer, unregister it, reset everything
        btn.classList.remove('selected');
        if (map.getLayer(dashedId)) {
          map.removeLayer(dashedId);
          delete animatedLayers[dashedId];
        }
        resetMapOverlays();
        return;
      }
    
      // 🔄 Select new line:
      // 1) clear existing overlays & unselect any other button
      resetMapOverlays();
      document.querySelectorAll('.legend-button.selected')
              .forEach(b => b.classList.remove('selected'));
    
      // 2) mark this one selected
      btn.classList.add('selected');
    
      // 3) add & register its animated dash layer
      const stationLayerId = item.id.replace('-path','-stations');
      map.addLayer({
        id: dashedId,
        type: 'line',
        source: item.id,
        paint: {
          'line-color':    '#ffffff',
          'line-width':     4,
          'line-dasharray': [2,2]
        }
      }, stationLayerId);
      animatedLayers[dashedId] = true;
    
      // 4) show its 10-min polygon
      const polygons = {
        'secondavenue-path':'secondaveavg',
        'uticaavenue-path':'uticaavenueavg',
        'ibx-path':'ibxavg',
        'tribx-path':'tribxavg',
        'queenslink-path':'queenslinkavg',
        'redhook-w-path':'redhook-w-avg',
        'flatlands-3-path':'flatlands-3-avg'
      };
      const poly = polygons[item.id];
      if (poly) map.setLayoutProperty(poly, 'visibility', 'visible');
    
      // 5) dim all non-selected lines + stations
      legendItems.forEach(other => {
        const otherLine     = other.id.replace('-path','-line');
        const otherStations = other.id.replace('-path','-stations');
        const highlight     = other.id === item.id;
        map.setPaintProperty(otherLine,     'line-opacity',   highlight ? 1 : 0.1);
        map.setPaintProperty(otherStations, 'circle-opacity', highlight ? 1 : 0.2);
      });
    });

    legend.appendChild(btn);
  });

  // 4️⃣ attach and show the legend
  legendContainer.appendChild(legend);
  document.body.appendChild(legendContainer);
});