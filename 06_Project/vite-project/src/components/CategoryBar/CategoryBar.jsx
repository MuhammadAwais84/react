import React from 'react';
import styles from './CategoryBar.module.css';

const categories = [
  { name: 'Nature', color: '#3b82f6' },
  { name: 'People', color: '#ec4899' },
  { name: 'Animals', color: '#22c55e' },
  { name: 'Architecture', color: '#f97316' },
  { name: 'Travel', color: '#9333ea' },
  { name: 'Technology', color: '#06b6d4' },
  { name: 'Food', color: '#f59e0b' },
];

const CategoryBar = ({ onSelectCategory, activeCategory }) => {
  return (
    <div className={styles.container}>
      {categories.map((cat) => (
        <button
          key={cat.name}
          className={`${styles.chip} ${activeCategory === cat.name ? styles.active : ''}`}
          style={{
            backgroundColor:
              activeCategory === cat.name ? `${cat.color}20` : 'rgba(255, 255, 255, 0.1)',
            color: activeCategory === cat.name ? cat.color : 'var(--text-color, #0d141b)',
            border: `1px solid ${cat.color}40`,
          }}
          onClick={() => onSelectCategory(cat.name)}
        >
          {cat.name}
        </button>
      ))}
    </div>
  );
};

export default CategoryBar;
