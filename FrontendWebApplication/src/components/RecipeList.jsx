import RecipeCard from './RecipeCard';

// PUBLIC_INTERFACE
export default function RecipeList({ recipes }) {
  /** Grid list of recipe cards */
  if (!recipes || recipes.length === 0) {
    return <div className="status">No recipes to display.</div>;
  }
  return (
    <div className="grid">
      {recipes.map((r) => (
        <RecipeCard key={r.id} recipe={r} />
      ))}
    </div>
  );
}
