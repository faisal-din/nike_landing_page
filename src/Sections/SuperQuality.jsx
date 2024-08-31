import { shoe8 } from '../assets/images';
import Button from '../Components/Button';

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col ">
        <h2 className=" font-palanquin text-4xl capitalize  font-bold  lg:max-w-lg ">
          We Provide You With
          <span className="text-coral-red "> Super </span>
          <span className="text-coral-red "> Quality </span> Shoes
        </h2>
        <p className="info-text mt-4 lg:max-w-lg">
          Ensuring premium quality and comfort, our meticulously crafted
          footwear is designed to elavate your experience, providing you with
          unmatched quality, innovation and touch of elegance.
        </p>
        <p className="info-text mt-6 lg:max-w-lg">
          Our dedication to detail and excellence ensures your satisfication
        </p>
        <div className="mt-11">
          <Button label="Shop now" />
        </div>
      </div>

      <div className="flex flex-1 justify-center items-center">
        <img
          src={shoe8}
          alt="shoe8"
          width={570}
          height={522}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
