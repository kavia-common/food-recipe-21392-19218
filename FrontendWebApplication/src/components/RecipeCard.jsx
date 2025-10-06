import { Link } from 'react-router-dom';

// PUBLIC_INTERFACE
export default function RecipeCard({ recipe }) {
  /** Displays a compact card for a recipe with title, image, and link */
  const cover = (recipe.images && recipe.images[0]) || null;
  return (
    <div className="card">
      {cover ? (
        <img src={cover.url} alt={cover.alt || recipe.title} className="card-img" />
      ) : (
        <div className="card-img placeholder" aria-label="No image">🍽️</div>
      )}
      <div className="card-body">
        <h3 className="card-title">{recipe.title}</h3>
        <p className="card-desc">{recipe.description}</p>
        <Link to={`/recipes/${recipe.id}`} className="btn btn-small">View</Link>
      </div>
    </div>
  );
}
