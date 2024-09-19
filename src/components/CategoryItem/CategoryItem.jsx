import './CategoryItem.styles.scss';
import PropTypes from 'prop-types';

function CategoryItem({ imageUrl, title }) {
  return (
    <div className={'category-container'}>
      <div
        className={'background-image'}
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className={'category-body-container'}>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
}

export default CategoryItem;

CategoryItem.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
