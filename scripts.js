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


// i built all of these geojson files i'm adding in to my code, with the path for proposed MTA lines and their stations
// adding background MTA lines + stations

map.addSource('mtalines', {
    type: 'geojson',
    data: 'mtalines.geojson'
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
    data: 'mtastations.geojson'
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
    data: 'secondavenueavg.geojson'
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
    data: 'uticaavenueavg.geojson'
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
    data: 'ibxavg.geojson'
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
    data: 'tribxavg.geojson'
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
    data: 'queenslinkavg.geojson'
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
    data: 'redhook-w-avg.geojson'
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
    data: 'flatlands-3-avg.geojson'
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
//


























      

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

      
        // when you deselect a button, everything resets
        if (isAlreadyActive) {
          document.getElementById('info-box').classList.add('hidden');
          document.querySelectorAll('.legend-button').forEach(b => b.classList.remove('selected'));
      
          resetMapOverlays(); // ✅ Only reset when de-selecting
          return;
        }
      
        // reset all
        resetMapOverlays();

        
      
        // reset dashed layer
        Object.keys(animatedLayers).forEach(id => {
          if (map.getLayer(id)) {
            map.removeLayer(id);
          }
        });
        Object.keys(animatedLayers).forEach(id => delete animatedLayers[id]);
      
        // reset buttons
        document.querySelectorAll('.legend-button').forEach(b => b.classList.remove('selected'));
      
        // dashed line that gets animated
        const stationLayerId = item.id.replace('path', 'stations');
        const beforeId = map.getLayer(stationLayerId) ? stationLayerId : undefined;
      
        if (!map.getLayer(dashedId)) {
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

        

        // show polygon/10 min isochrone on click
const polygonMap = {
    'secondavenue-path': 'secondaveavg',
    'uticaavenue-path': 'uticaavenueavg',
    'ibx-path': 'ibxavg',
    'tribx-path': 'tribxavg',
    'queenslink-path': 'queenslinkavg',
    'redhook-w-path': 'redhook-w-avg',
    'flatlands-3-path': 'flatlands-3-avg'
  };
  
  const polygonId = polygonMap[item.id];
  if (polygonId && map.getLayer(polygonId)) {
    map.setLayoutProperty(polygonId, 'visibility', 'visible');
  }
      
        animatedLayers[dashedId] = true;
        btn.classList.add('selected');
      
        if (item.id === 'secondavenue-path') {
          map.setLayoutProperty('secondaveavg', 'visibility', 'visible');
        }

        if (item.id === 'uticaavenue-path') {
            map.setLayoutProperty('uticaavenueavg', 'visibility', 'visible');
          }

        const infoBox = document.getElementById('info-box');
const infoClose = document.getElementById('info-close');

infoBox.classList.remove('hidden');


// resetting info boxe
document.getElementById('panel-1').classList.remove('hidden');
document.getElementById('panel-2').classList.add('hidden');
document.getElementById('panel-3').classList.add('hidden');

// info box expansion
document.getElementById('expand-1').addEventListener('click', () => {
  document.getElementById('panel-2').classList.remove('hidden');
});

document.getElementById('expand-2').addEventListener('click', () => {
  document.getElementById('panel-3').classList.remove('hidden');
});

document.getElementById('collapse-1').addEventListener('click', () => {
  document.getElementById('panel-2').classList.add('hidden');
});

document.getElementById('collapse-2').addEventListener('click', () => {
  document.getElementById('panel-3').classList.add('hidden');
});

// reset animations when boxes are closed
document.getElementById('info-close').addEventListener('click', () => {
  document.getElementById('info-box').classList.add('hidden');
  document.getElementById('panel-1').classList.remove('hidden');
  document.getElementById('panel-2').classList.add('hidden');
  document.getElementById('panel-3').classList.add('hidden');
});

document.getElementById('panel-2').style.left = '360px';
document.getElementById('panel-3').style.left = '720px';

document.getElementById('info-title').textContent = item.label;

//content for every button's first info box

if (item.id === 'secondavenue-path') {
  document.getElementById('panel-1').classList.remove('hidden');
  document.getElementById('info-content-1').textContent =
    "The Second Avenue Subway is a long-planned NYC subway line serving Manhattan’s East Side. The proposed full line would span 8.5 miles with 16 stations, serving an estimated 560,000 daily riders. Phase 1 opened in 2017, and Phase 2 (extending from 96th to 125th Street) is underway using some tunnels built in the 1970s. Phase 3 and 4 would extend service south to Hanover Square though they remain unfunded.";

} else if (item.id === 'uticaavenue-path') {
  document.getElementById('panel-1').classList.remove('hidden');
  document.getElementById('info-content-1').textContent =
    "The Utica Avenue Line is a proposed extension of the 5 train in southeast Brooklyn aimed at enhancing transit access along one of the city's busiest corridors to Kings Plaza. The project seeks to improve travel options in underserved neighborhoods, while easing congestion along the 2, 3, 4, and 5 lines and the heavily used B46 local and SBS bus routes. The project remains unfunded and has no set timetable for design or construction.";

  } else if (item.id === 'ibx-path') {
    document.getElementById('panel-1').classList.remove('hidden');
    document.getElementById('info-content-1').textContent =
      "The Interborough Express (IBX) is a proposed 14‑mile line connecting Bay Ridge, Brooklyn with Jackson Heights, Queens via 19 new stations serving 17 subway lines, the LIRR, and 51 bus routes. It aims to cut crosstown travel times by up to half and relieve congestion on existing services. As of early 2025, IBX remains in preliminary environmental review, with construction funding and final design still pending.";

    } else if (item.id === 'flatlands-3-path') {
      document.getElementById('panel-1').classList.remove('hidden');
      document.getElementById('info-content-1').textContent =
        "The proposed extension of the New Lots Line would bring the 3 train southeast past Livonia Yard to new stops at Linden Boulevard and a terminal at Flatlands Avenue and Linwood/Elton Streets. It holds a perfect score on the MTA’s equity index but carries high costs and scores poorly on sustainability, resilience, capacity, and regional access. The project remains unfunded and has no scheduled design or construction timeline.";

      } else if (item.id === 'queenslink-path') {
        document.getElementById('panel-1').classList.remove('hidden');
        document.getElementById('info-content-1').textContent =
          "QueensLink is a proposed subway extension of the M train that would reactivate the Rockaway Beach Branch to create the first north–south subway in Queens. The project includes four new stations with transfers to six lines and the LIRR. It’s designed to boost transit equity and convenience by serving 47,000 riders daily. The project is currently unfunded and has no timetable for design or construction.";

        } else if (item.id === 'tribx-path') {
          document.getElementById('panel-1').classList.remove('hidden');
          document.getElementById('info-content-1').textContent =
            "The Triboro refers to the inclusion of the Bronx in the IBX project, extending beyond Jackson Heights in accordance with the original proposal. It would add seven new stops between Queens and Co-op City, connecting underserved neighborhoods without requiring travel through Manhattan. Unlike the IBX, this northern segment has no funding, timeline, or inclusion in the MTA’s official comparative project evaluation.";

          } else if (item.id === 'redhook-w-path') {
            document.getElementById('panel-1').classList.remove('hidden');
            document.getElementById('info-content-1').textContent =
              "The proposed extension of the W train to Red Hook would utilize the Montague Street Tunnel into Brooklyn, with three new stations at Columbia Street, Atlantic Basin, and Red Hook. The project would bring long-awaited subway access to Red Hook and connect thousands of NYCHA residents to Lower Manhattan. The project is currently unfunded and has no timetable for design or construction.";
          }

//content for every button's second info box
   
document.getElementById('info-content-2').innerHTML = `
<strong>Demographics & Access (10‑min walk of ${item.label} stations):</strong>
<ul style="margin:4px 0 8px 16px; padding:0; list-style: disc;">
  <li><strong>Population:</strong> XXX</li>
  <li><strong>Median Household Income:</strong> $XXX</li>
  <li><strong>Households with Vehicles:</strong> XX%</li>
</ul>
<p style="margin:0;">
  The shaded polygon shows all blocks within a 10‑minute walk (≈½ mile) of the proposed 
  ${item.label} stations — that is, the primary catchment area and potential ridership base for this line.
</p>
`;

// third panel adds an image (this will be updated eventually to reflect each line individually)
document.getElementById('info-content-3').innerHTML = `
<img src="secondavenuescorecard.png" alt="Second Avenue Subway Map" style="width: 100%; border-radius: 3px;">
<p style="margin-top: 8px; font-size: 10px;">Source: MTA 20-Year Needs Assessment</p>
`;


// i'm no expert but i get the feeling i must have completely nuked the section below and over coded but i'm too nervous
// to consolidate and break something on the site cause it's working flawlessly

// closing the boxes
document.getElementById('info-close').addEventListener('click', () => {
  infoBox.classList.add('hidden');
});

// expanding info boxes
const expandBtn1 = document.getElementById('expand-info-1');
const expandBtn2 = document.getElementById('expand-info-2');
const infoBox2 = document.getElementById('info-box-2');
const infoBox3 = document.getElementById('info-box-3');

// open to second box
expandBtn1.addEventListener('click', () => {
  infoBox2.classList.remove('hidden');
  expandBtn1.classList.add('hidden'); // hide current expand button
});

// open to third box
expandBtn2.addEventListener('click', () => {
  infoBox3.classList.remove('hidden');
  expandBtn2.classList.add('hidden'); // hide current expand button
});

document.getElementById('panel-1').classList.remove('hidden');
document.getElementById('panel-2').classList.add('hidden');
document.getElementById('panel-3').classList.add('hidden');

// buttons to collapse boxes
document.getElementById('collapse-info-2')?.addEventListener('click', () => {
  infoBox2.classList.add('hidden');
  expandBtn1.classList.remove('hidden');
  infoBox3.classList.add('hidden');
  expandBtn2.classList.remove('hidden');
});

// the code below just explains what the arrows are doing within the info boxes, either hiding themselves or opening on click
document.getElementById('expand-1').addEventListener('click', () => {
    document.getElementById('panel-1').classList.add('hidden');
    document.getElementById('panel-2').classList.remove('hidden');
  });
  
  document.getElementById('expand-2').addEventListener('click', () => {
    document.getElementById('panel-2').classList.add('hidden');
    document.getElementById('panel-3').classList.remove('hidden');
  });
  
  document.getElementById('collapse-1').addEventListener('click', () => {
    document.getElementById('panel-2').classList.add('hidden');
    document.getElementById('panel-1').classList.remove('hidden');
  });
  
  document.getElementById('collapse-2').addEventListener('click', () => {
    document.getElementById('panel-3').classList.add('hidden');
    document.getElementById('panel-2').classList.remove('hidden');
  });
  
  document.getElementById('info-close').addEventListener('click', () => {
    document.getElementById('info-box').classList.add('hidden');
    document.getElementById('panel-1').classList.remove('hidden');
    document.getElementById('panel-2').classList.add('hidden');
    document.getElementById('panel-3').classList.add('hidden');
  });

  document.getElementById('info-close').addEventListener('click', () => {
    document.getElementById('info-box').classList.add('hidden');
    document.getElementById('panel-1').classList.remove('hidden');
    document.getElementById('panel-2').classList.add('hidden');
    document.getElementById('panel-3').classList.add('hidden');
  });


      });
    legend.appendChild(btn);
  });
  
  legendContainer.appendChild(legend);
document.body.appendChild(legendContainer);

});