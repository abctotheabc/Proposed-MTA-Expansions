// function addPopulationExtrusion(map) {
//     if (map.getSource('population')) return; // Prevent adding it twice
  
//     map.addSource('population', {
//       type: 'geojson',
//       data: 'manhattan-population.geojson'
//     });
  
//     map.addLayer({
//       id: 'population-extrusion',
//       type: 'fill-extrusion',
//       source: 'population',
//       paint: {
//         'fill-extrusion-color': [
//           'step',
//           ['get', 'manhattan census tract population_total_population'],
//           '#ebcece',       // 0 - 3254
//           3254, '#c98989', // 3254 - 6135
//           6135, '#a64545', // 6135 - 9567
//           9567, '#840000'  // 9567 - 16629
//         ],
//         'fill-extrusion-height': [
//           'interpolate',
//           ['linear'],
//           ['get', 'manhattan census tract population_total_population'],
//           0, 0,
//           16629, 12000
//         ],
//         'fill-extrusion-base': 0,
//         'fill-extrusion-opacity': 1
//       }
//     });
//   }





//         // animatedLayers[dashedId] = true;
        // btn.classList.add('selected');
        // if (item.id === 'secondavenue-path') {
        //   map.setLayoutProperty('secondaveavg', 'visibility', 'visible');
        //   if (typeof addPopulationExtrusion === 'function') {
        //     addPopulationExtrusion(map);
        //   }
        // }

        // if (item.id === 'uticaavenue-path') {
        //     map.setLayoutProperty('uticaavenueavg', 'visibility', 'visible');
        // 