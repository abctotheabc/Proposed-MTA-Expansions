// references.js

map.on('load', () => {
    // grab legend + info‐box elements
    const legend    = document.getElementById('map-legend');
    const infoBox   = document.getElementById('info-box');
    const infoTitle = document.getElementById('info-title');
    const infoBody  = document.getElementById('info-body');
    const nextBtn   = document.getElementById('next-button');
    const backBtn   = document.getElementById('back-button');
    if (!legend) return;
  
    // ➊ Separator
    const separator = document.createElement('div');
    separator.className   = 'legend-separator';
    separator.textContent = '──────────';
    legend.appendChild(separator);
  
    // ➋ About button
    const aboutBtn = document.createElement('button');
    aboutBtn.id          = 'about-button';
    aboutBtn.className   = 'legend-button about-button';
    aboutBtn.textContent = 'Project Info/References';
    legend.appendChild(aboutBtn);
  
    let panel = 1;
  
    // Panel 1: About
    function showAboutPanel() {
      panel = 1;
      infoTitle.textContent = 'About the Project';
      infoBody.innerHTML = `
        <p>This map was built with Mapbox GL JS. Here’s a quick summary:</p>
        <ul>
          <li>Data from MTA station buffers & 10-min walk isochrones</li>
          <li>Geometry hosted in GeoJSON files under <code>/paths</code> and <code>/10-min-walk</code></li>
        </ul>
        <button id="ref-switch" class="info-switch">References</button>
      `;
      document.getElementById('ref-switch')
              .addEventListener('click', showReferencesPanel);
  
      infoBox.style.display = 'block';
      nextBtn.style.display = 'none';
      backBtn.style.display = 'none';
    }
  
    // Panel 2: References
    function showReferencesPanel() {
      panel = 2;
      infoTitle.textContent = 'References';
      infoBody.innerHTML = `
        <ul>
          <li><a href="https://github.com/you/your-repo" target="_blank">GitHub Code</a></li>
          <li><a href="https://docs.mapbox.com/" target="_blank">Mapbox GL JS Docs</a></li>
          <li>NYC Open Data – Borough boundaries</li>
        </ul>
        <button id="about-switch" class="info-switch">About the Project</button>
      `;
      document.getElementById('about-switch')
              .addEventListener('click', showAboutPanel);
  
      infoBox.style.display = 'block';
      nextBtn.style.display = 'none';
      backBtn.style.display = 'none';
    }
  
    // ➌ Click handler for the About button
    aboutBtn.addEventListener('click', () => {
      // If any other legend-button is selected, trigger its click to reset that layer
      document.querySelectorAll('.legend-button.selected')
        .forEach(btn => {
          if (btn !== aboutBtn) btn.click();
        });
  
      // Toggle About’s own selected state
      const nowSelected = aboutBtn.classList.toggle('selected');
  
      // Reset map view with a 1s ease animation
      map.easeTo({
        center:   [-73.97744, 40.71595],
        zoom:     10.26,
        bearing:  0,
        pitch:    0,
        duration: 1000,
        essential: true
      });
  
      if (nowSelected) {
        // Show About content
        showAboutPanel();
      } else {
        // Hide box & reset panel
        infoBox.style.display = 'none';
        panel = 1;
      }
    });
  });