import PropTypes from 'prop-types';
import {
  DirectoryItemContainer,
  BackgroundImage,
  BodyContainer,
} from './DirectoryItem.styles.jsx';
import { useNavigate } from 'react-router-dom';

function DirectoryItem({ imageUrl, title, route }) {
  const navigate = useNavigate();
  const onNavigateHandler = () => navigate(route);

  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage $imageUrl={imageUrl} />
      <BodyContainer className="body">
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
