// flying.js

// 1) your fly‐to targets
const flyParams = {
    'secondavenue-path':  { center: [-73.99537716927611, 40.757910262638404], zoom: 11.608442744700787 },
    'tribx-path':         { center: [-73.90405219680713, 40.804772877805476], zoom: 11.457030556632628 },
    'ibx-path':           { center: [-73.94558538994599, 40.68514452609543], zoom: 11.457030556632633 },
    'queenslink-path':    { center: [-73.86206151118796, 40.704986101193356], zoom: 12.685886257025276 },
    'uticaavenue-path':   { center: [-73.93854269361694, 40.63989911862603], zoom: 12.383061880889004 },
    'redhook-w-path':     { center: [-74.00824520196834, 40.68105914633469], zoom: 13.693096985959958 },
    'flatlands-3-path':   { center: [-73.88067042425244, 40.66118120319271], zoom: 14.298745738232537 }
  };
  
  // 2) your “home” view
  const homeView = {
    center: [-73.97744, 40.71595],
    zoom:   10.26,
    bearing: 0,
    pitch:   0
  };
  
  // 3) once the map (and your legend) have loaded, hook each button
  map.on('load', () => {
    document.querySelectorAll('.legend-button').forEach(btn => {
      const lineId = btn.dataset.lineId;
      btn.addEventListener('click', () => {
        if (btn.classList.contains('selected')) {
          // just got selected → fly into that line
          const p = flyParams[lineId];
          map.flyTo({
            center:  p.center,
            zoom:    p.zoom,
            bearing: 0,
            pitch:   0,
            duration:   2000,
            essential:   true,
          });
        } else {
          // got de‐selected → fly back home
          map.flyTo({
            center:  homeView.center,
            zoom:    homeView.zoom,
            bearing: homeView.bearing,
            pitch:   homeView.pitch,
            duration:   1000,
            essential:   true
          });
        }
      });
    });
  });