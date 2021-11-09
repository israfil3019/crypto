import React from "react";
import Percent from "../buttons/Percent";
import Price from "../buttons/Price";
import Time from "../buttons/Time";

const Buttons = () => {
  return (
    <div>
      <div className='dashboard'>
        <h1>Dashboard</h1>
      </div>
      <div className="buttons">
        <Price />
        <Percent />
        <Time />
      </div>
    </div>
  );
};

export default Buttons;
