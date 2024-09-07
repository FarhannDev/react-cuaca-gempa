import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import iconEmpty from '/icons/web-search-concept-illustration.png';

type SearchEmptyProps = { text: string };

const SearchEmpty: React.FC<SearchEmptyProps> = ({ text }) => (
  <>
    <div className="search-empty-container">
      <LazyLoadImage
        src={iconEmpty}
        alt={text}
        loading="lazy"
        className="search-empty__icon img-fluid"
      />

      <div className="search-empty__text">{text}</div>
    </div>
  </>
);
export default SearchEmpty;
