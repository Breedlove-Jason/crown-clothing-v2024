import PropTypes from 'prop-types';
// Styled components for the FormInput
import { Group, FormInputField, FormInputLabel } from './FormInput.styles.jsx';

function FormInput({ label, ...otherProps }) {
  return (
    <Group>
      {/* Input field */}
      <FormInputField {...otherProps} />
      {/* Label that shrinks when the input has a value */}
      {label && (
        <FormInputLabel className={otherProps.value.length ? 'shrink' : ''}>
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
}

FormInput.propTypes = {
  label: PropTypes.string.isRequired,
  otherProps: PropTypes.object,
};

export default FormInput;
