import './Directory.styles.scss';
import PropTypes from 'prop-types';
import DirectoryItem from '@components/DirectoryItem/DirectoryItem.jsx';

function Directory({ categories }) {
  return (
    <div className={'directory-container'}>
      {categories.map((category) => (
        <DirectoryItem
          key={category.id}
          title={category.title}
          imageUrl={category.imageUrl}
        />
      ))}
    </div>
  );
}

export default Directory;

Directory.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
