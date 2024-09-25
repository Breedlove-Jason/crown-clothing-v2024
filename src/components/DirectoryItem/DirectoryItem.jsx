import PropTypes from 'prop-types';
import {
  DirectoryItemContainer,
  BackgroundImage,
  BodyContainer,
} from './DirectoryItem.styles.jsx';
import { useNavigate } from 'react-router-dom';

function DirectoryItem({ imageUrl, title, route }) {
  // Get the navigate function from the useNavigate hook
  const navigate = useNavigate();
  // Navigate to the specific route on click
  const onNavigateHandler = () => navigate(route);
  return (
    <DirectoryItemContainer>
      <BackgroundImage
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <BodyContainer className="body" onClick={onNavigateHandler}>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </BodyContainer>
    </DirectoryItemContainer>
  );
}

DirectoryItem.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired,
};

export default DirectoryItem;
