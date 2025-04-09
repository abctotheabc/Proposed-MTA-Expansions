
// adding mapbox below and navigation controls

mapboxgl.accessToken = 'pk.eyJ1IjoiYWJjOTM4OCIsImEiOiJjbTkxeXp0ZzEwNmg2MmpuN283eWFudDZnIn0.MTMyJc6JPqAIlKGjW8JSvg'

const map = new mapboxgl.Map({
container: 'map-container',
    center: [-73.97744, 40.71595],
    zoom: 10.26,
    bearing: 0,
    pitch: 0,
    maxBounds: [
        [-74.41746, 40.57397], // Southwest corner
        [-73.53742, 40.85763]  // Northeast corner
    ],
    minZoom: 10.26 // prevent zooming out farther than this
})

map.addControl(new mapboxgl.NavigationControl(), 'top-left');

// ✅ Fullscreen toggle
map.addControl(new mapboxgl.FullscreenControl(), 'top-left');

// ✅ Scale bar
map.addControl(new mapboxgl.ScaleControl({
  maxWidth: 100,
  unit: 'imperial'
}), 'bottom-left');





    // adding a geojson file i created below following the path of a proposed subway line

    map.on('load', () => {
        map.addSource('ibx-express', {
          type: 'geojson',
          data: 'ibx-path.geojson'
        });
      
        map.addLayer({
          id: 'ibx-express-line',
          type: 'line',
          source: 'ibx-express',
          paint: {
            'line-color': '#9b8ed8',
            'line-width': 4
          }
        });





        // adding overlay dashed line for animation below

      map.addLayer({
        id: 'ibx-express-dashed',
        type: 'line',
        source: 'ibx-express',
        paint: {
          'line-color': '#ffffff',
          'line-width': 4,
          'line-dasharray': [2, 2]
        }
      });








// adding stations below and their symbol

    map.addSource('ibx-stops', {
      type: 'geojson',
      data: 'ibx-stations.geojson'
    });

    map.loadImage('ibx.png', (error, image) => {
        if (error) throw error;

        if (!map.hasImage('station-icon')) {
            map.addImage('station-icon', image);
          }


        map.addLayer({
      id: 'ibx-stop-icons',
      type: 'symbol',
      source: 'ibx-stops',
      layout: {
        'icon-image': 'station-icon',
        'icon-size': 0.02
          }
        });
    });   





 // Add QueensLink line
 map.addSource('queenslink-path', {
    type: 'geojson',
    data: 'queenslink-path.geojson'
  });

  map.addSource('queenslink-stations', {
    type: 'geojson',
    data: 'queenslink-stations.geojson'
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
  map.addLayer({
    id: 'queenslink-dashed',
    type: 'line',
    source: 'queenslink-path',
    paint: {
      'line-color': '#ffffff',
      'line-width': 4,
      'line-dasharray': [2, 2]
    }
  });





   // Add Triborough line
  map.addSource('tribx-path', {
    type: 'geojson',
    data: 'tribx-path.geojson'
  });

  map.addSource('tribx-stations', {
    type: 'geojson',
    data: 'tribx-stations.geojson'
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

  map.addLayer({
    id: 'tribx-dashed',
    type: 'line',
    source: 'tribx-path',
    paint: {
      'line-color': '#ffffff',
      'line-width': 4,
      'line-dasharray': [2, 2]
    }
  });





     // Add Utica Avenue line
     map.addSource('uticaavenue-path', {
        type: 'geojson',
        data: 'uticaavenue-path.geojson'
      });
    
      map.addSource('uticaavenue-stations', {
        type: 'geojson',
        data: 'uticaavenue-stations.geojson'
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
      map.addLayer({
        id: 'uticaavenue-dashed',
        type: 'line',
        source: 'uticaavenue-path',
        paint: {
          'line-color': '#ffffff',
          'line-width': 4,
          'line-dasharray': [2, 2]
        }
      });






     // Add Second Avenue line
     map.addSource('secondavenue-path', {
        type: 'geojson',
        data: 'secondavenue-path.geojson'
      });
    
      map.addSource('secondavenue-stations', {
        type: 'geojson',
        data: 'secondavenue-stations.geojson'
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
      map.addLayer({
        id: 'secondavenue-dashed',
        type: 'line',
        source: 'secondavenue-path',
        paint: {
          'line-color': '#ffffff',
          'line-width': 4,
          'line-dasharray': [2, 2]
        }
      });






     // Add Red Hook W Extension line
     map.addSource('redhook-w-path', {
        type: 'geojson',
        data: 'redhook-w-path.geojson'
      });
    
      map.addSource('redhook-w-stations', {
        type: 'geojson',
        data: 'redhook-w-stations.geojson'
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
      map.addLayer({
        id: 'redhook-w-dashed',
        type: 'line',
        source: 'redhook-w-path',
        paint: {
          'line-color': '#ffffff',
          'line-width': 4,
          'line-dasharray': [2, 2]
        }
      });









     // Add Flatlands 3 Extension
     map.addSource('flatlands-3-path', {
        type: 'geojson',
        data: 'flatlands-3-path.geojson'
      });
    
      map.addSource('flatlands-3-stations', {
        type: 'geojson',
        data: 'flatlands-3-stations.geojson'
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
      map.addLayer({
        id: 'flatlands-3-dashed',
        type: 'line',
        source: 'flatlands-3-path',
        paint: {
          'line-color': '#ffffff',
          'line-width': 4,
          'line-dasharray': [2, 2]
        }
      });



      

// adding animation below that applies to all lines

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

const animatedLineIds = [
  'ibx-express-dashed',
  'uticaavenue-dashed',
  'tribx-dashed',
  'queenslink-dashed',
  'secondavenue-dashed',
  'flatlands-3-dashed',
  'redhook-w-dashed'
];

function animateDashArray(timestamp) {
  const newStep = Math.floor((timestamp / 50) % dashArraySequence.length);

  if (newStep !== step) {
    animatedLineIds.forEach(id => {
      if (map.getLayer(id)) {
        map.setPaintProperty(id, 'line-dasharray', dashArraySequence[newStep]);
      }
    });
    step = newStep;
  }

  requestAnimationFrame(animateDashArray);
}

animateDashArray(0);


});