import PropTypes from 'prop-types';
import './FormInput.styles.scss';

function FormInput({ label, ...otherProps }) {
  return (
    <div className={'group'}>
      <input className={'form-input'} {...otherProps} />
      {label && (
        <label
          className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  );
}

FormInput.propTypes = {
  label: PropTypes.string.isRequired,
  otherProps: PropTypes.object,
};

export default FormInput;
