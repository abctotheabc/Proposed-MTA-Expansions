const scorecardsImgs = {
  'secondavenue-path': {
    img:  'scorecards/secondavenuescorecard.png',
    text: `
      <p>
        Each project is scored on ridership, time-savings, equity, cost-effectiveness,
        sustainability, resiliency, capacity, geographic distribution, and network leverage.
        <a href="https://future.mta.info/documents/20-YearNeedsAssessment_ComparativeEvaluation.pdf"
           target="_blank">
          Full methodology here</a>.
      </p>`
  },
  'uticaavenue-path': {
    img:  'scorecards/uticaavenuescorecard.png',
    text: `
      <p>
        Each project is scored on ridership, time-savings, equity, cost-effectiveness,
        sustainability, resiliency, capacity, geographic distribution, and network leverage.
        <a href="https://future.mta.info/documents/20-YearNeedsAssessment_ComparativeEvaluation.pdf"
           target="_blank">
          Full methodology here</a>.
      </p>`
  },
  'ibx-path': {
    img:  'scorecards/ibxscorecard.png',
    text: ` 
      <p>
        Each project is scored on ridership, time-savings, equity, cost-effectiveness,
        sustainability, resiliency, capacity, geographic distribution, and network leverage.
        <a href="https://future.mta.info/documents/20-YearNeedsAssessment_ComparativeEvaluation.pdf"
           target="_blank">
          Full methodology here</a>.
      </p>`
  },
  'redhook-w-path': {
    img:  'scorecards/redhook_w_scorecard.png',
    text: `
      <p>
        Each project is scored on ridership, time-savings, equity, cost-effectiveness,
        sustainability, resiliency, capacity, geographic distribution, and network leverage.
        <a href="https://future.mta.info/documents/20-YearNeedsAssessment_ComparativeEvaluation.pdf"
           target="_blank">
          Full methodology here</a>.
      </p>`
  },
  'flatlands-3-path': {
    img:  'scorecards/flatlands_3_scorecard.png',
    text: `
      <p>
        Each project is scored on ridership, time-savings, equity, cost-effectiveness,
        sustainability, resiliency, capacity, geographic distribution, and network leverage.
        <a href="https://future.mta.info/documents/20-YearNeedsAssessment_ComparativeEvaluation.pdf"
           target="_blank">
          Full methodology here</a>.
      </p>`
  },
  // placeholders for the two you’ll fill in later:
  'queenslink-path': {
    img:  '',
    text: `<p>Details coming soon…</p>`
  },
  'tribx-path': {
    img:  '',
    text: `<p>Details coming soon…</p>`
  }
};


const lineDescriptions = {
    'secondavenue-path': `
      <p>The Second Avenue Subway is a long-planned NYC subway line serving Manhattan’s East Side. 
      The proposed full line would span 8.5 miles with 16 stations, serving an estimated 560,000 daily riders. 
      Phase 1 opened in 2017, and Phase 2 (extending from 96th to 125th Street) is underway using some tunnels built in the 1970s. 
      Phase 3 and 4 would extend service south to Hanover Square though they remain unfunded.</p>`,
  
    'uticaavenue-path': `
      <p>The Utica Avenue Line is a proposed extension of the 5 train in southeast Brooklyn aimed at enhancing transit access along one of the city's busiest corridors to Kings Plaza. 
      The project seeks to improve travel options in underserved neighborhoods, while easing congestion along the 2, 3, 4, and 5 lines and the heavily used B46 local and SBS bus routes. 
      The project remains unfunded and has no set timetable for design or construction.</p>`,
  
    'ibx-path': `
      <p>The Interborough Express (IBX) is a proposed 14‑mile line connecting Bay Ridge, Brooklyn with Jackson Heights, Queens via 19 new stations serving 17 subway lines, the LIRR, and 51 bus routes. 
      It aims to cut crosstown travel times by up to half and relieve congestion on existing services. 
      As of early 2025, IBX remains in preliminary environmental review, with construction funding and final design still pending.</p>`,
  
    'flatlands-3-path': `
      <p>The proposed extension of the New Lots Line would bring the 3 train southeast past Livonia Yard to new stops at Linden Boulevard and a terminal at Flatlands Avenue and Linwood/Elton Streets. 
      It holds a perfect score on the MTA’s equity index but carries high costs and scores poorly on sustainability, resilience, capacity, and regional access. 
      The project remains unfunded and has no scheduled design or construction timeline.</p>`,
  
    'queenslink-path': `
      <p>QueensLink is a proposed subway extension of the M train that would reactivate the Rockaway Beach Branch to create the first north–south subway in Queens. 
      The project includes four new stations with transfers to six lines and the LIRR. 
      It’s designed to boost transit equity and convenience by serving 47,000 riders daily. 
      The project is currently unfunded and has no timetable for design or construction.</p>`,
  
    'tribx-path': `
      <p>The Triboro refers to the inclusion of the Bronx in the IBX project, extending beyond Jackson Heights in accordance with the original proposal. 
      It would add seven new stops between Queens and Co-op City, connecting underserved neighborhoods without requiring travel through Manhattan. 
      Unlike the IBX, this northern segment has no funding, timeline, or inclusion in the MTA’s official comparative project evaluation.</p>`,
  
    'redhook-w-path': `
      <p>The proposed extension of the W train to Red Hook would utilize the Montague Street Tunnel into Brooklyn, with three new stations at Columbia Street, Atlantic Basin, and Red Hook. 
      The project would bring long-awaited subway access to Red Hook and connect thousands of NYCHA residents to Lower Manhattan. 
      The project is currently unfunded and has no timetable for design or construction.</p>`
  };

const demographics = {
    'secondavenue-path': { population: '703,936', income: '$136,671', vehicles: '74,744' },
    'tribx-path':        { population: '208,323', income: '$72,783', vehicles: '37,189' },
    'ibx-path':          { population: '632,359', income: '$73,309', vehicles: '105,964' },
    'queenslink-path':   { population: '92,418', income: '$85,254', vehicles: '20,357' },
    'uticaavenue-path':  { population: '142,808', income: '$79,814', vehicles: '28,131' },
    'redhook-w-path':    { population: '49,433', income: '$173,867', vehicles: '8,835' },
    'flatlands-3-path':  { population: '56,160', income: '$65,748', vehicles: '8,426' }
  };


  map.on('load', () => {
    // 2) State
    let panelState    = 1;
    let currentLineId = null;
  
    // 3) Cache DOM
    const infoBox   = document.getElementById('info-box');
    const infoTitle = document.getElementById('info-title');
    const infoBody  = document.getElementById('info-body');
    const nextBtn   = document.getElementById('next-button');
    const backBtn   = document.getElementById('back-button');
  
    // 4) Legend buttons: toggle select/deselect
    document.querySelectorAll('.legend-button').forEach(btn => {
      btn.addEventListener('click', () => {
        const lineId = btn.dataset.lineId;
  
        // — If clicking the already-active button → deselect & reset
        if (currentLineId === lineId) {
          infoBox.style.display = 'none';
          currentLineId = null;
          panelState    = 1;
          document.querySelectorAll('.legend-button')
                  .forEach(b => b.classList.remove('active'));
          return;
        }
  
        // — Otherwise, clear any prior active button
        document.querySelectorAll('.legend-button')
                .forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
  
        // — Initialize panel 1
        currentLineId = lineId;
        panelState    = 1;
        infoTitle.textContent = btn.textContent;
        infoBody.innerHTML    = lineDescriptions[lineId] 
                                || `<p>${btn.textContent} info coming soon.</p>`;
        backBtn.style.display = 'none';
        nextBtn.style.display = 'inline-block';
        infoBox.style.display = 'block';
      });
    });
  
    // 5) “Next →” handler
    nextBtn.addEventListener('click', () => {
      if (!currentLineId) return;
      panelState++;
  
      if (panelState === 2) {
        // Panel 2: demographics
        const d = demographics[currentLineId];
        infoBody.innerHTML = `
          <strong>Demographics (10-min walk):</strong>
          <ul>
            <li><strong>Population:</strong> ${d.population}</li>
            <li><strong>Median Income:</strong> ${d.income}</li>
            <li><strong>Households w/ Vehicles:</strong> ${d.vehicles}</li>
          </ul>`;
        backBtn.style.display = 'inline-block';
        nextBtn.style.display = 'inline-block';
  
      } else if (panelState === 3) {
        // Panel 3: show the scorecard image (or blank placeholder)
        const sc = scorecardsImgs[currentLineId] || { img: '', text: '' };
        const imgHtml = sc.img
          ? `<img src="${sc.img}" 
                  alt="${infoTitle.textContent} Scorecard" 
                  class="scorecard-img"
                  style="
                  max-width:100%; 
                  display:block; 
                  margin:0;
                  max-height: 320px;
                  width: auto;
                  height: auto;">`
          : `<div class="scorecard-placeholder" 
                  style="width:100%; height:200px; background:#f0f0f0;"></div>`;
  
                  const textHtml = sc.text;
                  
        infoBody.innerHTML = imgHtml + textHtml;
        const link = infoBody.querySelector('a');
          if (link) {
            link.style.color = '#E67E22';
          }
        backBtn.style.display = 'inline-block';
        nextBtn.style.display = 'none';
      }
    });
  
    // 6) “← Back” handler
    backBtn.addEventListener('click', () => {
      if (!currentLineId) return;
      panelState--;
  
      if (panelState === 1) {
        // back to panel 1
        infoBody.innerHTML = lineDescriptions[currentLineId];
        backBtn.style.display = 'none';
        nextBtn.style.display = 'inline-block';
  
      } else if (panelState === 2) {
        // back to panel 2
        const d = demographics[currentLineId];
        infoBody.innerHTML = `
          <strong>Demographics (10-min walk):</strong>
          <ul>
            <li><strong>Population:</strong> ${d.population}</li>
            <li><strong>Median Income:</strong> ${d.income}</li>
            <li><strong>Households w/ Vehicles:</strong> ${d.vehicles}</li>
          </ul>`;
        backBtn.style.display = 'inline-block';
        nextBtn.style.display = 'inline-block';
      }
    });
  });
