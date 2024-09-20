import "./Button.styles.scss";

const BUTTON_TYPE_CLASSES = {
  google: "google-sign-in",
  inverted: "inverted",
};

function Button({ children, buttonType, ...otherProps }) {
  return (
    <>
      <button
        className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
        {...otherProps} // Spread otherProps including onClick handler
      >
        {children}
      </button>
    </>
  );
}

export default Button;
