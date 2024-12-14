import { useState } from "react";

export default function Five() {
  const [isToggled, setIsToggled] = useState(false);

  const handleChange = () => {
    setIsToggled(!isToggled);
  };

  return (
    <>
      <div className="mt-3 p-2 focus-0 items-center justify-center flex">
        <input
          type="checkbox"
          className="w-7 h-7 mr-4"
          onChange={handleChange}
        />
        <span className="text-2xl">{isToggled ? "On" : "Off"}</span>
      </div>
    </>
  );
}
