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
  <em>(residents within 10-min walk)</em><br>
  <strong>Race / Ethnicity</strong><br>
  ▪ 27.89% White<br>
  ▪ 2.24% Black or African American<br>
  ▪ 0.52% American Indian and Alaska Native<br>
  ▪ 36.03% Asian<br>
  ▪ 0.00% Native Hawaiian and Other Pacific Islander<br>
  ▪ 18.46% Some Other Race<br>
  ▪ 39.06% Hispanic or Latino (of any race)<br>
    <strong>Vehicle Access</strong><br>
  ▪ 59.00% have no vehicles available<br>
  <strong>Commute Mode to Work</strong><br>
  ▪ 14.58% drove alone<br>
  ▪ 4.97% carpooled<br>
  ▪ 56.75% took public transit<br>
  ▪ 11.60% worked at home<br>
  <strong>Median Income</strong><br>
  ▪ $71,927<br>
  <strong>Commute Time to Work</strong><br>
  ▪ ≤ 30 mins: 25.86%<br>
  ▪ 31–44 mins: 36.03%<br>
  ▪ ≥ 45 mins: 38.11%<br>
  <strong>Poverty (FPL)</strong><br>
  ▪ below 50%: 4.16%<br>
  ▪ below 150%: 21.80%<br>
  ▪ below 200%: 31.29%<br>
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
  <em>(residents within 10-min walk)</em><br>
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
  <em>(residents within 10-min walk)</em><br>
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
  <em>(residents within 10-min walk)</em><br>
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
  <em>(residents within 10-min walk)</em><br>
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
  <em>(residents within 10-min walk)</em><br>
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
  <em>(residents within 10-min walk)</em><br>
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
  <em>(residents within 10-min walk)</em><br>
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

"125 St": `
  <h3>125 St</h3>
  <em>(residents within 10-min walk)</em><br>
  <strong>Race / Ethnicity</strong><br>
  ▪ 19.45% White<br>
  ▪ 47.90% Black or African American<br>
  ▪ 0.58% American Indian and Alaska Native<br>
  ▪ 5.54% Asian<br>
  ▪ 0.05% Native Hawaiian and Other Pacific Islander<br>
  ▪ 15.64% Some Other Race<br>
  ▪ 31.26% Hispanic or Latino (of any race)<br>
    <strong>Vehicle Access</strong><br>
  ▪ 80.40% have no vehicles available<br>
  <strong>Commute Mode to Work</strong><br>
  ▪ 9.52% drove alone<br>
  ▪ 1.23% carpooled<br>
  ▪ 60.40% took public transit<br>
  ▪ 17.35% worked at home<br>
  <strong>Median Income</strong><br>
  ▪ $46,942<br>
  <strong>Commute Time to Work</strong><br>
  ▪ ≤ 30 mins: 25.62%<br>
  ▪ 31–44 mins: 42.32%<br>
  ▪ ≥ 45 mins: 32.05%<br>
  <strong>Poverty (FPL)</strong><br>
  ▪ below 50%: 14.07%<br>
  ▪ below 150%: 38.93%<br>
  ▪ below 200%: 47.34%<br>
`,
"116 St": `
  <h3>116 St</h3>
  <em>(residents within 10-min walk)</em><br>
  <strong>Race / Ethnicity</strong><br>
  ▪ 18.28% White<br>
  ▪ 35.87% Black or African American<br>
  ▪ 1.35% American Indian and Alaska Native<br>
  ▪ 9.52% Asian<br>
  ▪ 22.73% Some Other Race<br>
  ▪ 43.76% Hispanic or Latino (of any race)<br>
  <strong>Commute Mode to Work</strong><br>
  ▪ 7.87% drove alone<br>
  ▪ 1.73% carpooled<br>
  ▪ 63.45% took public transit<br>
  ▪ 12.82% worked at home<br>
  <strong>Vehicle Access</strong><br>
  ▪ 85.07% have no vehicles available<br>
  <strong>Median Income</strong><br>
  ▪ $37,838<br>
  <strong>Commute Time to Work</strong><br>
  ▪ ≤ 30 mins: 29.49%<br>
  ▪ 31–44 mins: 40.65%<br>
  ▪ ≥ 45 mins: 29.85%<br>
  <strong>Poverty (FPL)</strong><br>
  ▪ below 50%: 15.85%<br>
  ▪ below 150%: 48.97%<br>
  ▪ below 200%: 56.65%<br>
`,
"106 St": `
  <h3>106 St</h3>
  <em>(residents within 10-min walk)</em><br>
  <strong>Race / Ethnicity</strong><br>
  ▪ 20.28% White<br>
  ▪ 31.65% Black or African American<br>
  ▪ 0.47% American Indian and Alaska Native<br>
  ▪ 11.18% Asian<br>
  ▪ 23.14% Some Other Race<br>
  ▪ 43.64% Hispanic or Latino (of any race)<br>
  <strong>Commute Mode to Work</strong><br>
  ▪ 6.59% drove alone<br>
  ▪ 1.79% carpooled<br>
  ▪ 62.55% took public transit<br>
  ▪ 14.02% worked at home<br>
  <strong>Vehicle Access</strong><br>
  ▪ 85.37% have no vehicles available<br>
  <strong>Median Income</strong><br>
  ▪ $37,257<br>
  <strong>Commute Time to Work</strong><br>
  ▪ ≤ 30 mins: 31.76%<br>
  ▪ 31–44 mins: 41.69%<br>
  ▪ ≥ 45 mins: 26.55%<br>
  <strong>Poverty (FPL)</strong><br>
  ▪ below 50%: 15.57%<br>
  ▪ below 150%: 46.09%<br>
  ▪ below 200%: 55.39%<br>
`,
"96 St": `
  <h3>96 St</h3>
  <em>(residents within 10-min walk)</em><br>
  <strong>Race / Ethnicity</strong><br>
  ▪ 49.91% White<br>
  ▪ 14.13% Black or African American<br>
  ▪ 0.29% American Indian and Alaska Native<br>
  ▪ 12.31% Asian<br>
  ▪ 0.08% Native Hawaiian and Other Pacific Islander<br>
  ▪ 12.82% Some Other Race<br>
  ▪ 25.88% Hispanic or Latino (of any race)<br>
    <strong>Vehicle Access</strong><br>
  ▪ 78.87% have no vehicles available<br>
  <strong>Commute Mode to Work</strong><br>
  ▪ 5.88% drove alone<br>
  ▪ 1.32% carpooled<br>
  ▪ 52.83% took public transit<br>
  ▪ 20.50% worked at home<br>
  <strong>Median Income</strong><br>
  ▪ $109,065<br>
  <strong>Commute Time to Work</strong><br>
  ▪ ≤ 30 mins: 41.32%<br>
  ▪ 31–44 mins: 38.77%<br>
  ▪ ≥ 45 mins: 19.92%<br>
  <strong>Poverty (FPL)</strong><br>
  ▪ below 50%: 9.34%<br>
  ▪ below 150%: 25.75%<br>
  ▪ below 200%: 31.09%<br>
`,
"86 St": `
  <h3>86 St</h3>
  <em>(residents within 10-min walk)</em><br>
  <strong>Race / Ethnicity</strong><br>
  ▪ 77.68% White<br>
  ▪ 3.32% Black or African American<br>
  ▪ 0.09% American Indian and Alaska Native<br>
  ▪ 8.62% Asian<br>
  ▪ 0.23% Native Hawaiian and Other Pacific Islander<br>
  ▪ 2.94% Some Other Race<br>
  ▪ 9.19% Hispanic or Latino (of any race)<br>
    <strong>Vehicle Access</strong><br>
  ▪ 72.29% have no vehicles available<br>
  <strong>Commute Mode to Work</strong><br>
  ▪ 5.76% drove alone<br>
  ▪ 1.50% carpooled<br>
  ▪ 46.38% took public transit<br>
  ▪ 26.01% worked at home<br>
  <strong>Median Income</strong><br>
  ▪ $156,389<br>
  <strong>Commute Time to Work</strong><br>
  ▪ ≤ 30 mins: 44.73%<br>
  ▪ 31–44 mins: 37.72%<br>
  ▪ ≥ 45 mins: 17.55%<br>
  <strong>Poverty (FPL)</strong><br>
  ▪ below 50%: 4.66%<br>
  ▪ below 150%: 8.98%<br>
  ▪ below 200%: 12.08%<br>
`,
"72 St": `
  <h3>72 St</h3>
  <em>(residents within 10-min walk)</em><br>
  <strong>Race / Ethnicity</strong><br>
  ▪ 81.59% White<br>
  ▪ 1.22% Black or African American<br>
  ▪ 10.15% Asian<br>
  ▪ 0.27% Native Hawaiian and Other Pacific Islander<br>
  ▪ 2.02% Some Other Race<br>
  ▪ 7.16% Hispanic or Latino (of any race)<br>
  <strong>Commute Mode to Work</strong><br>
  ▪ 6.35% drove alone<br>
  ▪ 1.20% carpooled<br>
  ▪ 37.65% took public transit<br>
  ▪ 26.24% worked at home<br>
  <strong>Vehicle Access</strong><br>
  ▪ 72.14% have no vehicles available<br>
  <strong>Median Income</strong><br>
  ▪ $157,375<br>
  <strong>Commute Time to Work</strong><br>
  ▪ ≤ 30 mins: 52.29%<br>
  ▪ 31–44 mins: 31.81%<br>
  ▪ ≥ 45 mins: 15.90%<br>
  <strong>Poverty (FPL)</strong><br>
  ▪ below 50%: 4.24%<br>
  ▪ below 150%: 9.15%<br>
  ▪ below 200%: 11.92%<br>
`,
"55 St": `
  <h3>55 St</h3>
  <em>(residents within 10-min walk)</em><br>
  <strong>Race / Ethnicity</strong><br>
  ▪ 73.71% White<br>
  ▪ 2.43% Black or African American<br>
  ▪ 0.08% American Indian and Alaska Native<br>
  ▪ 13.85% Asian<br>
  ▪ 2.80% Some Other Race<br>
  ▪ 9.35% Hispanic or Latino (of any race)<br>
  <strong>Commute Mode to Work</strong><br>
  ▪ 5.71% drove alone<br>
  ▪ 1.95% carpooled<br>
  ▪ 26.62% took public transit<br>
  ▪ 26.39% worked at home<br>
  <strong>Vehicle Access</strong><br>
  ▪ 76.47% have no vehicles available<br>
  <strong>Median Income</strong><br>
  ▪ $159,994<br>
  <strong>Commute Time to Work</strong><br>
  ▪ ≤ 30 mins: 61.16%<br>
  ▪ 31–44 mins: 23.47%<br>
  ▪ ≥ 45 mins: 15.37%<br>
  <strong>Poverty (FPL)</strong><br>
  ▪ below 50%: 3.24%<br>
  ▪ below 150%: 10.13%<br>
  ▪ below 200%: 11.85%<br>
`,

"42 St": `
  <h3>42 St</h3>
  <em>(residents within 10-min walk)</em><br>
  <strong>Race / Ethnicity</strong><br>
  ▪ 65.92% White<br>
  ▪ 3.11% Black or African American<br>
  ▪ 0.16% American Indian and Alaska Native<br>
  ▪ 18.63% Asian<br>
  ▪ 0.03% Native Hawaiian and Other Pacific Islander<br>
  ▪ 2.63% Some Other Race<br>
  ▪ 9.45% Hispanic or Latino (of any race)<br>
    <strong>Vehicle Access</strong><br>
  ▪ 79.93% have no vehicles available<br>
  <strong>Commute Mode to Work</strong><br>
  ▪ 5.15% drove alone<br>
  ▪ 1.06% carpooled<br>
  ▪ 23.86% took public transit<br>
  ▪ 29.83% worked at home<br>
  <strong>Median Income</strong><br>
  ▪ $157,980<br>
  <strong>Commute Time to Work</strong><br>
  ▪ ≤ 30 mins: 63.70%<br>
  ▪ 31–44 mins: 25.39%<br>
  ▪ ≥ 45 mins: 10.91%<br>
  <strong>Poverty (FPL)</strong><br>
  ▪ below 50%: 4.82%<br>
  ▪ below 150%: 11.16%<br>
  ▪ below 200%: 13.73%<br>
`,
"34 St": `
  <h3>34 St</h3>
  <em>(residents within 10-min walk)</em><br>
  <strong>Race / Ethnicity</strong><br>
  ▪ 62.04% White<br>
  ▪ 6.11% Black or African American<br>
  ▪ 0.20% American Indian and Alaska Native<br>
  ▪ 19.31% Asian<br>
  ▪ 0.03% Native Hawaiian and Other Pacific Islander<br>
  ▪ 2.19% Some Other Race<br>
  ▪ 9.56% Hispanic or Latino (of any race)<br>
    <strong>Vehicle Access</strong><br>
  ▪ 82.79% have no vehicles available<br>
  <strong>Commute Mode to Work</strong><br>
  ▪ 4.67% drove alone<br>
  ▪ 0.60% carpooled<br>
  ▪ 27.14% took public transit<br>
  ▪ 27.76% worked at home<br>
  <strong>Median Income</strong><br>
  ▪ $157,980<br>
  <strong>Commute Time to Work</strong><br>
  ▪ ≤ 30 mins: 64.58%<br>
  ▪ 31–44 mins: 24.26%<br>
  ▪ ≥ 45 mins: 11.16%<br>
  <strong>Poverty (FPL)</strong><br>
  ▪ below 50%: 6.15%<br>
  ▪ below 150%: 10.99%<br>
  ▪ below 200%: 14.83%<br>
`,
"23 St": `
  <h3>23 St</h3>
  <em>(residents within 10-min walk)</em><br>
  <strong>Race / Ethnicity</strong><br>
  ▪ 68.15% White<br>
  ▪ 6.49% Black or African American<br>
  ▪ 0.10% American Indian and Alaska Native<br>
  ▪ 14.07% Asian<br>
  ▪ 0.03% Native Hawaiian and Other Pacific Islander<br>
  ▪ 1.88% Some Other Race<br>
  ▪ 9.70% Hispanic or Latino (of any race)<br>
    <strong>Vehicle Access</strong><br>
  ▪ 78.61% have no vehicles available<br>
  <strong>Commute Mode to Work</strong><br>
  ▪ 4.17% drove alone<br>
  ▪ 0.45% carpooled<br>
  ▪ 33.23% took public transit<br>
  ▪ 29.06% worked at home<br>
  <strong>Median Income</strong><br>
  ▪ $158,158<br>
  <strong>Commute Time to Work</strong><br>
  ▪ ≤ 30 mins: 59.44%<br>
  ▪ 31–44 mins: 27.69%<br>
  ▪ ≥ 45 mins: 12.87%<br>
  <strong>Poverty (FPL)</strong><br>
  ▪ below 50%: 5.80%<br>
  ▪ below 150%: 11.42%<br>
  ▪ below 200%: 14.57%<br>
`,
"14 St": `
  <h3>14 St</h3>
  <em>(residents within 10-min walk)</em><br>
  <strong>Race / Ethnicity</strong><br>
  ▪ 68.40% White<br>
  ▪ 4.60% Black or African American<br>
  ▪ 0.09% American Indian and Alaska Native<br>
  ▪ 14.55% Asian<br>
  ▪ 0.03% Native Hawaiian and Other Pacific Islander<br>
  ▪ 3.57% Some Other Race<br>
  ▪ 11.99% Hispanic or Latino (of any race)<br>
    <strong>Vehicle Access</strong><br>
  ▪ 78.14% have no vehicles available<br>
  <strong>Commute Mode to Work</strong><br>
  ▪ 3.87% drove alone<br>
  ▪ 0.59% carpooled<br>
  ▪ 39.79% took public transit<br>
  ▪ 27.36% worked at home<br>
  <strong>Median Income</strong><br>
  ▪ $154,390<br>
  <strong>Commute Time to Work</strong><br>
  ▪ ≤ 30 mins: 55.37%<br>
  ▪ 31–44 mins: 32.15%<br>
  ▪ ≥ 45 mins: 12.48%<br>
  <strong>Poverty (FPL)</strong><br>
  ▪ below 50%: 8.08%<br>
  ▪ below 150%: 15.03%<br>
  ▪ below 200%: 17.81%<br>
`,
"Houston St": `
  <h3>Houston St</h3>
  <em>(residents within 10-min walk)</em><br>
  <strong>Race / Ethnicity</strong><br>
  ▪ 58.31% White<br>
  ▪ 6.49% Black or African American<br>
  ▪ 0.27% American Indian and Alaska Native<br>
  ▪ 20.64% Asian<br>
  ▪ 0.01% Native Hawaiian and Other Pacific Islander<br>
  ▪ 6.15% Some Other Race<br>
  ▪ 15.24% Hispanic or Latino (of any race)<br>
    <strong>Vehicle Access</strong><br>
  ▪ 80.83% have no vehicles available<br>
  <strong>Commute Mode to Work</strong><br>
  ▪ 4.43% drove alone<br>
  ▪ 1.33% carpooled<br>
  ▪ 40.70% took public transit<br>
  ▪ 23.70% worked at home<br>
  <strong>Median Income</strong><br>
  ▪ $102,883<br>
  <strong>Commute Time to Work</strong><br>
  ▪ ≤ 30 mins: 58.34%<br>
  ▪ 31–44 mins: 29.96%<br>
  ▪ ≥ 45 mins: 11.69%<br>
  <strong>Poverty (FPL)</strong><br>
  ▪ below 50%: 10.75%<br>
  ▪ below 150%: 23.31%<br>
  ▪ below 200%: 28.58%<br>
`,
"Grand St": `
  <h3>Grand St</h3>
  <em>(residents within 10-min walk)</em><br>
  <strong>Race / Ethnicity</strong><br>
  ▪ 37.66% White<br>
  ▪ 4.93% Black or African American<br>
  ▪ 0.30% American Indian and Alaska Native<br>
  ▪ 43.17% Asian<br>
  ▪ 0.10% Native Hawaiian and Other Pacific Islander<br>
  ▪ 6.38% Some Other Race<br>
  ▪ 14.14% Hispanic or Latino (of any race)<br>
    <strong>Vehicle Access</strong><br>
  ▪ 82.86% have no vehicles available<br>
  <strong>Commute Mode to Work</strong><br>
  ▪ 5.67% drove alone<br>
  ▪ 1.99% carpooled<br>
  ▪ 42.11% took public transit<br>
  ▪ 18.94% worked at home<br>
  <strong>Median Income</strong><br>
  ▪ $94,076<br>
  <strong>Commute Time to Work</strong><br>
  ▪ ≤ 30 mins: 53.38%<br>
  ▪ 31–44 mins: 30.71%<br>
  ▪ ≥ 45 mins: 15.91%<br>
  <strong>Poverty (FPL)</strong><br>
  ▪ below 50%: 9.23%<br>
  ▪ below 150%: 30.15%<br>
  ▪ below 200%: 39.46%<br>
`,
"Chatham Sq": `
  <h3>Chatham Sq</h3>
  <em>(residents within 10-min walk)</em><br>
  <strong>Race / Ethnicity</strong><br>
  ▪ 35.38% White<br>
  ▪ 6.29% Black or African American<br>
  ▪ 0.14% American Indian and Alaska Native<br>
  ▪ 45.14% Asian<br>
  ▪ 0.14% Native Hawaiian and Other Pacific Islander<br>
  ▪ 5.79% Some Other Race<br>
  ▪ 11.72% Hispanic or Latino (of any race)<br>
    <strong>Vehicle Access</strong><br>
  ▪ 80.83% have no vehicles available<br>
  <strong>Commute Mode to Work</strong><br>
  ▪ 5.89% drove alone<br>
  ▪ 1.55% carpooled<br>
  ▪ 40.48% took public transit<br>
  ▪ 20.11% worked at home<br>
  <strong>Median Income</strong><br>
  ▪ $95,269<br>
  <strong>Commute Time to Work</strong><br>
  ▪ ≤ 30 mins: 52.36%<br>
  ▪ 31–44 mins: 31.02%<br>
  ▪ ≥ 45 mins: 16.62%<br>
  <strong>Poverty (FPL)</strong><br>
  ▪ below 50%: 8.81%<br>
  ▪ below 150%: 27.63%<br>
  ▪ below 200%: 37.86%<br>
`,
"Seaport": `
  <h3>Seaport</h3>
  <em>(residents within 10-min walk)</em><br>
  <strong>Race / Ethnicity</strong><br>
  ▪ 56.26% White<br>
  ▪ 9.41% Black or African American<br>
  ▪ 0.09% American Indian and Alaska Native<br>
  ▪ 22.03% Asian<br>
  ▪ 0.05% Native Hawaiian and Other Pacific Islander<br>
  ▪ 4.18% Some Other Race<br>
  ▪ 11.28% Hispanic or Latino (of any race)<br>
    <strong>Vehicle Access</strong><br>
  ▪ 83.75% have no vehicles available<br>
  <strong>Commute Mode to Work</strong><br>
  ▪ 3.68% drove alone<br>
  ▪ 1.91% carpooled<br>
  ▪ 44.57% took public transit<br>
  ▪ 21.91% worked at home<br>
  <strong>Median Income</strong><br>
  ▪ $188,166<br>
  <strong>Commute Time to Work</strong><br>
  ▪ ≤ 30 mins: 58.79%<br>
  ▪ 31–44 mins: 30.13%<br>
  ▪ ≥ 45 mins: 11.08%<br>
  <strong>Poverty (FPL)</strong><br>
  ▪ below 50%: 6.46%<br>
  ▪ below 150%: 13.27%<br>
  ▪ below 200%: 17.40%<br>
`,
"Hanover Sq": `
  <h3>Hanover Sq</h3>
  <em>(residents within 10-min walk)</em><br>
  <strong>Race / Ethnicity</strong><br>
  ▪ 62.53% White<br>
  ▪ 5.97% Black or African American<br>
  ▪ 0.05% American Indian and Alaska Native<br>
  ▪ 20.34% Asian<br>
  ▪ 4.17% Some Other Race<br>
  ▪ 6.92% Hispanic or Latino (of any race)<br>
  <strong>Commute Mode to Work</strong><br>
  ▪ 2.62% drove alone<br>
  ▪ 1.59% carpooled<br>
  ▪ 44.84% took public transit<br>
  ▪ 22.63% worked at home<br>
  <strong>Vehicle Access</strong><br>
  ▪ 84.70% have no vehicles available<br>
  <strong>Median Income</strong><br>
  ▪ $193,984<br>
  <strong>Commute Time to Work</strong><br>
  ▪ ≤ 30 mins: 56.63%<br>
  ▪ 31–44 mins: 32.65%<br>
  ▪ ≥ 45 mins: 10.72%<br>
  <strong>Poverty (FPL)</strong><br>
  ▪ below 50%: 5.30%<br>
  ▪ below 150%: 9.38%<br>
  ▪ below 200%: 12.22%<br>
`,

"Roosevelt Avenue": `
  <h3>Roosevelt Avenue</h3>
  <em>(residents within 10-min walk)</em><br>
  <strong>Race / Ethnicity</strong><br>
  ▪ 27.89% White<br>
  ▪ 2.24% Black or African American<br>
  ▪ 0.52% American Indian and Alaska Native<br>
  ▪ 36.03% Asian<br>
  ▪ 18.46% Some Other Race<br>
  ▪ 39.06% Hispanic or Latino (of any race)<br>
  <strong>Commute Mode to Work</strong><br>
  ▪ 14.58% drove alone<br>
  ▪ 4.97% carpooled<br>
  ▪ 56.75% took public transit<br>
  ▪ 11.60% worked at home<br>
  <strong>Vehicle Access</strong><br>
  ▪ 59.00% have no vehicles available<br>
  <strong>Median Income</strong><br>
  ▪ $71,927<br>
  <strong>Commute Time to Work</strong><br>
  ▪ ≤ 30 mins: 25.86%<br>
  ▪ 31–44 mins: 36.03%<br>
  ▪ ≥ 45 mins: 38.11%<br>
  <strong>Poverty (FPL)</strong><br>
  ▪ below 50%: 4.16%<br>
  ▪ below 150%: 21.80%<br>
  ▪ below 200%: 31.29%<br>
`,
"Grand Avenue": `
  <h3>Grand Avenue</h3>
  <em>(residents within 10-min walk)</em><br>
  <strong>Race / Ethnicity</strong><br>
  ▪ 29.26% White<br>
  ▪ 2.08% Black or African American<br>
  ▪ 1.65% American Indian and Alaska Native<br>
  ▪ 48.23% Asian<br>
  ▪ 10.17% Some Other Race<br>
  ▪ 25.71% Hispanic or Latino (of any race)<br>
  <strong>Commute Mode to Work</strong><br>
  ▪ 29.09% drove alone<br>
  ▪ 10.25% carpooled<br>
  ▪ 44.62% took public transit<br>
  ▪ 9.71% worked at home<br>
  <strong>Vehicle Access</strong><br>
  ▪ 28.19% have no vehicles available<br>
  <strong>Median Income</strong><br>
  ▪ $75,558<br>
  <strong>Commute Time to Work</strong><br>
  ▪ ≤ 30 mins: 25.21%<br>
  ▪ 31–44 mins: 25.58%<br>
  ▪ ≥ 45 mins: 49.22%<br>
  <strong>Poverty (FPL)</strong><br>
  ▪ below 50%: 5.78%<br>
  ▪ below 150%: 24.96%<br>
  ▪ below 200%: 32.32%<br>
`,
"Eliot Avenue": `
  <h3>Eliot Avenue</h3>
  <em>(residents within 10-min walk)</em><br>
  <strong>Race / Ethnicity</strong><br>
  ▪ 61.93% White<br>
  ▪ 0.57% Black or African American<br>
  ▪ 0.87% American Indian and Alaska Native<br>
  ▪ 15.65% Asian<br>
  ▪ 9.87% Some Other Race<br>
  ▪ 26.06% Hispanic or Latino (of any race)<br>
  <strong>Commute Mode to Work</strong><br>
  ▪ 37.66% drove alone<br>
  ▪ 8.82% carpooled<br>
  ▪ 33.82% took public transit<br>
  ▪ 13.07% worked at home<br>
  <strong>Vehicle Access</strong><br>
  ▪ 22.08% have no vehicles available<br>
  <strong>Median Income</strong><br>
  ▪ $98,274<br>
  <strong>Commute Time to Work</strong><br>
  ▪ ≤ 30 mins: 27.86%<br>
  ▪ 31–44 mins: 20.14%<br>
  ▪ ≥ 45 mins: 52.00%<br>
  <strong>Poverty (FPL)</strong><br>
  ▪ below 50%: 5.03%<br>
  ▪ below 150%: 15.62%<br>
  ▪ below 200%: 20.25%<br>
`,
"Metropolitan Avenue": `
  <h3>Metropolitan Avenue</h3>
  <em>(residents within 10-min walk)</em><br>
  <strong>Race / Ethnicity</strong><br>
  ▪ 63.56% White<br>
  ▪ 1.90% Black or African American<br>
  ▪ 6.06% Asian<br>
  ▪ 13.21% Some Other Race<br>
  ▪ 34.48% Hispanic or Latino (of any race)<br>
    <strong>Commute Time to Work</strong><br>
  ▪ ≤ 30 mins: 23.83%<br>
  ▪ 31–44 mins: 23.89%<br>
  ▪ ≥ 45 mins: 52.29%<br>
  <strong>Commute Mode to Work</strong><br>
  ▪ 32.53% drove alone<br>
  ▪ 6.00% carpooled<br>
  ▪ 45.14% took public transit<br>
  ▪ 10.00% worked at home<br>
  <strong>Vehicle Access</strong><br>
  ▪ 33.29% have no vehicles available<br>
  <strong>Median Income</strong><br>
  ▪ $92,940<br>
  <strong>Poverty (FPL)</strong><br>
  ▪ below 50%: 3.60%<br>
  ▪ below 150%: 15.44%<br>
  ▪ below 200%: 21.80%<br>
`,
"Myrtle Avenue": `
  <h3>Myrtle Avenue</h3>
  <em>(residents within 10-min walk)</em><br>
  <strong>Race / Ethnicity</strong><br>
  ▪ 52.85% White<br>
  ▪ 3.92% Black or African American<br>
  ▪ 0.51% American Indian and Alaska Native<br>
  ▪ 5.93% Asian<br>
  ▪ 19.83% Some Other Race<br>
  ▪ 46.42% Hispanic or Latino (of any race)<br>
  <strong>Commute Mode to Work</strong><br>
  ▪ 21.17% drove alone<br>
  ▪ 3.68% carpooled<br>
  ▪ 52.16% took public transit<br>
  ▪ 13.67% worked at home<br>
  <strong>Vehicle Access</strong><br>
  ▪ 44.15% have no vehicles available<br>
  <strong>Median Income</strong><br>
  ▪ $85,947<br>
  <strong>Commute Time to Work</strong><br>
  ▪ ≤ 30 mins: 18.87%<br>
  ▪ 31–44 mins: 25.53%<br>
  ▪ ≥ 45 mins: 55.60%<br>
  <strong>Poverty (FPL)</strong><br>
  ▪ below 50%: 4.13%<br>
  ▪ below 150%: 17.07%<br>
  ▪ below 200%: 26.29%<br>
`,
"Wilson Avenue": `
  <h3>Wilson Avenue</h3>
  <em>(residents within 10-min walk)</em><br>
  <strong>Race / Ethnicity</strong><br>
  ▪ 28.56% White<br>
  ▪ 26.47% Black or African American<br>
  ▪ 1.06% American Indian and Alaska Native<br>
  ▪ 3.85% Asian<br>
  ▪ 22.74% Some Other Race<br>
  ▪ 45.43% Hispanic or Latino (of any race)<br>
  <strong>Commute Mode to Work</strong><br>
  ▪ 19.22% drove alone<br>
  ▪ 4.23% carpooled<br>
  ▪ 53.30% took public transit<br>
  ▪ 17.37% worked at home<br>
  <strong>Vehicle Access</strong><br>
  ▪ 58.22% have no vehicles available<br>
  <strong>Median Income</strong><br>
  ▪ $80,169<br>
  <strong>Commute Time to Work</strong><br>
  ▪ ≤ 30 mins: 22.84%<br>
  ▪ 31–44 mins: 21.92%<br>
  ▪ ≥ 45 mins: 55.23%<br>
  <strong>Poverty (FPL)</strong><br>
  ▪ below 50%: 8.61%<br>
  ▪ below 150%: 29.73%<br>
  ▪ below 200%: 36.26%<br>
`,
"Atlantic Avenue": `
  <h3>Atlantic Avenue</h3>
  <em>(residents within 10-min walk)</em><br>
  <strong>Race / Ethnicity</strong><br>
  ▪ 13.90% White<br>
  ▪ 53.30% Black or African American<br>
  ▪ 0.59% American Indian and Alaska Native<br>
  ▪ 1.73% Asian<br>
  ▪ 17.62% Some Other Race<br>
  ▪ 38.63% Hispanic or Latino (of any race)<br>
  <strong>Commute Mode to Work</strong><br>
  ▪ 21.89% drove alone<br>
  ▪ 2.38% carpooled<br>
  ▪ 59.64% took public transit<br>
  ▪ 8.47% worked at home<br>
  <strong>Vehicle Access</strong><br>
  ▪ 59.05% have no vehicles available<br>
  <strong>Median Income</strong><br>
  ▪ $66,151<br>
  <strong>Commute Time to Work</strong><br>
  ▪ ≤ 30 mins: 21.36%<br>
  ▪ 31–44 mins: 30.69%<br>
  ▪ ≥ 45 mins: 47.96%<br>
  <strong>Poverty (FPL)</strong><br>
  ▪ below 50%: 18.31%<br>
  ▪ below 150%: 35.18%<br>
  ▪ below 200%: 44.12%<br>
`,

"Sutter Avenue": `
  <h3>Sutter Avenue</h3>
  <em>(residents within 10-min walk)</em><br>
  <strong>Race / Ethnicity</strong><br>
  ▪ 7.16% White<br>
  ▪ 62.91% Black or African American<br>
  ▪ 0.29% American Indian and Alaska Native<br>
  ▪ 0.76% Asian<br>
  ▪ 15.55% Some Other Race<br>
  ▪ 34.53% Hispanic or Latino (of any race)<br>
  <strong>Commute Mode to Work</strong><br>
  ▪ 17.11% drove alone<br>
  ▪ 1.66% carpooled<br>
  ▪ 69.05% took public transit<br>
  ▪ 6.45% worked at home<br>
  <strong>Vehicle Access</strong><br>
  ▪ 72.52% have no vehicles available<br>
  <strong>Median Income</strong><br>
  ▪ $38,830<br>
  <strong>Commute Time to Work</strong><br>
  ▪ ≤ 30 mins: 19.12%<br>
  ▪ 31–44 mins: 26.06%<br>
  ▪ ≥ 45 mins: 54.82%<br>
  <strong>Poverty (FPL)</strong><br>
  ▪ below 50%: 22.37%<br>
  ▪ below 150%: 51.52%<br>
  ▪ below 200%: 60.70%<br>
`,
"Livonia Avenue": `
  <h3>Livonia Avenue</h3>
  <em>(residents within 10-min walk)</em><br>
  <strong>Race / Ethnicity</strong><br>
  ▪ 6.41% White<br>
  ▪ 67.12% Black or African American<br>
  ▪ 0.27% American Indian and Alaska Native<br>
  ▪ 0.68% Asian<br>
  ▪ 14.44% Some Other Race<br>
  ▪ 30.14% Hispanic or Latino (of any race)<br>
  <strong>Commute Mode to Work</strong><br>
  ▪ 18.65% drove alone<br>
  ▪ 1.85% carpooled<br>
  ▪ 65.99% took public transit<br>
  ▪ 6.92% worked at home<br>
  <strong>Vehicle Access</strong><br>
  ▪ 70.41% have no vehicles available<br>
  <strong>Median Income</strong><br>
  ▪ $43,901<br>
  <strong>Commute Time to Work</strong><br>
  ▪ ≤ 30 mins: 20.07%<br>
  ▪ 31–44 mins: 22.00%<br>
  ▪ ≥ 45 mins: 57.93%<br>
  <strong>Poverty (FPL)</strong><br>
  ▪ below 50%: 20.20%<br>
  ▪ below 150%: 45.74%<br>
  ▪ below 200%: 55.86%<br>
`,
"Linden Blvd": `
  <h3>Linden Blvd</h3>
  <em>(residents within 10-min walk)</em><br>
  <strong>Race / Ethnicity</strong><br>
  ▪ 4.76% White<br>
  ▪ 72.91% Black or African American<br>
  ▪ 0.13% American Indian and Alaska Native<br>
  ▪ 1.30% Asian<br>
  ▪ 12.08% Some Other Race<br>
  ▪ 21.82% Hispanic or Latino (of any race)<br>
  <strong>Commute Mode to Work</strong><br>
  ▪ 23.81% drove alone<br>
  ▪ 5.99% carpooled<br>
  ▪ 57.26% took public transit<br>
  ▪ 6.94% worked at home<br>
  <strong>Vehicle Access</strong><br>
  ▪ 60.44% have no vehicles available<br>
  <strong>Median Income</strong><br>
  ▪ $49,955<br>
  <strong>Commute Time to Work</strong><br>
  ▪ ≤ 30 mins: 18.62%<br>
  ▪ 31–44 mins: 21.88%<br>
  ▪ ≥ 45 mins: 59.51%<br>
  <strong>Poverty (FPL)</strong><br>
  ▪ below 50%: 9.84%<br>
  ▪ below 150%: 31.72%<br>
  ▪ below 200%: 42.63%<br>
`,
"Remsen Avenue": `
  <h3>Remsen Avenue</h3>
  <em>(residents within 10-min walk)</em><br>
  <strong>Race / Ethnicity</strong><br>
  ▪ 2.98% White<br>
  ▪ 80.43% Black or African American<br>
  ▪ 1.46% Asian<br>
  ▪ 5.17% Some Other Race<br>
  ▪ 7.70% Hispanic or Latino (of any race)<br>
  <strong>Commute Mode to Work</strong><br>
  ▪ 26.98% drove alone<br>
  ▪ 5.61% carpooled<br>
  ▪ 57.97% took public transit<br>
  ▪ 5.32% worked at home<br>
  <strong>Vehicle Access</strong><br>
  ▪ 38.58% have no vehicles available<br>
  <strong>Median Income</strong><br>
  ▪ $84,835<br>
  <strong>Commute Time to Work</strong><br>
  ▪ ≤ 30 mins: 16.52%<br>
  ▪ 31–44 mins: 21.87%<br>
  ▪ ≥ 45 mins: 61.62%<br>
  <strong>Poverty (FPL)</strong><br>
  ▪ below 50%: 7.10%<br>
  ▪ below 150%: 20.90%<br>
  ▪ below 200%: 27.70%<br>
`,

"Sutter Avenue": `
  <h3>Sutter Avenue</h3>
  <em>(residents within 10-min walk)</em><br>
  <strong>Race / Ethnicity</strong><br>
  ▪ 7.16% White<br>
  ▪ 62.91% Black or African American<br>
  ▪ 0.29% American Indian and Alaska Native<br>
  ▪ 0.76% Asian<br>
  ▪ 15.55% Some Other Race<br>
  ▪ 34.53% Hispanic or Latino (of any race)<br>
  <strong>Commute Mode to Work</strong><br>
  ▪ 17.11% drove alone<br>
  ▪ 1.66% carpooled<br>
  ▪ 69.05% took public transit<br>
  ▪ 6.45% worked at home<br>
  <strong>Vehicle Access</strong><br>
  ▪ 72.52% have no vehicles available<br>
  <strong>Median Income</strong><br>
  ▪ $38,830<br>
  <strong>Commute Time to Work</strong><br>
  ▪ ≤ 30 mins: 19.12%<br>
  ▪ 31–44 mins: 26.06%<br>
  ▪ ≥ 45 mins: 54.82%<br>
  <strong>Poverty (FPL)</strong><br>
  ▪ below 50%: 22.37%<br>
  ▪ below 150%: 51.52%<br>
  ▪ below 200%: 60.70%<br>
`,
"Livonia Avenue": `
  <h3>Livonia Avenue</h3>
  <em>(residents within 10-min walk)</em><br>
  <strong>Race / Ethnicity</strong><br>
  ▪ 6.41% White<br>
  ▪ 67.12% Black or African American<br>
  ▪ 0.27% American Indian and Alaska Native<br>
  ▪ 0.68% Asian<br>
  ▪ 14.44% Some Other Race<br>
  ▪ 30.14% Hispanic or Latino (of any race)<br>
  <strong>Commute Mode to Work</strong><br>
  ▪ 18.65% drove alone<br>
  ▪ 1.85% carpooled<br>
  ▪ 65.99% took public transit<br>
  ▪ 6.92% worked at home<br>
  <strong>Vehicle Access</strong><br>
  ▪ 70.41% have no vehicles available<br>
  <strong>Median Income</strong><br>
  ▪ $43,901<br>
  <strong>Commute Time to Work</strong><br>
  ▪ ≤ 30 mins: 20.07%<br>
  ▪ 31–44 mins: 22.00%<br>
  ▪ ≥ 45 mins: 57.93%<br>
  <strong>Poverty (FPL)</strong><br>
  ▪ below 50%: 20.20%<br>
  ▪ below 150%: 45.74%<br>
  ▪ below 200%: 55.86%<br>
`,
"Linden Blvd": `
  <h3>Linden Blvd</h3>
  <em>(residents within 10-min walk)</em><br>
  <strong>Race / Ethnicity</strong><br>
  ▪ 4.76% White<br>
  ▪ 72.91% Black or African American<br>
  ▪ 0.13% American Indian and Alaska Native<br>
  ▪ 1.30% Asian<br>
  ▪ 12.08% Some Other Race<br>
  ▪ 21.82% Hispanic or Latino (of any race)<br>
  <strong>Commute Mode to Work</strong><br>
  ▪ 23.81% drove alone<br>
  ▪ 5.99% carpooled<br>
  ▪ 57.26% took public transit<br>
  ▪ 6.94% worked at home<br>
  <strong>Vehicle Access</strong><br>
  ▪ 60.44% have no vehicles available<br>
  <strong>Median Income</strong><br>
  ▪ $49,955<br>
  <strong>Commute Time to Work</strong><br>
  ▪ ≤ 30 mins: 18.62%<br>
  ▪ 31–44 mins: 21.88%<br>
  ▪ ≥ 45 mins: 59.51%<br>
  <strong>Poverty (FPL)</strong><br>
  ▪ below 50%: 9.84%<br>
  ▪ below 150%: 31.72%<br>
  ▪ below 200%: 42.63%<br>
`,
"Remsen Avenue": `
  <h3>Remsen Avenue</h3>
  <em>(residents within 10-min walk)</em><br>
  <strong>Race / Ethnicity</strong><br>
  ▪ 2.98% White<br>
  ▪ 80.43% Black or African American<br>
  ▪ 1.46% Asian<br>
  ▪ 5.17% Some Other Race<br>
  ▪ 7.70% Hispanic or Latino (of any race)<br>
    <strong>Commute Time to Work</strong><br>
  ▪ ≤ 30 mins: 16.52%<br>
  ▪ 31–44 mins: 21.87%<br>
  ▪ ≥ 45 mins: 61.62%<br>
  <strong>Commute Mode to Work</strong><br>
  ▪ 26.98% drove alone<br>
  ▪ 5.61% carpooled<br>
  ▪ 57.97% took public transit<br>
  ▪ 5.32% worked at home<br>
  <strong>Vehicle Access</strong><br>
  ▪ 38.58% have no vehicles available<br>
  <strong>Median Income</strong><br>
  ▪ $84,835<br>
  <strong>Poverty (FPL)</strong><br>
  ▪ below 50%: 7.10%<br>
  ▪ below 150%: 20.90%<br>
  ▪ below 200%: 27.70%<br>
`,
"Utica Avenue": `
  <h3>Utica Avenue</h3>
  <em>(residents within 10-min walk)</em><br>
  <strong>Race / Ethnicity</strong><br>
  ▪ 2.50% White<br>
  ▪ 83.68% Black or African American<br>
  ▪ 0.11% American Indian and Alaska Native<br>
  ▪ 0.44% Asian<br>
  ▪ 2.83% Some Other Race<br>
  ▪ 6.52% Hispanic or Latino (of any race)<br>
  <strong>Commute Mode to Work</strong><br>
  ▪ 35.49% drove alone<br>
  ▪ 2.33% carpooled<br>
  ▪ 53.40% took public transit<br>
  ▪ 5.96% worked at home<br>
  <strong>Vehicle Access</strong><br>
  ▪ 44.95% have no vehicles available<br>
  <strong>Median Income</strong><br>
  ▪ $68,555<br>
  <strong>Commute Time to Work</strong><br>
  ▪ ≤ 30 mins: 16.00%<br>
  ▪ 31–44 mins: 32.43%<br>
  ▪ ≥ 45 mins: 51.57%<br>
  <strong>Poverty (FPL)</strong><br>
  ▪ below 50%: 8.63%<br>
  ▪ below 150%: 25.94%<br>
  ▪ below 200%: 34.41%<br>
`,
"Flatbush Av - Nostrand Av": `
  <h3>Flatbush Av - Nostrand Av</h3>
  <em>(residents within 10-min walk)</em><br>
  <strong>Race / Ethnicity</strong><br>
  ▪ 19.77% White<br>
  ▪ 59.52% Black or African American<br>
  ▪ 0.12% American Indian and Alaska Native<br>
  ▪ 6.10% Asian<br>
  ▪ 0.08% Native Hawaiian and Other Pacific Islander<br>
  ▪ 6.49% Some Other Race<br>
  ▪ 9.23% Hispanic or Latino (of any race)<br>
    <strong>Vehicle Access</strong><br>
  ▪ 46.46% have no vehicles available<br>
  <strong>Commute Mode to Work</strong><br>
  ▪ 26.64% drove alone<br>
  ▪ 3.94% carpooled<br>
  ▪ 50.39% took public transit<br>
  ▪ 11.91% worked at home<br>
  <strong>Median Income</strong><br>
  ▪ $77,875<br>
  <strong>Commute Time to Work</strong><br>
  ▪ ≤ 30 mins: 20.84%<br>
  ▪ 31–44 mins: 26.20%<br>
  ▪ ≥ 45 mins: 52.96%<br>
  <strong>Poverty (FPL)</strong><br>
  ▪ below 50%: 5.95%<br>
  ▪ below 150%: 17.12%<br>
  ▪ below 200%: 28.59%<br>
`,
"East 16 Street": `
  <h3>East 16 Street</h3>
  <em>(residents within 10-min walk)</em><br>
  <strong>Race / Ethnicity</strong><br>
  ▪ 47.34% White<br>
  ▪ 15.98% Black or African American<br>
  ▪ 0.22% American Indian and Alaska Native<br>
  ▪ 21.70% Asian<br>
  ▪ 0.11% Native Hawaiian and Other Pacific Islander<br>
  ▪ 7.98% Some Other Race<br>
  ▪ 14.13% Hispanic or Latino (of any race)<br>
    <strong>Vehicle Access</strong><br>
  ▪ 49.58% have no vehicles available<br>
  <strong>Commute Mode to Work</strong><br>
  ▪ 22.17% drove alone<br>
  ▪ 5.54% carpooled<br>
  ▪ 44.84% took public transit<br>
  ▪ 15.12% worked at home<br>
  <strong>Median Income</strong><br>
  ▪ $75,893<br>
  <strong>Commute Time to Work</strong><br>
  ▪ ≤ 30 mins: 26.60%<br>
  ▪ 31–44 mins: 26.14%<br>
  ▪ ≥ 45 mins: 47.27%<br>
  <strong>Poverty (FPL)</strong><br>
  ▪ below 50%: 5.66%<br>
  ▪ below 150%: 25.55%<br>
  ▪ below 200%: 34.83%<br>
`,

"McDonald Avenue": `
  <h3>McDonald Avenue</h3>
  <em>(residents within 10-min walk)</em><br>
  <strong>Race / Ethnicity</strong><br>
  ▪ 74.76% White<br>
  ▪ 3.47% Black or African American<br>
  ▪ 1.10% American Indian and Alaska Native<br>
  ▪ 11.10% Asian<br>
  ▪ 6.05% Some Other Race<br>
  ▪ 10.92% Hispanic or Latino (of any race)<br>
  <strong>Commute Mode to Work</strong><br>
  ▪ 26.12% drove alone<br>
  ▪ 6.79% carpooled<br>
  ▪ 27.00% took public transit<br>
  ▪ 12.83% worked at home<br>
  <strong>Vehicle Access</strong><br>
  ▪ 47.82% have no vehicles available<br>
  <strong>Median Income</strong><br>
  ▪ $68,354<br>
  <strong>Commute Time to Work</strong><br>
  ▪ ≤ 30 mins: 48.51%<br>
  ▪ 31–44 mins: 18.85%<br>
  ▪ ≥ 45 mins: 32.64%<br>
  <strong>Poverty (FPL)</strong><br>
  ▪ below 50%: 6.52%<br>
  ▪ below 150%: 34.68%<br>
  ▪ below 200%: 47.14%<br>
`,
"New Ulrecht Avenue": `
  <h3>New Ulrecht Avenue</h3>
  <em>(residents within 10-min walk)</em><br>
  <strong>Race / Ethnicity</strong><br>
  ▪ 55.85% White<br>
  ▪ 1.49% Black or African American<br>
  ▪ 0.76% American Indian and Alaska Native<br>
  ▪ 27.12% Asian<br>
  ▪ 11.76% Some Other Race<br>
  ▪ 13.82% Hispanic or Latino (of any race)<br>
  <strong>Commute Mode to Work</strong><br>
  ▪ 20.98% drove alone<br>
  ▪ 6.80% carpooled<br>
  ▪ 36.94% took public transit<br>
  ▪ 11.75% worked at home<br>
  <strong>Vehicle Access</strong><br>
  ▪ 47.91% have no vehicles available<br>
  <strong>Median Income</strong><br>
  ▪ $61,317<br>
  <strong>Commute Time to Work</strong><br>
  ▪ ≤ 30 mins: 37.62%<br>
  ▪ 31–44 mins: 21.47%<br>
  ▪ ≥ 45 mins: 40.91%<br>
  <strong>Poverty (FPL)</strong><br>
  ▪ below 50%: 8.80%<br>
  ▪ below 150%: 43.29%<br>
  ▪ below 200%: 54.64%<br>
`,
"8 Ave": `
  <h3>8 Ave</h3>
  <em>(residents within 10-min walk)</em><br>
  <strong>Race / Ethnicity</strong><br>
  ▪ 25.62% White<br>
  ▪ 1.51% Black or African American<br>
  ▪ 0.79% American Indian and Alaska Native<br>
  ▪ 54.08% Asian<br>
  ▪ 13.64% Some Other Race<br>
  ▪ 19.16% Hispanic or Latino (of any race)<br>
  <strong>Commute Mode to Work</strong><br>
  ▪ 13.89% drove alone<br>
  ▪ 8.58% carpooled<br>
  ▪ 43.71% took public transit<br>
  ▪ 12.13% worked at home<br>
  <strong>Vehicle Access</strong><br>
  ▪ 58.26% have no vehicles available<br>
  <strong>Median Income</strong><br>
  ▪ $62,557<br>
  <strong>Commute Time to Work</strong><br>
  ▪ ≤ 30 mins: 30.11%<br>
  ▪ 31–44 mins: 21.65%<br>
  ▪ ≥ 45 mins: 48.24%<br>
  <strong>Poverty (FPL)</strong><br>
  ▪ below 50%: 9.64%<br>
  ▪ below 150%: 42.88%<br>
  ▪ below 200%: 56.87%<br>
`,
"4 Ave": `
  <h3>4 Ave</h3>
  <em>(residents within 10-min walk)</em><br>
  <strong>Race / Ethnicity</strong><br>
  ▪ 41.63% White<br>
  ▪ 2.85% Black or African American<br>
  ▪ 1.35% American Indian and Alaska Native<br>
  ▪ 22.42% Asian<br>
  ▪ 22.19% Some Other Race<br>
  ▪ 36.63% Hispanic or Latino (of any race)<br>
  <strong>Commute Mode to Work</strong><br>
  ▪ 17.13% drove alone<br>
  ▪ 3.47% carpooled<br>
  ▪ 49.41% took public transit<br>
  ▪ 14.55% worked at home<br>
  <strong>Vehicle Access</strong><br>
  ▪ 56.64% have no vehicles available<br>
  <strong>Median Income</strong><br>
  ▪ $74,702<br>
  <strong>Commute Time to Work</strong><br>
  ▪ ≤ 30 mins: 25.51%<br>
  ▪ 31–44 mins: 23.99%<br>
  ▪ ≥ 45 mins: 50.50%<br>
  <strong>Poverty (FPL)</strong><br>
  ▪ below 50%: 6.09%<br>
  ▪ below 150%: 30.21%<br>
  ▪ below 200%: 40.96%<br>
`,
"Brooklyn Army Terminal": `
  <h3>Brooklyn Army Terminal</h3>
  <em>(residents within 10-min walk)</em><br>
  <strong>Race / Ethnicity</strong><br>
  ▪ 49.34% White<br>
  ▪ 3.45% Black or African American<br>
  ▪ 0.40% American Indian and Alaska Native<br>
  ▪ 15.50% Asian<br>
  ▪ 24.23% Some Other Race<br>
  ▪ 42.57% Hispanic or Latino (of any race)<br>
  <strong>Commute Mode to Work</strong><br>
  ▪ 18.59% drove alone<br>
  ▪ 5.21% carpooled<br>
  ▪ 44.63% took public transit<br>
  ▪ 18.39% worked at home<br>
  <strong>Vehicle Access</strong><br>
  ▪ 48.54% have no vehicles available<br>
  <strong>Median Income</strong><br>
  ▪ $84,968<br>
  <strong>Commute Time to Work</strong><br>
  ▪ ≤ 30 mins: 29.69%<br>
  ▪ 31–44 mins: 26.55%<br>
  ▪ ≥ 45 mins: 43.76%<br>
  <strong>Poverty (FPL)</strong><br>
  ▪ below 50%: 5.92%<br>
  ▪ below 150%: 34.71%<br>
  ▪ below 200%: 40.17%<br>
`,


  // Add more stations here in the same format:
  // "Another Station Name": `<h3>Another Station</h3>…`,
  // …
};






map.on('load', () => {
  // state to track current selection
  let currentPopup = null;
  let selectedStationName = null;

  // 1) define legend items
  const legendItems = [
    { id: 'ibx-path',         label: 'Interborough Express' },
    { id: 'uticaavenue-path', label: 'Utica Avenue Line' },
    { id: 'secondavenue-path',label: 'Second Avenue Subway' },
    { id: 'flatlands-3-path', label: '3 Train to Flatlands' },
    { id: 'redhook-w-path',   label: 'W Train to Red Hook' },
    { id: 'tribx-path',       label: 'The Triboro' },
    { id: 'queenslink-path',  label: 'QueensLink' }
  ];

  // 2) add a label layer for each station-circle layer
  legendItems.forEach(item => {
    const stationsLayerId = item.id.replace('-path', '-stations');
    const labelLayerId    = `${stationsLayerId}-labels`;
    map.addLayer({
      id: labelLayerId,
      type: 'symbol',
      source: stationsLayerId,
      layout: {
        'text-field': ['get','station_name'],
        'text-font': ['Open Sans Semibold','Arial Unicode MS Bold'],
        'text-size': 12,
        'text-offset': [0,1.2],
        'text-anchor': 'top',
        'visibility': 'none'
      },
      paint: { 'text-color': '#000' }
    });
  });

  // 3) legend button click: clear popups/halos & toggle labels
  document.querySelectorAll('.legend-button').forEach((btn, i) => {
    const stationsLayerId = legendItems[i].id.replace('-path','-stations');
    const labelLayerId    = `${stationsLayerId}-labels`;

    btn.addEventListener('click', () => {
      // a) remove popup
      if (currentPopup) {
        currentPopup.remove();
        currentPopup = null;
      }
      // b) remove any halo
      legendItems.forEach(it => {
        const oldHaloId = it.id.replace('-path','-stations') + '-selected';
        if (map.getLayer(oldHaloId)) {
          map.removeLayer(oldHaloId);
        }
      });
      selectedStationName = null;

      // c) hide all labels
      legendItems.forEach(it => {
        const hideLabelId = it.id.replace('-path','-stations') + '-labels';
        map.setLayoutProperty(hideLabelId, 'visibility', 'none');
      });

      // d) show labels for this line if selected
      if (btn.classList.contains('selected')) {
        map.setLayoutProperty(labelLayerId, 'visibility', 'visible');
      }
    });
  });

  // 4) station hover & click behavior
  legendItems.forEach(item => {
    const stationsLayerId = item.id.replace('-path','-stations');
    const hoverLayerId    = `${stationsLayerId}-hover`;
    const selectLayerId   = `${stationsLayerId}-selected`;
    let bounceFrame, seqIdx;
    const bounceSeq = [0,3,8,4,6,5];

    // hover bounce
    map.on('mouseenter', stationsLayerId, (e) => {
      map.getCanvas().style.cursor = 'pointer';
      const name  = e.features[0].properties.station_name;
      const color = map.getPaintProperty(stationsLayerId, 'circle-color');

      if (map.getLayer(hoverLayerId)) map.removeLayer(hoverLayerId);
      map.addLayer({
        id: hoverLayerId,
        type: 'circle',
        source: stationsLayerId,
        filter: ['==',['get','station_name'],name],
        paint: {
          'circle-radius': 0,
          'circle-color': color,
          'circle-stroke-color': '#fff',
          'circle-stroke-width': 2
        }
      });

      seqIdx = 0;
      (function bounce(){
        map.setPaintProperty(hoverLayerId, 'circle-radius', 5 + bounceSeq[seqIdx]);
        if (++seqIdx < bounceSeq.length) {
          bounceFrame = requestAnimationFrame(bounce);
        }
      })();
    });

    map.on('mouseleave', stationsLayerId, () => {
      map.getCanvas().style.cursor = '';
      cancelAnimationFrame(bounceFrame);
      if (map.getLayer(hoverLayerId)) map.removeLayer(hoverLayerId);
    });

    // click toggles selection/pop-up
    map.on('click', stationsLayerId, (e) => {
      const name   = e.features[0].properties.station_name;
      const coords = e.features[0].geometry.coordinates.slice();
      const color  = map.getPaintProperty(stationsLayerId, 'circle-color');

      // 4a) always clear existing popup & halos
      if (currentPopup) {
        currentPopup.remove();
        currentPopup = null;
      }
      legendItems.forEach(it => {
        const oldHalo = it.id.replace('-path','-stations') + '-selected';
        if (map.getLayer(oldHalo)) {
          map.removeLayer(oldHalo);
        }
      });

      // 4b) if clicking the same station, just deselect
      if (selectedStationName === name) {
        selectedStationName = null;
        return;
      }

      // 4c) select new station
      selectedStationName = name;

      // add halo for new selection
      map.addLayer({
        id: selectLayerId,
        type: 'circle',
        source: stationsLayerId,
        filter: ['==',['get','station_name'],name],
        paint: {
          'circle-radius': 8,
          'circle-color': color,
          'circle-stroke-color': '#fff',
          'circle-stroke-width': 2
        }
      });

      // build popup HTML
      const stationHtml = stationData[name] 
        ? stationData[name] 
        : `<h3>${name}</h3><p>No data available for this station.</p>`;

      // 4d) show popup
      currentPopup = new AnimatedPopup({
        offset: 12,
        openingAnimation:  { duration: 1000, easing: 'easeOutElastic', transform: 'scale' },
        closingAnimation:  { duration: 300,  easing: 'easeInBack',    transform: 'scale' }
      })
        .setLngLat(coords)
        .setHTML(`<button class="mapboxgl-popup-close-button">×</button>${stationHtml}`)
        .addTo(map);

      // 4e) cleanup on manual close
      currentPopup.on('close', () => {
        if (map.getLayer(selectLayerId)) {
          map.removeLayer(selectLayerId);
        }
        selectedStationName = null;
        currentPopup = null;
      });
    });
  });
});
