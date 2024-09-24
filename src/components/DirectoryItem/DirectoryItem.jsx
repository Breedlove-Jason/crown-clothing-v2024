import './DirectoryItem.styles.scss';
import PropTypes from 'prop-types';

function DirectoryItem({ imageUrl, title }) {
  return (
    <div className={'directory-item-container'}>
      <div
        className={'background-image'}
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className={'body'}>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
}

export default DirectoryItem;

DirectoryItem.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
