
// code for all line specific info and info boxes starting with score cards

const scorecardsImgs = {
  'secondavenue-path': {
    img:  'scorecards/secondavenuescorecard.png',
    text: `
      <p style="font-size: 14px; line-height: 1.4;">
        Along Second Avenue’s 703,936-person corridor, a southward extension of the SAS to Houston Street (Phase 3) and Hanover Square (Phase 4) would deliver substantial ridership despite hefty capital costs. It would also link underserved, predominantly low-income neighborhoods in Upper Manhattan to job centers and economic opportunities in Lower Manhattan. In the MTA’s scorecard, Phase 3 scores above average on cost-effectiveness, earns an average equity rating, and posts a below-average sustainability score. Given the low vehicle ownership in this corridor, the extension’s ridership potential and network ties make it essential for system resilience and equity. Completing all four SAS phases is critical to fully serve Manhattan’s residents and unlock the line’s transformative impact.


        <a href="https://future.mta.info/documents/20-YearNeedsAssessment_ComparativeEvaluation.pdf"
           target="_blank">
          Full methodology here</a>.
      </p>`
  },
  'uticaavenue-path': {
    img:  'scorecards/uticaavenuescorecard.png',
    text: `
      <p style="font-size: 14px; line-height: 1.4;">
        For the roughly 142,800 residents along Utica Avenue, 55.5% of households own at least one vehicle. By offering a fast, reliable alternative to driving, a full subway extension to Kings Plaza would deliver significant time savings and high ridership, earning above-average cost-effectiveness despite its steep capital costs. In the MTA’s scorecard, it ranks high in equity and shows average performance in sustainability, capacity, and regional access; however, resiliency is limited by only two new rail connections, and network leverage remains moderate since most alignment is on city-owned streets. Investing in the Utica Avenue subway extension is imperative; it will transform connectivity, spark economic vitality, and finally deliver the reliable, world-class transit that Brooklyn’s communities have long deserved.


        <a href="https://future.mta.info/documents/20-YearNeedsAssessment_ComparativeEvaluation.pdf"
           target="_blank">
          Full methodology here</a>.
      </p>`
  },
  'ibx-path': {
    img:  'scorecards/ibxscorecard.png',
    text: ` 
      <p style="font-size: 15px; line-height: 1.4;">
        The IBX corridor is home to roughly 632,000 residents with a median household income of $73,309 and nearly half of all households (48.5%) owning at least one vehicle, indicating both strong existing ridership potential and opportunity to shift choice-riders off cars. In the MTA’s scorecard, IBX excels in cost-effectiveness, equity, sustainability, resiliency, geographic distribution, and network leverage. Although it feeds into already crowded lines (earning a moderate capacity score), its substantial gains in equity, reduced vehicle miles, and improved regional mobility far outweigh that trade-off, immediately boosting neighborhood connectivity and economic development.

        <a href="https://future.mta.info/documents/20-YearNeedsAssessment_ComparativeEvaluation.pdf"
           target="_blank">
          Full methodology here</a>.
      </p>`
  },
  'redhook-w-path': {
    img:  'scorecards/redhook_w_scorecard.png',
    text: `
      <p style="font-size: 14px; line-height: 1.4;">
        Red Hook’s 49,433 residents have long been cut off from rapid transit; extending the W line would finally connect this waterfront neighborhood to the subway network. Although high engineering risks like breaking through Montague Tube’s cast-iron lining drive up costs, the project rates very high on capacity by relieving over 8,000 peak‐hour crowding hours on existing Brooklyn corridors. It scores poorly on cost-effectiveness, equity, sustainability, and resiliency (only one new rail connection), but its average network leverage and critical capacity relief make it essential for system resilience. Bringing Red Hook into the grid will unlock economic opportunity for a historically isolated neighborhood and strengthen transit redundancy in a vulnerable waterfront zone.


        <a href="https://future.mta.info/documents/20-YearNeedsAssessment_ComparativeEvaluation.pdf"
           target="_blank">
          Full methodology here</a>.
      </p>`
  },
  'flatlands-3-path': {
    img:  'scorecards/flatlands_3_scorecard.png',
    text: `
    <div>
    <p style="font-size: 15px; line-height: 1.4;">
        Extending the 3 line to Flatlands Avenue would directly serve predominantly equity neighborhoods and help in connecting over 56,000 residents (many of whom rely on transit) and help shift nearly 40 percent of local households away from car dependency. While construction costs are significant, this extension represents a long‐term investment in social equity by providing reliable subway access to underserved areas. Even a modest reduction in auto travel can translate into cleaner air and lower household transportation expenses, and although ridership and time‐savings gains may be incremental at first, improved transit accessibility often spurs local economic development, increases property values, and strengthens community resilience.

        <a href="https://future.mta.info/documents/20-YearNeedsAssessment_ComparativeEvaluation.pdf"
           target="_blank">
          Full methodology here</a>.
      </p>
      </div>`
  },
  'queenslink-path': {
    text: `<p><strong>The MTA’s 20-Year Needs Assessment did not evaluate QueensLink;</strong> this information instead comes from The QueensLink Corridor Analysis: Phase 1 Preliminary Assessment Report (June 2021) prepared by Transportation Economics & Management Systems, Inc. (TEMS). A revised capital analysis puts the cost estimate at $1.8 billion (about $641 million per mile), rising to $3.4–3.7 billion with professional services and contingencies.  The report suggests annual economic impacts of 100,000–150,000 jobs, $9 to $13 billion in income gains, and $50 to $75 billion in property value growth. Riders could save up to 125 hours per year, auto congestion and emissions would decline, and up to 33 acres of new linear parkland could be added alongside the corridor.<p>
    <a href="https://thequeenslink.org/wp-content/uploads/2021/06/The-QueensLink-Corridor-Analysis_Ph-1-Prelim-Assessment-Study-Rpt_June-2021_Final.pdf"
           target="_blank">
          Full methodology here</a>.
          </p>`
  },
  'tribx-path': {
    text: `<p><strong>The MTA’s 20-Year Needs Assessment omitted the Bronx leg of the Triboro from their evaluation,</strong> focusing only on the Brooklyn–Queens link (IBX); instead, this analysis draws on the RPA's Third Regional Plan. With 59% of Bronx households car-free and one-way commutes to Queens averaging 68 minutes, residents lose over 65 hours a year on indirect bus–subway routes. The Triboro—running every 5–15 minutes—would slash travel times, eliminate transit deserts, cut emissions and congestion, and spark economic and parkland growth. Since Penn Station Access will lock the Hell Gate Line into Amtrak and CSX service, any IBX extension into the Bronx would demand a costly, brand-new parallel bridge and alignment. <p>
    <a href="https://s3.us-east-1.amazonaws.com/rpa-org/pdfs/RPA-The-Triboro-Transit-for-the-Boroughs-1.pdf"
           target="_blank">
          Full methodology here</a>.
          </p>`
  }
};

// adding in first panel

const lineDescriptions = {
    'secondavenue-path': `
      <p>The Second Avenue Subway (SAS) is a long-planned NYC subway line serving Manhattan’s East Side. 
      The proposed full line would span 8.5 miles with 16 stations, serving an estimated 560,000 daily riders. 
      Phase 1 opened in 2017, and Phase 2 (extending from 96th to 125th Street) is underway using some tunnels built in the 1970s. 
      Phases 3 and 4 are planned to extend service south to Hanover Square, though they remain unfunded and do not appear in the current Capital Plan.</p>`,
  
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
      It recently received a $400,000 grant from the U.S. Department of Transportation as part of the agency’s Reconnecting Communities Pilot Program, to be used to study the social, environmental, economic and equitable impacts. However, there is no timetable for design or construction.</p>`,
  
    'tribx-path': `
      <p>The Triboro refers to the inclusion of the Bronx in the IBX project, extending beyond Jackson Heights in accordance with the original proposal. 
      It would add seven new stops between Queens and Co-op City, connecting underserved neighborhoods with direct transfer opportunities to existing subway lines and commuter rail services, eliminating any need to detour through Manhattan.
      Unlike the IBX, this northern segment has no funding, timeline, or inclusion in the MTA’s official comparative project evaluation.</p>`,
  
    'redhook-w-path': `
      <p>The proposed extension of the W train to Red Hook would utilize the Montague Street Tunnel into Brooklyn, with three new stations at Columbia Street, Atlantic Basin, and Red Hook. 
      The project would bring long-awaited subway access to Red Hook and connect thousands of NYCHA residents to Lower Manhattan. 
      The project is currently unfunded and has no timetable for design or construction.</p>`
  };

  // adding in second panel, idk why I did these out of order

const demographics = {
    'secondavenue-path': { population: '703,936', income: '$136,671', vehicles: '74,744, 21.6% of all households (out of 345,743)' },
    'tribx-path':        { population: '208,323', income: '$72,783', vehicles: '37,189, 39.4% of all households (out of 94,516)' },
    'ibx-path':          { population: '632,359', income: '$73,309', vehicles: '105,964, 48.5% of all households (out of 218,522)' },
    'queenslink-path':   { population: '92,418', income: '$85,254', vehicles: '20,357, 74% of all households (out of 27,498)' },
    'uticaavenue-path':  { population: '142,808', income: '$79,814', vehicles: '28,131, 55.5% of all households (out of 50,694)' },
    'redhook-w-path':    { population: '49,433', income: '$173,867', vehicles: '8,835, 44.8% of all households (out of 19,707)' },
    'flatlands-3-path':  { population: '56,160', income: '$65,748', vehicles: '8,426, 39.9% of all households (out of 21,109)' }
  };


  map.on('load', () => {
    let panelState    = 1;
    let currentLineId = null;
  
    const infoBox   = document.getElementById('info-box');
    const infoTitle = document.getElementById('info-title');
    const infoBody  = document.getElementById('info-body');
    const nextBtn   = document.getElementById('next-button');
    const backBtn   = document.getElementById('back-button');
  
    // 4) toggles select/deselect
    document.querySelectorAll('.legend-button').forEach(btn => {
      btn.addEventListener('click', () => {
        const lineId = btn.dataset.lineId;
  
        // deselect & reset
        if (currentLineId === lineId) {
          infoBox.style.display = 'none';
          currentLineId = null;
          panelState    = 1;
          document.querySelectorAll('.legend-button')
                  .forEach(b => b.classList.remove('active'));
          return;
        }
  
        // otherwise clear any prior active button
        document.querySelectorAll('.legend-button')
                .forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
  
        // panel 1
        currentLineId = lineId;
        panelState    = 1;
        infoTitle.textContent = btn.textContent;
        infoBody.innerHTML    = lineDescriptions[lineId] 
                                || `<p>${btn.textContent} info coming soon.</p>`;
        infoBox.style.maxWidth = '300px';
        infoBody.style.fontSize = '1em';
        backBtn.style.display = 'none';
        nextBtn.style.display = 'inline-block';
        infoBox.style.display = 'block';
      });
    });
  
    // 5 next button
    nextBtn.addEventListener('click', () => {
      if (!currentLineId) return;
      panelState++;
  
      if (panelState === 2) {
        // panel 2 shows demographics
        const d = demographics[currentLineId];
        infoBody.innerHTML = `
        <p>
          The shaded area on the map shows every location reachable within a 10-minute walk of this line’s stations.
          Displaying the total population, median household income, and number of households with vehicles
          in this zone is key to understanding who stands to gain improved transit access and to gauge
          potential demand, equity impacts, and funding priorities.</p> 
          <br>
          <strong>Demographics:</strong>
          <ul style="margin-top: 5px;">
            <li><strong>Population:</strong> ${d.population}</li>
            <li><strong>Median Household Income:</strong> ${d.income}</li>
            <li><strong>Households w/ Vehicles:</strong> ${d.vehicles}</li>
          </ul>`;
          infoBox.style.maxWidth = '300px';
        infoBody.style.fontSize = '1em';
        backBtn.style.display = 'inline-block';
        nextBtn.style.display = 'inline-block';
  
      } else if (panelState === 3) {
        // panel 3 shows the scorecard image or text
        const sc = scorecardsImgs[currentLineId] || { img: '', text: '' };
        const imgHtml = sc.img
          ? `<img src="${sc.img}" 
                  alt="${infoTitle.textContent} Scorecard" 
                  class="scorecard-img"
                  style="
                  max-width:100%; 
                  display:block; 
                  margin:0;
                  max-height: 400px;
                  width: auto;
                  height: auto;">`: `</div>`;
  
                  const textHtml = sc.text;
                  
                    infoBody.innerHTML = `
                  <div style="display:flex; align-items:flex-start; gap:12px;">
                   ${imgHtml}
                   
                        <div style="flex:1; font-size:1em; line-height:1.4;">
                         ${textHtml}
                       </div>
                      </div>
                   `
                   infoBox.style.maxWidth = '640px';;


        const link = infoBody.querySelector('a');
          if (link) {
            link.style.color = '#A0CECB';
          }
        infoBody.style.fontSize = '1em';
        backBtn.style.display = 'inline-block';
        nextBtn.style.display = 'none';
      }
    });
  
    // 6) the back button
    backBtn.addEventListener('click', () => {
      if (!currentLineId) return;
      panelState--;
  
      if (panelState === 1) {
        // back to panel 1
        infoBody.innerHTML = lineDescriptions[currentLineId];
        infoBox.style.maxWidth = '300px';
        backBtn.style.display = 'none';
        nextBtn.style.display = 'inline-block';
  
      } else if (panelState === 2) {
        // back to panel 2
        const d = demographics[currentLineId];
        infoBody.innerHTML = `
          <p>
          The shaded area on the map shows every location reachable within a 10-minute walk of this line’s stations.
          Displaying the total population, median household income, and number of households with vehicles
          in this zone is key to understanding who stands to gain improved transit access and to gauge
          potential demand, equity impacts, and funding priorities.</p> 
          <br>
          <strong>Demographics:</strong>
          <ul style="margin-top: 5px;">
            <li><strong>Population:</strong> ${d.population}</li>
            <li><strong>Median Household Income:</strong> ${d.income}</li>
            <li><strong>Households w/ Vehicles:</strong> ${d.vehicles}</li>
          </ul>`;
          infoBox.style.maxWidth = '300px';
        backBtn.style.display = 'inline-block';
        nextBtn.style.display = 'inline-block';
      }
    });
  });
