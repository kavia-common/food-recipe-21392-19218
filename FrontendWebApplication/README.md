# Food Recipe Frontend (React)

This React app provides a simple interface to browse, search, and view recipe details. It connects to the FastAPI backend via REST APIs.

## Quick Start

1) Install dependencies:
   npm install

2) Set environment (optional):
   - Copy `.env.example` to `.env` and adjust values if needed.
   - REACT_APP_API_BASE_URL or VITE_API_BASE_URL defaults to http://localhost:8000.

3) Start the app:
   npm start

Open http://localhost:3000

## Pages

- Home: Lists recipes from GET /recipes
- Search: Uses GET /search?q=
- Recipe Detail: GET /recipes/:id

## Configuration

- REACT_APP_API_BASE_URL or VITE_API_BASE_URL: Backend API base URL. Defaults to http://localhost:8000

## Notes

- Includes a theme toggle in the navbar.
- Handles loading and error states.
