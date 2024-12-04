import { useState } from "react";

export default function Two() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="flex text-5xl items-center">
      <button
        className="border border-rounded border-gray-300 px-5 py-3"
        onClick={() => setCounter(counter + 1)}
      >
        +
      </button>
      <h1 className="px-3">{counter}</h1>
      <button className="border border-rounded border-gray-300 px-5 py-3">
        -
      </button>
    </div>
  );
}
