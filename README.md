# Interactive NYC Transit Expansion Map

This repository visualizes proposed subway and transit extensions across New York City, allowing users to explore each corridor’s route, station locations, walkable access areas, demographic context, and evaluation references in a clear, interactive map interface.

🔍 How to Use

Legend: Click any line in the legend to highlight it on the map. Clicking the same button again de-selects and hides the info panel.

Panel Navigation: When a line is selected, a three-panel info box appears:

Panel 1: Project description

Panel 2: Demographics (shows population, median income, and households with vehicles within a 10‑minute walk of stations)

Panel 3: Scorecard image and methodology snippet
Use the Next → and ← Back buttons to cycle through panels.

About / References: At the bottom of the legend, click the Project Info / References button to open an overlay with project background and source links. Clicking it again de-selects it and resets the map to its default view.

Map Controls: Zoom, pan, and rotate are locked to the NYC/CT/NJ bounding box. Standard Mapbox navigation controls appear at the top-left, styled to match the UI.

📍 Features

Interactive Legend: Toggles each proposal’s animation, opacity changes, and catchment area.

Animated Lines: Dashed "ant-trail" animation highlights the selected route.

10‑Minute Walk Areas: Semi-transparent polygons show walking distance from each station.

Three‑Panel Info Box: Descriptions, demographics, and scorecards/images with inline text.

About & References: Separate panel with project summary and clickable data sources.

Responsive UI: Fixed, styled title bar; styled controls; consistent mobile-friendly design.

⚙️ Technical Details

Mapping: Mapbox GL JS for rendering, custom GeoJSON sources for lines, stations, and isochrones.

Animations: requestAnimationFrame cycle through dash-array sequences for dynamic line animation.

UI Logic: Vanilla JavaScript handles legend toggles, panel state (panelState), and map resets.

Data Objects: JavaScript objects store descriptions, demographics, scorecard paths & text, and reference lists.

Styling: Custom CSS for title box, legend, info box, buttons, dark-themed controls, and responsive layout.

📊 Data Sources

MTA 20-Year Needs Assessment (descriptions, equity metrics)

NYC Open Data (subway station & line geometries)

TransitTime QGIS Plugin (10-minute walk isochrone polygons)

RPA Triboro Plan & TEMS Preliminary Assessment (references for QueensLink & Triboro)

U.S. Census ACS (2023) for median income, demographics, and housing data

TravelTime API (Plugin ID: 1685) for isochrone generation

🎓 Motivation

NYC’s radial transit system forces many cross-borough trips to route through Manhattan, costing valuable time. This map brings together proposed expansions to demonstrate their potential impacts on equity, access, and network resilience, making complex planning data accessible to the public and stakeholders.

🛠 Tools & Libraries

Mapbox GL JS: Interactive 3D mapping

Vanilla JavaScript: UI controls, event handling, animations

GeoJSON: Custom line, station, and isochrone data

CSS3: Flex layouts, fixed title bar, responsive styling

📄 License & Acknowledgments

Data and methodology sourced from MTA, RPA, TEMS, NYC Open Data, and U.S. Census Bureau.

UI inspired by modern dashboard design patterns.

Thank you to Sarah Kaufman and Chris Wong for their help.

Generated with assistance from ChatGPT.