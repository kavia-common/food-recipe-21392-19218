import { Link, NavLink } from 'react-router-dom';

// PUBLIC_INTERFACE
export default function Navbar({ onToggleTheme, theme }) {
  /** Top navigation bar with site links and theme toggle */
  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link to="/" className="brand">Food Recipe</Link>
        <NavLink to="/" className="nav-link">Home</NavLink>
        <NavLink to="/search" className="nav-link">Search</NavLink>
      </div>
      <div className="nav-right">
        <button className="btn" onClick={onToggleTheme} aria-label="Toggle theme">
          {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
        </button>
      </div>
    </nav>
  );
}
