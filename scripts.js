// javacode that connects with HTML to allow dialog box to be dismissed

function dismissDialog() {
    document.getElementById('welcome-dialog').style.display = 'none';
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

map.addControl(new mapboxgl.FullscreenControl(), 'top-left');

map.addControl(new mapboxgl.ScaleControl({
  maxWidth: 100,
  unit: 'imperial'
}), 'bottom-left');



    map.on('load', () => {

        


// i built all of these geojson files i'm adding in to my code, with the path for proposed MTA lines and their stations
// adding the IBX line below

map.addSource('ibx-path', {
    type: 'geojson',
    data: 'ibx-path.geojson'
  });

  map.addSource('ibx-stations', {
    type: 'geojson',
    data: 'ibx-stations.geojson'
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
      'circle-width': 3
    }
  });





// adding the QueensLink line below
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






// adding the Triborough line below
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







// adding the Utica Avenue line below
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
   






// adding the Second Avenue line below
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
    






// adding the extension of the W into Red Hook line below
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
 









// adding the extension of the 3 into Flatlands line below
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



// legend with labels to click to animate
const legendItems = [
    { id: 'ibx-path', label: 'Interborough Express', color: '#9b8ed8' },
    { id: 'uticaavenue-path', label: 'Utica Avenue', color: '#00933c' },
    { id: 'secondavenue-path', label: 'Second Avenue', color: '#00add0' },
    { id: 'flatlands-3-path', label: 'Flatlands 3 Extension', color: '#ee352e' },
    { id: 'redhook-w-path', label: 'Red Hook W', color: '#fccc0a' },
    { id: 'tribx-path', label: 'Triborough RX', color: '#fbae34' },
    { id: 'queenslink-path', label: 'QueensLink', color: '#ff6324' }
  ];
  


// collapsible legend container, toggle button, and to show or not show legend depending on clicking the button
const legendContainer = document.createElement('div');
legendContainer.id = 'legend-container';

const toggleButton = document.createElement('button');
toggleButton.id = 'legend-toggle';
toggleButton.textContent = 'Toggle Legend';

toggleButton.addEventListener('click', () => {
  legend.classList.toggle('collapsed');
});

// appending the button to the container
legendContainer.appendChild(toggleButton);

  const legend = document.createElement('div');
  legend.id = 'map-legend';
  
  legendItems.forEach(item => {
    const btn = document.createElement('button');
    btn.className = 'legend-button';
    btn.textContent = item.label;
    btn.style.backgroundColor = item.color;
  
    btn.addEventListener('click', () => {
      const dashedId = `${item.id}-dashed`;
      
      const isAlreadyActive = animatedLayers[dashedId];
  
      Object.keys(animatedLayers).forEach(id => {
        if (map.getLayer(id)) {
          map.removeLayer(id);
        }
      });
      Object.keys(animatedLayers).forEach(id => delete animatedLayers[id]);
  
      // when you click the button, it shows selected and nothing else, when you click it again, it does not show toggled
      document.querySelectorAll('.legend-button').forEach(b => b.classList.remove('selected'));
  
      if (isAlreadyActive) return;
  
      // adds dashed line for animation purposes
      const beforeId = map.getLayer(`${item.id}-stations`) ? `${item.id}-stations` : undefined;

      const stationLayerId = item.id.replace('path', 'stations');

      if (!map.getLayer(dashedId)) {
        const beforeId = map.getLayer(stationLayerId) ? stationLayerId : undefined;
      
        map.addLayer({
          id: dashedId,
          type: 'line',
          source: item.id,
          paint: {
            'line-color': '#ffffff',
            'line-width': 4,
            'line-dasharray': [2, 2]
          }
        }, beforeId);
      }
  
      animatedLayers[dashedId] = true;
      btn.classList.add('selected');
    });
  
    legend.appendChild(btn);
  });
  
  legendContainer.appendChild(legend);
document.body.appendChild(legendContainer);


  
});