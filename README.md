# The Weather Portal App
## Overview

This Weather Dashboard enables users to:
- Search for locations with intelligent autocomplete
- View current weather conditions
- View hourly and daily forecasts
- View extra metrics (UV index, wind, humidity, visibility, etc.) (In-development)
- Use dynamic cards that resize to fit a flexible grid layout (In-development)
- Automatically detect user location (In-development)
- Cache recent searches (In-development)
- Maintain unified global state through React Context

#### **Live Link:** https://weather-portal-app.netlify.app/

---

## Core Features

1. Location Autocomplete Search

   - Search-as-you-type suggestions

   - API-based geolocation (GeoDB Cities or Mapbox)

   - Results filtered by country/region when necessary

2. Weather Data Fetching

   - Current conditions

   - 24-hour forecast

   - 10-day forecast(Work in progress)

   - Additional weather metrics (sunrise, sunset, AQI, UV index, etc.)

3. Global Weather Context (React Context API)

   - Centralized state stores:

   - Selected location

   - Current weather data

   - Forecast data

   - Recent searches

   - Loading & error states

4. Reusable Card System (In development)

   - A 4×6 grid layout that auto-fits fully responsive cards:

   - Auto-expanding depending on available grid space

5. Modular Component Structure (In development)

   - Fully reusable card components

   - Skeleton loaders for all cards

   - Shared API handlers and hooks

---

## System Architecture

**Client**

- React + Vite
- Context Provider for weather state
- TailwindCSS v4 for styling
- Custom grid layout engine for dynamic cards

**APIs**
- Weather API provider: https://open-meteo.com/
<!-- - Location autocomplete API (GeoDB Cities / Mapbox Places) -->
<!-- - Optional reverse geocoding for IP or browser geolocation -->

**State Management**
- React Context + useReducer
- Custom hooks for API calls

---
## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/EbraGory33/Weather-Dashboard.git
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the Client

```bash
npm run dev
```

### Client will be running at:  http://localhost:5173/
---
## Folder Tree

```
Weather-Dashboard/
├── index.html
├── package.json
├── public/
└── src/
    ├── App.jsx # Main app component with routing
    ├── main.jsx # React DOM render entry point
    ├── global.css # Global styles
    ├── components/ # Reusable UI components
    │   ├── common/
    │   ├── sidebar/
    │   └── weather/ 
    ├── context/
    ├── pages/
    └── services/ # Utilities and API clients
```