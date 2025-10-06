import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { apiGet } from '../api/client';
import ImageGallery from '../components/ImageGallery';

export default function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [status, setStatus] = useState('loading');
  const [error, setError] = useState('');

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        setStatus('loading');
        const data = await apiGet(`/recipes/${id}`);
        if (mounted) {
          setRecipe(data);
          setStatus('ready');
        }
      } catch (e) {
        if (mounted) {
          setError(e.message || 'Failed to load recipe');
          setStatus('error');
        }
      }
    })();
    return () => {
      mounted = false;
    };
  }, [id]);

  if (status === 'loading') return <div className="status">Loading…</div>;
  if (status === 'error') return <div className="error">Error: {error}</div>;
  if (!recipe) return <div className="status">No recipe found.</div>;

  return (
    <article className="recipe-detail">
      <h1 className="title">{recipe.title}</h1>
      <p className="description">{recipe.description}</p>
      <ImageGallery images={recipe.images || []} />
      <section>
        <h2>Ingredients</h2>
        <ul className="ingredients">
          {(recipe.ingredients || []).map((line, i) => (
            <li key={i}>{line}</li>
          ))}
        </ul>
      </section>
      <section>
        <h2>Instructions</h2>
        <ol className="instructions">
          {(recipe.instructions || []).map((step, i) => (
            <li key={i}>{step}</li>
          ))}
        </ol>
      </section>
    </article>
  );
}
