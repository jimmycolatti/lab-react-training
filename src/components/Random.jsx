import { randomNumber } from '../utils/utilities.js';

const Random = ({ min, max }) => {
  return (
    <div>
      Random Value between {min} and {max}: {randomNumber(max, min)}
    </div>
  );
};
export default Random;

//min=2 and max=5

// Math.floor(Math.random() * (max - min + 1) + min)

// .75 * (4)

// 0 - 3.99999 + 2 = 5.99

// 2 - 5
