// references.js, where the code for the about the project/references button is

map.on('load', () => {
    const legend    = document.getElementById('map-legend');
    const infoBox   = document.getElementById('info-box');
    const infoTitle = document.getElementById('info-title');
    const infoBody  = document.getElementById('info-body');
    const nextBtn   = document.getElementById('next-button');
    const backBtn   = document.getElementById('back-button');
    if (!legend) return;
  
    // separates lines from about button just to make it more apparent that this is different from the rest
    const separator = document.createElement('div');
    separator.className   = 'legend-separator';
    separator.textContent = '──────────';
    legend.appendChild(separator);
  
    // about button
    const aboutBtn = document.createElement('button');
    aboutBtn.id          = 'about-button';
    aboutBtn.className   = 'legend-button about-button';
    aboutBtn.textContent = 'Project Info/References';
    legend.appendChild(aboutBtn);
  
    let panel = 1;
  
    // panel 1 with the about the project
    function showAboutPanel() {
      panel = 1;
      infoTitle.textContent = 'About the Project';
      infoBody.innerHTML = `
        <p>This interactive tool highlights major proposed subway projects across New York City — including the Interborough Express, Second Avenue Subway, QueensLink, and more. Each route features data-driven context, visuals of walkable access, and insights into demographics, population size, income, and other key metrics for the area around the proposed line.</p>
        <br>
        <p>👆 Click a line in the legend to begin exploring and learn more about each project’s vision and footprint. </p>
        <br>
        <p>This map was built with Mapbox GL JS.</p>

        <button id="ref-switch" class="info-switch">References</button>
      `;
      infoBody.style.fontSize = '0.85em';
      document.getElementById('ref-switch')
              .addEventListener('click', showReferencesPanel);
  
      infoBox.style.display = 'block';
      nextBtn.style.display = 'none';
      backBtn.style.display = 'none';
    }
  
    // panel 2 with all my references
    function showReferencesPanel() {
      panel = 2;
      infoTitle.textContent = 'References';
      infoBody.innerHTML = `
        <ul>
      <li>
        <strong>American Community Survey:</strong>
        <a href="https://data.census.gov/table/S1903?tid=ACSST1Y2023.S1903" target="_blank">
          S1903 Median Income in the Past 12 Months (2023 Inflation-Adjusted)
        </a> — ACS 1-Year Estimates Subject Tables
      </li>
      <li>
        <strong>American Community Survey:</strong>
        <a href="https://data.census.gov/table/DP05?tid=ACSDP1Y2023.DP05" target="_blank">
          DP05ACS Demographic and Housing Estimates
        </a> — ACS 1-Year Data Profiles
      </li>
      <li>
        <strong>American Community Survey:</strong>
        <a href="https://data.census.gov/table/S2504?tid=ACSST1Y2023.S2504" target="_blank">
          S2504 Physical Housing Characteristics for Occupied Units
        </a> — ACS 1-Year Estimates Subject Tables
      </li>
      <li>
        <strong>TravelTime Plugin:</strong> Plugin ID 1685 — TravelTime API for QGIS
      </li>
      <li>
        <a href="https://data.ny.gov/Transportation/MTA-Subway-Stations/39hk-dx4f/about_data" target="_blank">
          MTA Subway Stations dataset
        </a> — NYC Open Data
      </li>
      <li>
        <a href="https://thequeenslink.org/" target="_blank">The QueensLink Project</a>
      </li>
      <li>
        <a href="https://rpa.org/work/reports/the-triboro" target="_blank">RPA’s The Triboro Report</a>
      </li>
      <li>
        <a href="https://www.arcgis.com/home/item.html?id=325fcb1745fc42259ddc90a08c0f7fc3" target="_blank">
          NYC Open Data – Subway Lines layer
        </a>
      </li>
    </ul>
    <button id="about-switch" class="info-switch">About the Project</button>
  `;
  infoBody.style.fontSize = '0.85em';
  infoBody.querySelectorAll('a').forEach(link => link.style.color = '#A0CECB');
      document.getElementById('about-switch')
              .addEventListener('click', showAboutPanel);
  
      infoBox.style.display = 'block';
      nextBtn.style.display = 'none';
      backBtn.style.display = 'none';
    }
  
    // click for the About button
    aboutBtn.addEventListener('click', () => {
      document.querySelectorAll('.legend-button.selected')
        .forEach(btn => {
          if (btn !== aboutBtn) btn.click();
        });
  
      const nowSelected = aboutBtn.classList.toggle('selected');
  
      // resets map view with a 1s ease animation
      map.easeTo({
        center:   [-73.97744, 40.71595],
        zoom:     10.26,
        bearing:  0,
        pitch:    0,
        duration: 1000,
        essential: true
      });
  
      if (nowSelected) {
        showAboutPanel();
      } else {
        infoBox.style.display = 'none';
        panel = 1;
      }
    });
  });