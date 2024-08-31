import PropTypes from 'prop-types';
import { star } from '../assets/icons';

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className="flex justify-center items-center flex-col">
      <img
        src={imgURL}
        alt="customer"
        className="rounded-full object-cover w-[120px] h-[120px]"
      />
      <p className="mt-6 info-text text-center max-w-sm">{feedback}</p>

      <div className="mt-3 flex justify-center items-center gap-2.5">
        <img
          src={star}
          alt=""
          width={24}
          height={24}
          className="object-contain m-0"
        />
        <p className="text-xl font-montserrat text-slate-gray">({rating})</p>
      </div>
      <h3 className="mt-1 text-3xl font-palanquin font-bold">{customerName}</h3>
    </div>
  );
};

ReviewCard.propTypes = {
  imgURL: PropTypes.string.isRequired,
  customerName: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  feedback: PropTypes.string.isRequired,
};

export default ReviewCard;
