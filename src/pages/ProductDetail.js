import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";

import { IoHeart } from "react-icons/io5";

const ProductDetail = () => {
  const location = useLocation();

  const [iconColor, setIconColor] = useState(true);
  const ChangeColor = () => {
    setIconColor(!iconColor);
  };

  const [product, setProduct] = useState(null);

  useEffect(() => {
    let products = location.state;
    setProduct(products);
  }, []);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="ProductDetail">
      <div className="Detail-inner">
        <div className="Detail-thumNail">
          <img src={product?.img} alt="Product img" />
        </div>
        <ul className="Detail-contents">
          <li className="Detail-title">
            <h5>{product?.title}</h5>
            <h4>
              {product?.price?.toLocaleString(undefined, {
                minimumFractionDigits: 0,
                maximumFractionDigits: 3,
              })}
              원
            </h4>
          </li>
          <li className="Detail-select">
            <label>선택</label>
            <select>
              {product?.choose.map((choose, index) => (
                <option key={index}>{choose}</option>
              ))}
            </select>
          </li>
          <li className="Detail-buy">
            <div className="Detail-buy-price">
              <p>총 액</p>
              <p>
                <strong>
                  {product?.price?.toLocaleString(undefined, {
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 3,
                  })}
                </strong>
                원
              </p>
            </div>
            <div className="Detail-buy-btn">
              <button>구매하기</button>
              <IoHeart
                size={40}
                style={{
                  color: iconColor ? "#fff" : "#DE0031",
                  stroke: "#DE0031",
                  strokeWidth: "25",
                }}
                onClick={ChangeColor}
              />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProductDetail;
