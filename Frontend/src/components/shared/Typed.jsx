import React from "react";
import { ReactTyped } from "react-typed";

const Typed = () => {
  return (
    <div className="w-full max-w-[1000px] "> 
      <ReactTyped
        strings={[
            "Welcome to our site !!!",
            "We're still working on it 🚀",
            "Feel free to explore and give feedback !!!"
          ]}
          
        typeSpeed={100}
        backSpeed={90}
        attr="placeholder"
      >
        <input
          type="text"
          className="py-4 text-center w-full"
        />
      </ReactTyped>
    </div>
  );
};

export default Typed;
