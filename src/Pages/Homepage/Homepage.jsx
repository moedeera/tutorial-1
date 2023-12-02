import { useContext, useState } from "react";
import { siteContext } from "../../Context/Context";

export const Homepage = () => {
  const { count, setCount } = useContext(siteContext);

  const [localCount, setLocalCount] = useState(1);

  return (
    <div className="container">
      <h3>Homepage</h3>
      <div>
        {" "}
        <h1>global count:{count}</h1>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Increment
        </button>
      </div>
      <div>
        {" "}
        <h1>local count:{localCount}</h1>
        <button
          onClick={() => {
            setLocalCount(localCount + 1);
          }}
        >
          Increment
        </button>
      </div>
    </div>
  );
};
