# class3coolmap
 
 This is a draft of my README file; I will improve on it closer to the end of the project. AI Disclosure: I used ChatGPT to help me create a template/summary of what I've done so far and info about the project.

🚇 Interactive NYC Transit Expansion Map

This project is a web-based interactive map showcasing proposed transit expansions across New York City, including lines like the Interborough Express (IBX), Utica Avenue Line, QueensLink, and more. It visualizes the routes, stations, and walkable catchment areas for each project, along with expandable info panels describing the purpose, timeline, equity considerations, and demographics.

📍 Features

Clickable legend with 7 proposed lines

Animated dashed overlays and line-specific catchment polygons

Expandable 3-panel info boxes with project descriptions, stats, and images

Zoom-lock and map controls restricted to NYC/CT/NJ area

Custom GeoJSON data for routes, stations, and isochrones

⚙️ Technical Details

JavaScript with Mapbox GL JS for interactive mapping

GeoJSON data for paths, stations, and 10-minute isochrones

HTML/CSS for structure and styling of the map UI

Turf.js used for line animations and geometry calculations (e.g., fly-along-line)

Vanilla JavaScript used for toggles, animations, and info box logic

📊 Data Sources

GeoJSON files manually created for:

Proposed line paths (based on MTA/RPA maps and plans)

Proposed station locations

Isochrone polygons (10-minute walk areas per line) created via TransitTime QGIS plugin

Text data from:

MTA 20-Year Needs Assessment

RPA Triboro Plan

NYC DOT proposals

Public sources including the MTA, RPA, and city planning documents

💡 Motivation

New Yorkers often face long commutes and inequitable access to high-frequency transit. This map aims to centralize and explain the benefits and tradeoffs of each major proposed subway expansion in a way that is visual, engaging, and accessible. It bridges transit policy and data visualization for advocacy, public education, and portfolio purposes.

🛠 Tools Used

Mapbox GL JS – map rendering

Turf.js – geospatial functions (not used yet but will be for third iteration)

Custom-built legend and info panels (no libraries)

Visual assets (e.g. subway scorecards) from public MTA sources