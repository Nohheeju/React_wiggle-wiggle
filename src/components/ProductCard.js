import React, { useState } from "react";
import { useNavigate } from "react-router";

import { IoHeart } from "react-icons/io5";

const ProductCard = ({ item, Title }) => {
  const navigate = useNavigate();
  const goToDetail = () => {
    navigate(`/${Title}/${item.id}`, {
      state: {
        pageName: `${Title}`,
        id: item.id,
        title: item.title,
        price: item.price,
        img: item.img,
        choose: item.choose,
      },
    });
  };

  const [iconColor, setIconColor] = useState(true);

  const ChangeColor = () => {
    setIconColor(!iconColor);
  };
  return (
    <div className="Card" onClick={goToDetail}>
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

export default ProductCard;
