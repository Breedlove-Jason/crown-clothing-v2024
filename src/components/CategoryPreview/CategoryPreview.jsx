import './CategoryPreview.styles.scss';
import ProductCard from '@components/ProductCard/ProductCard.jsx';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function CategoryPreview({ title, products }) {
  return (
    <div className={'category-preview-container'}>
      <h2>
        <Link className={'title'} to={title}>
          {title.toUpperCase()}
        </Link>
      </h2>
      <div className="preview">
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
      </div>
    </div>
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
