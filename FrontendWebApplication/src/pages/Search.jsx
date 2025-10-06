import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { apiGet } from '../api/client';
import RecipeList from '../components/RecipeList';

export default function Search() {
  const [params, setParams] = useSearchParams();
  const [query, setQuery] = useState(params.get('q') || '');
  const [results, setResults] = useState([]);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  useEffect(() => {
    const q = params.get('q') || '';
    setQuery(q);
    if (!q) {
      setResults([]);
      setStatus('idle');
      return;
    }
    let mounted = true;
    (async () => {
      try {
        setStatus('loading');
        const data = await apiGet('/search', { q });
        if (mounted) {
          setResults(data.items || []);
          setStatus('ready');
        }
      } catch (e) {
        if (mounted) {
          setError(e.message || 'Search failed');
          setStatus('error');
        }
      }
    })();
    return () => {
      mounted = false;
    };
  }, [params]);

  const onSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const q = form.get('q')?.toString() || '';
    setParams(q ? { q } : {});
  };

  return (
    <section>
      <h1 className="title">Search Recipes</h1>
      <form className="search-form" onSubmit={onSubmit}>
        <input
          name="q"
          placeholder="Search by ingredient or title…"
          defaultValue={query}
          aria-label="Search query"
        />
        <button type="submit" className="btn">Search</button>
      </form>

      {status === 'idle' && <div className="status">Enter a query to begin.</div>}
      {status === 'loading' && <div className="status">Searching…</div>}
      {status === 'error' && <div className="error">Error: {error}</div>}
      {status === 'ready' && (
        <>
          <p className="subtitle">{results.length} result(s)</p>
          <RecipeList recipes={results} />
        </>
      )}
    </section>
  );
}
