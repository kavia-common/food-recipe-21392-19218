import { useState } from 'react';

// PUBLIC_INTERFACE
export default function ImageGallery({ images }) {
  /** Simple gallery with a main image and selectable thumbnails */
  const [index, setIndex] = useState(0);
  const items = images || [];
  if (items.length === 0) return null;
  const active = items[Math.max(0, Math.min(index, items.length - 1))];

  return (
    <div className="gallery">
      <img className="gallery-main" src={active.url} alt={active.alt || 'Recipe'} />
      {items.length > 1 && (
        <div className="gallery-thumbs">
          {items.map((img, i) => (
            <button
              key={i}
              className={`thumb ${i === index ? 'active' : ''}`}
              onClick={() => setIndex(i)}
              aria-label={`Show image ${i + 1}`}
            >
              <img src={img.url} alt={img.alt || `Image ${i + 1}`} />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
