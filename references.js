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
    aboutBtn.textContent = 'Info/References';
    legend.appendChild(aboutBtn);
  
    let panel = 1;
  
    // panel 1 with the about the project
    function showAboutPanel() {
      panel = 1;
      infoTitle.textContent = 'About the Project';
      infoBody.innerHTML = `
        <p>This interactive tool highlights major proposed subway projects across New York City. Each route features data-driven context, visuals of walkable access, and insights into key metrics for the area around the proposed line. Here’s how to get started:</p>

<p><strong>1.</strong> Select a line by clicking its button in the legend to open three panels: a project overview, a corridor analysis, and a performance score or external evaluation.</p>

  <p><strong>2.</strong> Once a line is active, station names appear on the map. Click a station to open a popup with data and an analysis of residents within the surrounding 10-minute walk area.</p>

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
        <strong>American Community Survey</strong>
          <ul>
        <li><a href="https://data.census.gov/table/S1903?tid=ACSST1Y2023.S1903" target="_blank">
          S1903 Median Income in the Past 12 Months</li>
            <li><a href="https://data.census.gov/table/DP05?tid=ACSDP1Y2023.DP05" target="_blank">
          DP05ACS Demographic and Housing Estimates</li>
            <li><a href="https://data.census.gov/table/S2504?tid=ACSST1Y2023.S2504" target="_blank">
          S2504 Physical Housing Characteristics for Occupied Units</li>
        <li><a href="https://data.census.gov/table/ACSST1Y2023.S0802?q=S0802" target="_blank">
      S0802 Means of Transportation to Work</li>
        <li><a href="https://data.census.gov/table/ACSST1Y2023.S1701?q=s1701" target="_blank">
      S1701 Poverty Status in the Past 12 Months</li>
        <li><a href="https://data.census.gov/table/ACSDT1Y2023.B08303?q=B08303" target="_blank">
      B08303 Journey to Work by Means of Transportation</li>
      </ul>
    </a>
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
  <li>
    <strong>MTA 20-Year Needs Assessment:</strong>
    <a href="https://future.mta.info/documents/20-YearNeedsAssessment_ComparativeEvaluation.pdf" target="_blank">
      Appendix 06 – Comparative Evaluation
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