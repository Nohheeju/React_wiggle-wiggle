import React, { useEffect, useState } from "react";

import db from "../db.json";

import ProductCard from "../components/ProductCard";

const Fashion = () => {
  const [FashionList, setFashionList] = useState([]);
  const Title = "Fashion";

  useEffect(() => {
    setFashionList(db.Fashion);
  }, []);

  return (
    <div className="Fashion">
      <div className="item-wrap">
        <nav className="item-nav">
          <h3>FASHION</h3>
          <ul className="item-menu">
            <li>의류</li>
            <li>가방</li>
            <li>신발</li>
          </ul>
        </nav>
        <div className="item-baaner">
          <div className="item-textBox">
            <h3>wiggle wiggle FASHION</h3>
            <h5>Try minimum, show maximum</h5>
            <p>
              작은 변화에서 시작되는 커다란 행복,
              <br />
              평범한 일상에 더하는 컬러 포인트
            </p>
          </div>
        </div>
        <div className="item-inner">
          {FashionList.map((item, index) => (
            <ProductCard item={item} key={index} Title={Title} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Fashion;
