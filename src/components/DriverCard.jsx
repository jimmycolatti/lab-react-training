import Rating from './Rating';

const DriverCard = ({ name, rating, img, car }) => {
  return (
    <div>
      <img
        style={{
          height: 100,
          width: 100,
          borderRadius: 1000,
        }}
        src={img}
        alt={'profile'}
      />
      <p>Name: {name}</p>
      <Rating>{rating}</Rating>

      <p>
        {car.model} - {car.licensePlate}
      </p>
    </div>
  );
};

export default DriverCard;
