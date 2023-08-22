import { useState, useEffect, useRef } from "react";

const RefComponent = () =>{
  const [inputValue, setInputValue] = useState("");
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  });

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        style={{ width: '20%', margin: '0 auto'}}
      />
      <h1>Render Count: {count.current}</h1>
    </>
  );
}

export default RefComponent