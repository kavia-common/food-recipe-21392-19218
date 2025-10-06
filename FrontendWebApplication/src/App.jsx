import { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Search from './pages/Search';
import RecipeDetail from './pages/RecipeDetail';
import './styles/global.css';

// PUBLIC_INTERFACE
export default function App() {
  /** Root App with theme toggle, navbar, and route definitions */
  const [theme, setTheme] = useState('light');
  const location = useLocation();

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // PUBLIC_INTERFACE
  const toggleTheme = () => setTheme((t) => (t === 'light' ? 'dark' : 'light'));

  return (
    <div className="app">
      <Navbar onToggleTheme={toggleTheme} theme={theme} />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/recipes/:id" element={<RecipeDetail />} />
        </Routes>
      </main>
      <footer className="footer">Food Recipe • Sample App</footer>
    </div>
  );
}
