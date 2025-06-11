// station_info.js for all the code for the specific stations on each line
// the idea for this code in the future iteration (outside of the classroom final project) is to then input more specific data within each station button

// station_info.js

// ─── 0) Station‐specific HTML snippets ─────────────────────────────────────
const stationData = {
  "Flatlands Ave": `
    <h3>Flatlands Ave</h3>
  <em>(residents within 10-min walk)</em><br>
    <strong>Race / Ethnicity</strong><br>
    ▪ 3.12% White<br>
    ▪ 75.15% Black or African-American<br>
    ▪ 0.18% American Indian or Alaska Native<br>
    ▪ 0.25% Asian<br>
    ▪ 13.74% Some Other Race<br>
    ▪ 21.40% Hispanic or Latino (of any race)<br>

    <strong>Vehicle Access</strong><br>
    ▪ 61.18% have no vehicles available<br>

    <strong>Commute Mode to Work</strong><br>
    ▪ 24.22% drove alone<br>
    ▪ 1.30% carpooled<br>
    ▪ 56.72% took public transit<br>

    <strong>Commute Time to Work</strong><br>
    ▪ ≤ 30 mins: 1,329 (20.85%)<br>
    ▪ 31–44 mins: 1,125 (17.65%)<br>
    ▪ ≥ 45 mins: 3,921 (61.51%)<br>

    <strong>Poverty (FPL)</strong><br>
    ▪ below 50%: 12.35%<br>
    ▪ below 150%: 32.51%<br>
    ▪ below 200%: 42.26%<br>

    <strong>Median Income</strong><br>
    ▪ $53,108
  `,

  "Linden Blvd": `
  <h3>Linden Blvd</h3>
  <em>(residents within 10-min walk)</em><br>
  <strong>Race / Ethnicity</strong><br>
  ▪ 4.55% White<br>
  ▪ 72.56% Black or African American<br>
  ▪ 0.04% American Indian or Alaska Native<br>
  ▪ 3.12% Asian<br>
  ▪ 0.08% Native Hawaiian or Other Pacific Islander<br>
  ▪ 14.89% Some Other Race<br>
  ▪ 20.89% Hispanic or Latino (of any race)<br>

    <strong>Median Income</strong><br>
  ▪ $68,832<br>

  <strong>Commute Mode to Work</strong><br>
  ▪ 28.29% drove alone<br>
  ▪ 4.23% carpooled<br>
  ▪ 51.65% took public transit<br>
  ▪ 7.71% worked at home<br>

  <strong>Commute Time to Work</strong><br>
  ▪ ≤ 30 mins: 20.61%<br>
  ▪ 31–44 mins: 24.82%<br>
  ▪ ≥ 45 mins: 54.57%<br>

  <strong>Poverty (FPL)</strong><br>
  ▪ below 50%: 13.80%<br>
  ▪ below 150%: 29.94%<br>
  ▪ below 200%: 41.05%<br>

  <strong>Vehicle Access</strong><br>
  ▪ 59.05% have no vehicles available<br>
`,

"New Lots Av": `
  <h3>New Lots Av</h3>
    No additional data was collected for this station, as it has been in operation prior to our data collection period.
`,

"Red Hook": `
  <h3>Red Hook</h3>
  <em>(residents within 10-min walk)</em><br>
  <strong>Race / Ethnicity</strong><br>
  ▪ 57.12% White<br>
  ▪ 21.67% Black or African American<br>
  ▪ 0.33% American Indian or Alaska Native<br>
  ▪ 3.66% Asian<br>
  ▪ 0.08% Native Hawaiian or Other Pacific Islander<br>
  ▪ 9.05% Some Other Race<br>
  ▪ 20.86% Hispanic or Latino (of any race)<br>

  <strong>Median Income</strong><br>
  ▪ $127,943<br>

  <strong>Commute Mode to Work</strong><br>
  ▪ 10.75% drove alone<br>
  ▪ 1.95% carpooled<br>
  ▪ 38.55% took public transit<br>
  ▪ 30.04% worked at home<br>

  <strong>Commute Time to Work</strong><br>
  ▪ ≤ 30 mins: 29.03%<br>
  ▪ 31–44 mins: 38.26%<br>
  ▪ ≥ 45 mins: 32.71%<br>

  <strong>Poverty (FPL)</strong><br>
  ▪ below 50%: 10.12%<br>
  ▪ below 150%: 26.47%<br>
  ▪ below 200%: 30.19%<br>

  <strong>Vehicle Access</strong><br>
  ▪ 58.24% have no vehicles available<br>
`,

"Atlantic Basin": `
  <h3>Atlantic Basin</h3>
  <em>(residents within 10-min walk)</em><br>
  <strong>Race / Ethnicity</strong><br>
  ▪ 37.15% White<br>
  ▪ 33.08% Black or African American<br>
  ▪ 0.16% American Indian or Alaska Native<br>
  ▪ 5.18% Asian<br>
  ▪ 0.02% Native Hawaiian or Other Pacific Islander<br>
  ▪ 14.19% Some Other Race<br>
  ▪ 29.03% Hispanic or Latino (of any race)<br>

  <strong>Median Income</strong><br>
  ▪ $121,136<br>

  <strong>Commute Mode to Work</strong><br>
  ▪ 15.58% drove alone<br>
  ▪ 2.17% carpooled<br>
  ▪ 34.30% took public transit<br>
  ▪ 23.01% worked at home<br>

  <strong>Commute Time to Work</strong><br>
  ▪ ≤ 30 mins: 38.22%<br>
  ▪ 31–44 mins: 27.69%<br>
  ▪ ≥ 45 mins: 34.09%<br>

  <strong>Poverty (FPL)</strong><br>
  ▪ below 50%: 15.60%<br>
  ▪ below 150%: 39.88%<br>
  ▪ below 200%: 44.67%<br>

  <strong>Vehicle Access</strong><br>
  ▪ 63.12% have no vehicles available<br>
`,

"Columbia St": `
  <h3>Columbia St</h3>
  <em>(residents within 10-min walk)</em><br>
  <strong>Race / Ethnicity</strong><br>
  ▪ 73.82% White<br>
  ▪ 3.48% Black or African American<br>
  ▪ 6.44% Asian<br>
  ▪ 2.24% Some Other Race<br>
  ▪ 8.94% Hispanic or Latino (of any race)<br>

  <strong>Median Income</strong><br>
  ▪ $179,350<br>

  <strong>Vehicle Access</strong><br>
  ▪ 52.01% have no vehicles available<br>

  <strong>Commute Mode to Work</strong><br>
  ▪ 5.30% drove alone<br>
  ▪ 1.12% carpooled<br>
  ▪ 43.68% took public transit<br>
  ▪ 32.13% worked at home<br>

  <strong>Commute Time to Work</strong><br>
  ▪ ≤ 30 mins: 32.45%<br>
  ▪ 31–44 mins: 38.52%<br>
  ▪ ≥ 45 mins: 29.03%<br>

  <strong>Poverty (FPL)</strong><br>
  ▪ below 50%: 3.47%<br>
  ▪ below 150%: 7.53%<br>
  ▪ below 200%: 9.38%<br>
`,

"Liberty Av - Rockaway Blvd": `
  <h3>Liberty Av – Rockaway Blvd</h3>
  <em>(residents within 10-min walk)</em><br>
  <strong>Race / Ethnicity</strong><br>
  ▪ 18.31% White<br>
  ▪ 7.41% Black or African American<br>
  ▪ 2.08% American Indian & Alaska Native<br>
  ▪ 28.30% Asian<br>
  ▪ 0.08% Native Hawaiian & Other Pacific Islander<br>
  ▪ 28.52% Some Other Race<br>
  ▪ 37.74% Hispanic or Latino (of any race)<br>

    <strong>Median Income</strong><br>
  ▪ $82,829<br>

  <strong>Commute Mode to Work</strong><br>
  ▪ 32.82% drove alone<br>
  ▪ 6.06% carpooled<br>
  ▪ 42.36% took public transit<br>
  ▪ 10.91% worked at home<br>

  <strong>Commute Time to Work</strong><br>
  ▪ ≤ 30 mins: 21.70%<br>
  ▪ 31–44 mins: 24.56%<br>
  ▪ ≥ 45 mins: 53.74%<br>

  <strong>Poverty (FPL)</strong><br>
  ▪ below 50%: 7.13%<br>
  ▪ below 150%: 23.14%<br>
  ▪ below 200%: 31.83%<br>

  <strong>Vehicle Access</strong><br>
  ▪ 29.27% have no vehicles available<br>

`,

"Atlantic Av - Woodhaven": `
  <h3>Atlantic Av – Woodhaven</h3>
  <em>(residents within 10-min walk)</em><br>
  <strong>Race / Ethnicity</strong><br>
  ▪ 18.67% White<br>
  ▪ 4.31% Black or African American<br>
  ▪ 0.29% American Indian & Alaska Native<br>
  ▪ 23.51% Asian<br>
  ▪ 0.27% Native Hawaiian & Other Pacific Islander<br>
  ▪ 35.42% Some Other Race<br>
  ▪ 50.45% Hispanic or Latino (of any race)<br>

    <strong>Median Income</strong><br>
  ▪ $86,959<br>

  <strong>Commute Mode to Work</strong><br>
  ▪ 34.85% drove alone<br>
  ▪ 7.14% carpooled<br>
  ▪ 38.77% took public transit<br>
  ▪ 13.27% worked at home<br>

  <strong>Commute Time to Work</strong><br>
  ▪ ≤ 30 mins: 26.09%<br>
  ▪ 31–44 mins: 24.09%<br>
  ▪ ≥ 45 mins: 49.82%<br>

  <strong>Poverty (FPL)</strong><br>
  ▪ below 50%: 6.24%<br>
  ▪ below 150%: 21.06%<br>
  ▪ below 200%: 28.08%<br>

  <strong>Vehicle Access</strong><br>
  ▪ 26.87% have no vehicles available<br>

`,

"Jamaica Av - 104 St": `
  <h3>Jamaica Av – 104 St</h3>
  <em>(residents within 10-min walk)</em><br>
  <strong>Race / Ethnicity</strong><br>
  ▪ 25.31% White<br>
  ▪ 3.93% Black or African American<br>
  ▪ 0.51% American Indian & Alaska Native<br>
  ▪ 20.33% Asian<br>
  ▪ 0.19% Native Hawaiian & Other Pacific Islander<br>
  ▪ 31.35% Some Other Race<br>
  ▪ 48.43% Hispanic or Latino (of any race)<br>

    <strong>Median Income</strong><br>
  ▪ $90,914<br>

  <strong>Commute Mode to Work</strong><br>
  ▪ 31.47% drove alone<br>
  ▪ 6.44% carpooled<br>
  ▪ 45.37% took public transit<br>
  ▪ 9.94% worked at home<br>

  <strong>Commute Time to Work</strong><br>
  ▪ ≤ 30 mins: 26.84%<br>
  ▪ 31–44 mins: 22.53%<br>
  ▪ ≥ 45 mins: 50.63%<br>

  <strong>Poverty (FPL)</strong><br>
  ▪ below 50%: 5.03%<br>
  ▪ below 150%: 19.05%<br>
  ▪ below 200%: 26.45%<br>

  <strong>Vehicle Access</strong><br>
  ▪ 25.19% have no vehicles available<br>

`,

"Metropolitan Av - Parkside": `
  <h3>Metropolitan Av – Parkside</h3>
  <em>(residents within 10-min walk)</em><br>
  <strong>Race / Ethnicity</strong><br>
  ▪ 58.09% White<br>
  ▪ 0.66% Black or African American<br>
  ▪ 23.76% Asian<br>
  ▪ 5.24% Some Other Race<br>
  ▪ 17.66% Hispanic or Latino (of any race)<br>

    <strong>Vehicle Access</strong><br>
  ▪ 19.46% have no vehicles available<br>

    <strong>Median Income</strong><br>
  ▪ $102,833<br>

      <strong>Commute Mode to Work</strong><br>
  ▪ 37.57% drove alone<br>
  ▪ 6.08% carpooled<br>
  ▪ 34.63% took public transit<br>
  ▪ 16.90% worked at home<br>

  <strong>Commute Time to Work</strong><br>
  ▪ ≤ 30 mins: 24.36%<br>
  ▪ 31–44 mins: 20.58%<br>
  ▪ ≥ 45 mins: 55.06%<br>

  <strong>Poverty (FPL)</strong><br>
  ▪ below 50%: 5.86%<br>
  ▪ below 150%: 15.03%<br>
  ▪ below 200%: 24.16%<br>

`,

"63 Dr - Rego Park": `
  <h3>63 Dr - Rego Park</h3>
    No additional data was collected for this station, as it has been in operation prior to our data collection period.
`,

"Jackson Heights": `
  <h3>Jackson Heights</h3>
    No additional data was collected for this station, as it has been in operation prior to our data collection period.
`,

"Northern Boulevard": `
  <h3>Northern Boulevard</h3>
  <em>(residents within 10-min walk)</em><br>
  <strong>Race / Ethnicity</strong><br>
  ▪ 27.20% White<br>
  ▪ 1.24% Black or African American<br>
  ▪ 0.87% American Indian & Alaska Native<br>
  ▪ 44.57% Asian<br>
  ▪ 0.08% Native Hawaiian & Other Pacific Islander<br>
  ▪ 10.84% Some Other Race<br>
  ▪ 32.52% Hispanic or Latino (of any race)<br>

    <strong>Median Income</strong><br>
  ▪ $81,192<br>

  <strong>Commute Mode to Work</strong><br>
  ▪ 19.50% drove alone<br>
  ▪ 4.51% carpooled<br>
  ▪ 52.88% took public transit<br>
  ▪ 11.58% worked at home<br>

  <strong>Commute Time to Work</strong><br>
  ▪ ≤ 30 mins: 31.12%<br>
  ▪ 31–44 mins: 38.14%<br>
  ▪ ≥ 45 mins: 30.74%<br>

  <strong>Poverty (FPL)</strong><br>
  ▪ below 50%: 3.11%<br>
  ▪ below 150%: 18.95%<br>
  ▪ below 200%: 29.45%<br>

  <strong>Vehicle Access</strong><br>
  ▪ 46.89% have no vehicles available
`,

"Astoria-Ditmars Blvd": `
  <h3>Astoria-Ditmars Blvd</h3>
  <em>(residents within 10-min walk)</em><br>
  <strong>Race / Ethnicity</strong><br>
  ▪ 64.53% White<br>
  ▪ 3.76% Black or African American<br>
  ▪ 0.68% American Indian & Alaska Native<br>
  ▪ 11.80% Asian<br>
  ▪ 0.09% Native Hawaiian & Other Pacific Islander<br>
  ▪ 7.86% Some Other Race<br>
  ▪ 21.97% Hispanic or Latino (of any race)<br>

    <strong>Median Income</strong><br>
  ▪ $109,250<br>

  <strong>Commute Mode to Work</strong><br>
  ▪ 18.21% drove alone<br>
  ▪ 2.53% carpooled<br>
  ▪ 47.99% took public transit<br>
  ▪ 21.94% worked at home<br>

  <strong>Commute Time to Work</strong><br>
  ▪ ≤ 30 mins: 22.49%<br>
  ▪ 31–44 mins: 32.06%<br>
  ▪ ≥ 45 mins: 45.45%<br>

  <strong>Poverty (FPL)</strong><br>
  ▪ below 50%: 4.53%<br>
  ▪ below 150%: 16.09%<br>
  ▪ below 200%: 21.83%<br>

  <strong>Vehicle Access</strong><br>
  ▪ 43.37% have no vehicles available<br>
`,

"Randall's Island": `
  <h3>Randall’s Island</h3>
  <em>(residents within 10-min walk)</em><br>
  <strong>Race / Ethnicity</strong><br>
  ▪ 19.48% White<br>
  ▪ 54.02% Black or African American<br>
  ▪ 0.63% American Indian & Alaska Native<br>
  ▪ 1.69% Asian<br>
  ▪ 0.89% Native Hawaiian & Other Pacific Islander<br>
  ▪ 21.64% Some Other Race<br>
  ▪ 30.77% Hispanic or Latino (of any race)<br>

    <strong>Median Income</strong><br>
  ▪ No data available<br>

  <strong>Commute Mode to Work</strong><br>
  ▪ 2.36% drove alone<br>
  ▪ 2.36% carpooled<br>
  ▪ 77.75% took public transit<br>
  ▪ 10.47% worked at home<br>

  <strong>Commute Time to Work</strong><br>
  ▪ ≤ 30 mins: 21.05%<br>
  ▪ 31–44 mins: 27.78%<br>
  ▪ ≥ 45 mins: 51.17%<br>

  <strong>Poverty (FPL)</strong><br>
  ▪ below 50%: 44.27%<br>
  ▪ below 150%: 85.69%<br>
  ▪ below 200%: 93.74%<br>

  <strong>Vehicle Access</strong><br>
  ▪ No data available<br>
`,

"Hunts Point": `
  <h3>Hunts Point</h3>
  <em>(residents within 10-min walk)</em><br>
  <strong>Race / Ethnicity</strong><br>
  ▪ 7.64% White<br>
  ▪ 31.72% Black or African American<br>
  ▪ 0.77% American Indian & Alaska Native<br>
  ▪ 0.67% Asian<br>
  ▪ 0.57% Native Hawaiian & Other Pacific Islander<br>
  ▪ 42.43% Some Other Race<br>
  ▪ 68.88% Hispanic or Latino (of any race)<br>

    <strong>Median Income</strong><br>
  ▪ $36,438<br>

  <strong>Commute Mode to Work</strong><br>
  ▪ 18.00% drove alone<br>
  ▪ 4.58% carpooled<br>
  ▪ 58.08% took public transit<br>
  ▪ 7.45% worked at home<br>

  <strong>Commute Time to Work</strong><br>
  ▪ ≤ 30 mins: 30.36%<br>
  ▪ 31–44 mins: 25.08%<br>
  ▪ ≥ 45 mins: 44.56%<br>

  <strong>Poverty (FPL)</strong><br>
  ▪ below 50%: 15.56%<br>
  ▪ below 150%: 46.40%<br>
  ▪ below 200%: 59.45%<br>

  <strong>Vehicle Access</strong><br>
  ▪ 68.68% have no vehicles available<br>
`,

"Parkchester": `
  <h3>Parkchester</h3>
  <em>(residents within 10-min walk)</em><br>
  <strong>Race / Ethnicity</strong><br>
  ▪ 13.20% White<br>
  ▪ 30.06% Black or African American<br>
  ▪ 1.08% American Indian & Alaska Native<br>
  ▪ 15.11% Asian<br>
  ▪ 29.82% Some Other Race<br>
  ▪ 46.90% Hispanic or Latino (of any race)<br>

    <strong>Commute Mode to Work</strong><br>
  ▪ 22.65% drove alone<br>
  ▪ 3.19% carpooled<br>
  ▪ 56.51% took public transit<br>
  ▪ 8.09% worked at home<br>

    <strong>Median Income</strong><br>
  ▪ $59,166<br>

  <strong>Commute Time to Work</strong><br>
  ▪ ≤ 30 mins: 24.11%<br>
  ▪ 31–44 mins: 20.27%<br>
  ▪ ≥ 45 mins: 55.62%<br>

  <strong>Poverty (FPL)</strong><br>
  ▪ below 50%: 9.16%<br>
  ▪ below 150%: 32.03%<br>
  ▪ below 200%: 43.01%<br>

  <strong>Vehicle Access</strong><br>
  ▪ 61.46% have no vehicles available<br>

`,

"Eastchester Rd - Morris Park": `
  <h3>Eastchester Rd – Morris Park</h3>
  <em>(residents within 10-min walk)</em><br>
  <strong>Race / Ethnicity</strong><br>
  ▪ 26.18% White<br>
  ▪ 13.53% Black or African American<br>
  ▪ 22.59% Asian<br>
  ▪ 29.17% Some Other Race<br>
  ▪ 45.98% Hispanic or Latino (of any race)<br>

    <strong>Median Income</strong><br>
  ▪ $56,747<br>

    <strong>Vehicle Access</strong><br>
  ▪ 46.56% have no vehicles available<br>

  <strong>Commute Mode to Work</strong><br>
  ▪ 22.91% drove alone<br>
  ▪ 3.64% carpooled<br>
  ▪ 43.43% took public transit<br>
  ▪ 3.41% worked at home<br>

  <strong>Commute Time to Work</strong><br>
  ▪ ≤ 30 mins: 39.63%<br>
  ▪ 31–44 mins: 16.43%<br>
  ▪ ≥ 45 mins: 43.95%<br>

  <strong>Poverty (FPL)</strong><br>
  ▪ below 50%: 10.89%<br>
  ▪ below 150%: 36.95%<br>
  ▪ below 200%: 46.13%<br>
`,

"Co-Op City": `
  <h3>Co-Op City</h3>
  <em>(residents within 10-min walk)</em><br>
  <strong>Race / Ethnicity</strong><br>
  ▪ 6.12% White<br>
  ▪ 72.57% Black or African American<br>
  ▪ 1.00% American Indian & Alaska Native<br>
  ▪ 0.62% Asian<br>
  ▪ 10.70% Some Other Race<br>
  ▪ 25.98% Hispanic or Latino (of any race)<br>

  <strong>Commute Mode to Work</strong><br>
  ▪ 26.00% drove alone<br>
  ▪ 1.49% carpooled<br>
  ▪ 51.82% took public transit<br>
  ▪ 12.32% worked at home<br>

  <strong>Commute Time to Work</strong><br>
  ▪ ≤ 30 mins: 20.90%<br>
  ▪ 31–44 mins: 18.94%<br>
  ▪ ≥ 45 mins: 60.16%<br>

  <strong>Poverty (FPL)</strong><br>
  ▪ below 50%: 3.78%<br>
  ▪ below 150%: 17.93%<br>
  ▪ below 200%: 30.56%<br>

  <strong>Vehicle Access</strong><br>
  ▪ 47.92% have no vehicles available<br>

  <strong>Median Income</strong><br>
  ▪ $75,000
`,

"Kings Plaza": `
  <h3>Kings Plaza</h3>

  <strong>Race / Ethnicity</strong><br>
  ▪ 42.45% White<br>
  ▪ 27.93% Black or African American<br>
  ▪ 0.13% American Indian & Alaska Native<br>
  ▪ 14.53% Asian<br>
  ▪ 7.71% Some Other Race<br>
  ▪ 14.03% Hispanic or Latino (of any race)<br>

    <strong>Commute Mode to Work</strong><br>
  ▪ 40.34% drove alone<br>
  ▪ 8.23% carpooled<br>
  ▪ 36.72% took public transit<br>
  ▪ 9.84% worked at home<br>

    <strong>Vehicle Access</strong><br>
  ▪ 22.35% have no vehicles available<br>

  <strong>Median Income</strong><br>
  ▪ $94,400<br>


  <strong>Commute Time to Work</strong><br>
  ▪ ≤ 30 mins: 25.40%<br>
  ▪ 31–44 mins: 22.71%<br>
  ▪ ≥ 45 mins: 51.89%<br>

  <strong>Poverty (FPL)</strong><br>
  ▪ below 50%: 3.05%<br>
  ▪ below 150%: 12.18%<br>
  ▪ below 200%: 18.26%<br>
`,

"Av N": `
  <h3>Avenue N</h3>

  <strong>Race / Ethnicity</strong><br>
  ▪ 23.55% White<br>
  ▪ 49.70% Black or African American<br>
  ▪ 1.04% American Indian & Alaska Native<br>
  ▪ 8.28% Asian<br>
  ▪ 9.25% Some Other Race<br>
  ▪ 15.91% Hispanic or Latino (of any race)<br>

    <strong>Vehicle Access</strong><br>
  ▪ 26.24% have no vehicles available<br>

  <strong>Median Income</strong><br>
  ▪ $92,969<br>

  <strong>Commute Mode to Work</strong><br>
  ▪ 38.17% drove alone<br>
  ▪ 6.39% carpooled<br>
  ▪ 42.23% took public transit<br>
  ▪ 7.99% worked at home<br>

  <strong>Commute Time to Work</strong><br>
  ▪ ≤ 30 mins: 21.53%<br>
  ▪ 31–44 mins: 22.02%<br>
  ▪ ≥ 45 mins: 56.46%<br>

  <strong>Poverty (FPL)</strong><br>
  ▪ below 50%: 3.28%<br>
  ▪ below 150%: 11.10%<br>
  ▪ below 200%: 17.90%<br>
`,

"Flatlands Av - Av K": `
  <h3>Flatlands Av – Av K</h3>

  <strong>Race / Ethnicity</strong><br>
  ▪ 6.34% White<br>
  ▪ 72.97% Black or African American<br>
  ▪ 0.58% American Indian & Alaska Native<br>
  ▪ 5.48% Asian<br>
  ▪ 5.30% Some Other Race<br>
  ▪ 9.03% Hispanic or Latino (of any race)<br>

    <strong>Vehicle Access</strong><br>
  ▪ 27.41% have no vehicles available<br>

  <strong>Median Income</strong><br>
  ▪ $91,486<br>

  <strong>Commute Mode to Work</strong><br>
  ▪ 37.38% drove alone<br>
  ▪ 5.16% carpooled<br>
  ▪ 44.33% took public transit<br>
  ▪ 8.24% worked at home<br>

  <strong>Commute Time to Work</strong><br>
  ▪ ≤ 30 mins: 22.20%<br>
  ▪ 31–44 mins: 22.88%<br>
  ▪ ≥ 45 mins: 54.92%<br>

  <strong>Poverty (FPL)</strong><br>
  ▪ below 50%: 5.01%<br>
  ▪ below 150%: 16.45%<br>
  ▪ below 200%: 22.96%<br>

`,

"Kings Highway - Av H": `
  <h3>Kings Highway – Av H</h3>

  <strong>Race / Ethnicity</strong><br>
  ▪ 2.73% White<br>
  ▪ 83.31% Black or African American<br>
  ▪ 0.08% American Indian & Alaska Native<br>
  ▪ 1.60% Asian<br>
  ▪ 2.32% Some Other Race<br>
  ▪ 5.81% Hispanic or Latino (of any race)<br>

    <strong>Vehicle Access</strong><br>
  ▪ 40.78% have no vehicles available<br>

  <strong>Median Income</strong><br>
  ▪ $76,607<br>

  <strong>Commute Mode to Work</strong><br>
  ▪ 35.28% drove alone<br>
  ▪ 4.38% carpooled<br>
  ▪ 51.57% took public transit<br>
  ▪ 5.05% worked at home<br>

    <strong>Poverty (FPL)</strong><br>
  ▪ below 50%: 6.73%<br>
  ▪ below 150%: 22.34%<br>
  ▪ below 200%: 30.14%<br>

  <strong>Commute Time to Work</strong><br>
  ▪ ≤ 30 mins: 19.37%<br>
  ▪ 31–44 mins: 28.83%<br>
  ▪ ≥ 45 mins: 51.80%<br

`,

"Clarendon Rd - Av D": `
  <h3>Clarendon Rd – Av D</h3>

  <strong>Race / Ethnicity</strong><br>
  ▪ 1.56% White<br>
  ▪ 85.08% Black or African American<br>
  ▪ 0.37% American Indian & Alaska Native<br>
  ▪ 0.48% Asian<br>
  ▪ 3.16% Some Other Race<br>
  ▪ 6.58% Hispanic or Latino (of any race)<br>

    <strong>Vehicle Access</strong><br>
  ▪ 45.54% have no vehicles available<br>

  <strong>Median Income</strong><br>
  ▪ $76,607<br>

  <strong>Commute Mode to Work</strong><br>
  ▪ 27.90% drove alone<br>
  ▪ 3.32% carpooled<br>
  ▪ 56.90% took public transit<br>
  ▪ 6.16% worked at home<br>

  <strong>Commute Time to Work</strong><br>
  ▪ ≤ 30 mins: 15.84%<br>
  ▪ 31–44 mins: 27.24%<br>
  ▪ ≥ 45 mins: 56.91%<br>

  <strong>Poverty (FPL)</strong><br>
  ▪ below 50%: 4.93%<br>
  ▪ below 150%: 18.56%<br>
  ▪ below 200%: 28.06%<br>

`,

"Church Av": `
  <h3>Church Av</h3>

  <strong>Race / Ethnicity</strong><br>
  ▪ 4.96% White<br>
  ▪ 80.67% Black or African American<br>
  ▪ 0.21% American Indian & Alaska Native<br>
  ▪ 1.83% Asian<br>
  ▪ 4.16% Some Other Race<br>
  ▪ 7.42% Hispanic or Latino (of any race)<br>

    <strong>Vehicle Access</strong><br>
  ▪ 50.86% have no vehicles available<br>

  <strong>Median Income</strong><br>
  ▪ $68,494<br>

  <strong>Commute Mode to Work</strong><br>
  ▪ 25.14% drove alone<br>
  ▪ 3.33% carpooled<br>
  ▪ 54.84% took public transit<br>
  ▪ 7.71% worked at home<br>

  <strong>Commute Time to Work</strong><br>
  ▪ ≤ 30 mins: 17.29%<br>
  ▪ 31–44 mins: 28.10%<br>
  ▪ ≥ 45 mins: 54.61%<br>

  <strong>Poverty (FPL)</strong><br>
  ▪ below 50%: 7.14%<br>
  ▪ below 150%: 24.20%<br>
  ▪ below 200%: 32.79%<br>
`,

"Rutland Rd - Winthrop St": `
  <h3>Rutland Rd – Winthrop St</h3>

  <strong>Race / Ethnicity</strong><br>
  ▪ 10.18% White<br>
  ▪ 72.42% Black or African American<br>
  ▪ 0.71% Asian<br>
  ▪ 5.34% Some Other Race<br>
  ▪ 9.05% Hispanic or Latino (of any race)<br>

    <strong>Commute Mode to Work</strong><br>
  ▪ 21.53% drove alone<br>
  ▪ 2.65% carpooled<br>
  ▪ 59.85% took public transit<br>
  ▪ 6.09% worked at home<br>

    <strong>Vehicle Access</strong><br>
  ▪ 64.81% have no vehicles available<br>

  <strong>Median Income</strong><br>
  ▪ $52,697<br>


  <strong>Commute Time to Work</strong><br>
  ▪ ≤ 30 mins: 16.87%<br>
  ▪ 31–44 mins: 28.85%<br>
  ▪ ≥ 45 mins: 54.28%<br>

  <strong>Poverty (FPL)</strong><br>
  ▪ below 50%: 9.85%<br>
  ▪ below 150%: 34.53%<br>
  ▪ below 200%: 46.50%<br>
`,

"Crown Hts - Utica Av": `
  <h3>Crown Hts - Utica Av</h3>
    No additional data was collected for this station, as it has been in operation prior to our data collection period.
`,




  // Add more stations here in the same format:
  // "Another Station Name": `<h3>Another Station</h3>…`,
  // …
};













map.on('load', () => {
    //
    // 1) define legend again to map layers to buttons
    //
    const legendItems = [
      { id: 'ibx-path',         label: 'Interborough Express' },
      { id: 'uticaavenue-path', label: 'Utica Avenue Line' },
      { id: 'secondavenue-path',label: 'Second Avenue Subway' },
      { id: 'flatlands-3-path', label: '3 Train to Flatlands' },
      { id: 'redhook-w-path',   label: 'W Train to Red Hook' },
      { id: 'tribx-path',       label: 'The Triboro' },
      { id: 'queenslink-path',  label: 'QueensLink' }
    ];
  
    //
    // 2) for each station-circle layer, this adds a matching symbol-layer for its labels
    //
    legendItems.forEach(item => {
      const stationLayerId = item.id.replace('-path', '-stations');
      const labelLayerId   = stationLayerId + '-labels';
  
      map.addLayer({
        id: labelLayerId,
        type: 'symbol',
        source: stationLayerId,         
        layout: {
          'text-field': ['get', 'station_name'],  
          'text-font': ['Open Sans Semibold','Arial Unicode MS Bold'],
          'text-size': 12,
          'text-offset': [0, 1.2],
          'text-anchor': 'top',
          visibility: 'none'          
        },
        paint: {
          'text-color': '#000'
        }
      });
    });
  
    //
    // 3) show the labels when selected and hide when not
    //
    const buttons = document.querySelectorAll('.legend-button');
    buttons.forEach((btn, i) => {
      const stationLayerId = legendItems[i].id.replace('-path', '-stations');
      const labelLayerId   = stationLayerId + '-labels';
  
      btn.addEventListener('click', () => {
        legendItems.forEach(item => {
          const hideId = item.id.replace('-path','-stations') + '-labels';
          map.setLayoutProperty(hideId, 'visibility', 'none');
        });
  
        if (btn.classList.contains('selected')) {
          map.setLayoutProperty(labelLayerId, 'visibility', 'visible');
        }
      });
    });


// 4) for each station‐circle layer, add click behavior:
legendItems.forEach(item => {
  const stationLayerId = item.id.replace('-path', '-stations');
  const hoverLayerId   = stationLayerId + '-hover';
  const selLayerId     = stationLayerId + '-selected';

  let bounceFrame;
  const bounceSeq = [0, 3, 8, 4, 6, 5];
  let seqIdx;

    map.on('mouseenter', stationLayerId, (e) => {
      map.getCanvas().style.cursor = 'pointer';
      const name      = e.features[0].properties.station_name;
      const baseColor = map.getPaintProperty(stationLayerId, 'circle-color');

      // removes old hover layer
      if (map.getLayer(hoverLayerId)) map.removeLayer(hoverLayerId);

      // adds new hover layer filtered to this station
      map.addLayer({
        id: hoverLayerId,
        type: 'circle',
        source: stationLayerId,
        filter: ['==', ['get','station_name'], name],
        paint: {
          'circle-radius': 0,
          'circle-color':  baseColor,
          'circle-stroke-color': '#fff',
          'circle-stroke-width': 2
        }
      });

      // animates bounce
      seqIdx = 0;
      (function bounce() {
        const r = 5 + bounceSeq[seqIdx]; 
        map.setPaintProperty(hoverLayerId, 'circle-radius', r);
        seqIdx++;
        if (seqIdx < bounceSeq.length) {
          bounceFrame = requestAnimationFrame(bounce);
        }
      })();
    });

    map.on('mouseleave', stationLayerId, () => {
      map.getCanvas().style.cursor = '';
      cancelAnimationFrame(bounceFrame);
      if (map.getLayer(hoverLayerId)) map.removeLayer(hoverLayerId);
    });

    map.on('click', stationLayerId, (e) => {
      const props     = e.features[0].properties;
      const name      = props.station_name || 'Unknown Station';
      const coords    = e.features[0].geometry.coordinates.slice();
      const baseColor = map.getPaintProperty(stationLayerId, 'circle-color');
  
      // 4a) Clear any previously selected halos
      legendItems.forEach(it => {
        const oldId = it.id.replace('-path','-stations') + '-selected';
        if (map.getLayer(oldId)) map.removeLayer(oldId);
      });
  
      // 4b) Add the “selected” halo for this station
      map.addLayer({
        id: selLayerId,
        type: 'circle',
        source: stationLayerId,
        filter: ['==', ['get','station_name'], name],
        paint: {
          'circle-radius': 8,
          'circle-color':  baseColor,
          'circle-stroke-color': '#fff',
          'circle-stroke-width': 2
        }
      });

// 4c) Build the popup content (same as before)
const stationHtml = stationData[name] 
  ? stationData[name] 
  : `<h3>${name}</h3><p>No data available for this station.</p>`;

// 4d) Show the AnimatedPopup instead of mapboxgl.Popup
const popup = new AnimatedPopup({
    offset: 12,
    openingAnimation: {
      duration: 1000,
      easing: 'easeOutElastic',
      transform: 'scale'
    },
    closingAnimation: {
      duration: 300,
      easing: 'easeInBack',
      transform: 'scale'
    }
  })
  .setLngLat(coords)
  .setHTML(`
    <button class="mapboxgl-popup-close-button">×</button>
    ${stationHtml}
  `)
  .addTo(map);

// 4e) When the popup closes, remove the selected halo
popup.on('close', () => {
  if (map.getLayer(selLayerId)) map.removeLayer(selLayerId);
});
  });
});
});