import PropTypes from 'prop-types';
import DirectoryItem from '@components/DirectoryItem/DirectoryItem.jsx';
// Styled components for the Directory
import { DirectoryContainer } from './Directory.styles.jsx';

function Directory({ categories }) {
  return (
    <DirectoryContainer>
      {/* Map over the categories and render DirectoryItem components */}
      {categories.map((category) => (
        <DirectoryItem
          key={category.id}
          title={category.title}
          imageUrl={category.imageUrl}
          route={`/shop/${category.title.toLowerCase()}`} // Example: shop/hats
        />
      ))}
    </DirectoryContainer>
  );
}

Directory.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Directory;
