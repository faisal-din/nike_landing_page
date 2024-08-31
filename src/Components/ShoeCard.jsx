import PropTypes from 'prop-types';

const ShoeCard = ({ imgURL, changBigShoeImage, bigShoeImg }) => {
  const handleClick = () => {
    if (bigShoeImg !== imgURL.bigShoe) {
      changBigShoeImage(imgURL.bigShoe);
    }
  };
  return (
    <div
      className={`border-2 rounded-xl ${
        bigShoeImg === imgURL.bigShoe
          ? 'border-coral-red'
          : 'border-transparent'
      } cursor-pointer max-sm:flex-1`}
      onClick={handleClick}
    >
      <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4 ">
        <img
          src={imgURL.thumbnail}
          alt="Shoe"
          width={127}
          height={103}
          className="object-contain "
        />
      </div>
    </div>
  );
};

// Add prop validation for 'imgURL'
ShoeCard.propTypes = {
  imgURL: PropTypes.shape({
    bigShoe: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
  }).isRequired,
  changBigShoeImage: PropTypes.func.isRequired,
  bigShoeImg: PropTypes.string.isRequired,
};
export default ShoeCard;
