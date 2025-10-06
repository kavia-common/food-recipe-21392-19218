import { useEffect, useState } from 'react';
import { apiGet } from '../api/client';
import RecipeList from '../components/RecipeList';

export default function Home() {
  const [recipes, setRecipes] = useState([]);
  const [status, setStatus] = useState('loading');
  const [error, setError] = useState('');

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        setStatus('loading');
        const data = await apiGet('/recipes');
        if (mounted) {
          setRecipes(data.items || []);
          setStatus('ready');
        }
      } catch (e) {
        if (mounted) {
          setError(e.message || 'Failed to load recipes');
          setStatus('error');
        }
      }
    })();
    return () => {
      mounted = false;
    };
  }, []);

  if (status === 'loading') return <div className="status">Loading recipes…</div>;
  if (status === 'error') return <div className="error">Error: {error}</div>;

  return (
    <section>
      <h1 className="title">Discover Recipes</h1>
      <p className="subtitle">Browse featured recipes to get inspired.</p>
      <RecipeList recipes={recipes} />
    </section>
  );
}
