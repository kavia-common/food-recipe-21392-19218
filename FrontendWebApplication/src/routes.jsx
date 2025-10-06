import Home from './pages/Home';
import Search from './pages/Search';
import RecipeDetail from './pages/RecipeDetail';

// PUBLIC_INTERFACE
export const routes = [
  { path: '/', element: Home, title: 'Home' },
  { path: '/search', element: Search, title: 'Search' },
  { path: '/recipes/:id', element: RecipeDetail, title: 'Recipe Detail' },
];
