
// adding mapbox below

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

function animateDashArray(timestamp) {
  const newStep = Math.floor((timestamp / 50) % dashArraySequence.length);

  if (newStep !== step) {
    map.setPaintProperty(
      'ibx-express-dashed',
      'line-dasharray',
      dashArraySequence[newStep]
    );
    step = newStep;
  }

  requestAnimationFrame(animateDashArray);
}

animateDashArray(0);

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

      
 });