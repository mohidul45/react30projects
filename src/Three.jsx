import { useState } from "react";

export default function Three() {
  const [value, setValue] = useState("");

  return (
    <>
      <div className="border border-gray-500 rounded-md mt-3 p-2 focus-0">
        <input type="text" onChange={(e) => setValue(e.target.value)} />
      </div>
      <h2>User Input is: {value}</h2>
    </>
  );
}
