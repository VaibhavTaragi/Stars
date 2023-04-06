import "./styles.css";
import { BsStar, BsStarFill } from "react-icons/bs";
import { useState } from "react";

export default function App() {
  const [stars, setStars] = useState([]);
  const [starsCount, setStarsCount] = useState(0);
  const [count, setCount] = useState(0);

  const addStars = () => {
    const newStars = stars.length + 1;
    const newStarArray = [];
    for (let i = 1; i <= newStars; i++) {
      newStarArray.push(<BsStar key={i} />);
    }
    setStars([...stars, newStarArray]);
    setStarsCount(starsCount + newStarArray.length);
  };

  const fillStar = () => {
    if (stars.length > 0 && count < starsCount) {
      setCount(count + 1);
      const filled = stars;
      let rem = count + 1;
      for (let i = 0; i < filled.length; i++) {
        if (rem > 0) {
          const newRem = rem - filled[i].length;
          if (newRem > 0) {
            rem = newRem;
          } else {
            filled[i][rem - 1] = <BsStarFill key={rem} />;
            break;
          }
        }
      }
      setStars(filled);
    }
  };

  return (
    <div>
      <button onClick={addStars}>Add Stars</button>
      <button onClick={fillStar}>Fill Star</button>
      {stars.map((i) => {
        return <div key={i}>{i}</div>;
      })}
    </div>
  );
}
