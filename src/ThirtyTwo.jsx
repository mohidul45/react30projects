import { useState } from "react";

let initialCounters = [0, 0, 0];

export default function ThirtyTwo() {
  const [counters, setCounters] = useState(initialCounters);

  function handleIncrementCounter(index) {
    const nextCounters = counters.map((c, i) => {
      if (i === index) {
        return c + 1;
      } else {
        return c;
      }
    });
    setCounters(nextCounters);
  }
  return (
    <>
      <ul>
        {counters.map((counter, i) => (
          <li key={i} className="flex items-center p-1">
            {counter}
            <button
              className="border border-3 border-gray-500 px-3 py-2 rounded-md flex items-center ml-3"
              onClick={() => handleIncrementCounter(i)}
            >
              +1
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
