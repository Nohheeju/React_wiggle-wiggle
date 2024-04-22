import React, { useState } from "react";

import { IoHeart } from "react-icons/io5";

const DigitalCard = ({ item }) => {
  const [iconColor, setIconColor] = useState(true);

  const ChangeColor = () => {
    setIconColor(!iconColor);
  };

  return (
    <div className="Card">
      <div className="imgBox">
        <img src={item?.img} alt="thumNail img" />
      </div>
      <p className="title">{item?.title}</p>
      <span className="price">
        {item?.price?.toLocaleString(undefined, {
          minimumFractionDigits: 0,
          maximumFractionDigits: 3,
        })}
        원
      </span>
      <IoHeart
        size={25}
        style={{
          color: iconColor ? "#fff" : "#DE0031",
          stroke: "#DE0031",
          strokeWidth: "25",
        }}
        onClick={ChangeColor}
      />
    </div>
  );
};

export default DigitalCard;
