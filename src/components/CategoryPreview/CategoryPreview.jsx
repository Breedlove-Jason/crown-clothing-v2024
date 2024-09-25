import ProductCard from '@components/ProductCard/ProductCard.jsx';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// Styled components for CategoryPreview
import { CategoryPreviewContainer } from './CategoryPreview.styles.jsx';

function CategoryPreview({ title, products }) {
  return (
    <CategoryPreviewContainer>
      {/* Link to full category page */}
      <h2>
        <Link className="title" to={title}>
          {title.toUpperCase()}
        </Link>
      </h2>
      {/* Display up to 4 products */}
      <div className="preview">
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
      </div>
    </CategoryPreviewContainer>
  );
}

CategoryPreview.propTypes = {
  title: PropTypes.string.isRequired,
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default CategoryPreview;
