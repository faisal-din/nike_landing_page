import PropTypes from 'prop-types';

const Button = ({
  label,
  iconURL,
  backgroundColor,
  borderColor,
  textColor,
  fullwidth,
}) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none 
                    ${
                      backgroundColor
                        ? `${backgroundColor} 
                        ${borderColor} ${textColor}`
                        : ` text-white border-coral-red bg-coral-red`
                    } rounded-full  ${fullwidth && 'w-full'}`}
    >
      {label}

      {iconURL && (
        <img src={iconURL} alt="icon" className="ml-2 rounded-full w-5 h-5" />
      )}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  iconURL: PropTypes.string,
  backgroundColor: PropTypes.string,
  borderColor: PropTypes.string,
  textColor: PropTypes.string,
  fullwidth: PropTypes.string,
};

export default Button;
