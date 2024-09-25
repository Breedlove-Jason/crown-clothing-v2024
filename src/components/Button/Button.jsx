import PropTypes from 'prop-types';
import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from './Button.styles.jsx';

const BUTTON_TYPE_CLASSES = {
  google: GoogleSignInButton,
  inverted: InvertedButton,
  base: BaseButton, // Default button style
};

function Button({ children, buttonType, ...otherProps }) {
  const CustomButton = BUTTON_TYPE_CLASSES[buttonType] || BaseButton;

  return <CustomButton {...otherProps}>{children}</CustomButton>;
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  buttonType: PropTypes.string,
};

export default Button;
