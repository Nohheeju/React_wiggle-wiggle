import React, { useEffect, useState } from "react";

import db from "../db.json";

import ProductCard from "../components/ProductCard";

const Digital = () => {
  const [DigitaList, setDigitalList] = useState([]);
  const Title = "Digital";

  useEffect(() => {
    setDigitalList(db.Digital);
  }, []);

  return (
    <div className="Digital">
      <div className="item-wrap">
        <nav className="item-nav">
          <h3>DIGITAL</h3>
          <ul className="item-menu">
            <li>모바일</li>
            <li>PC/노트북/패드</li>
            <li>카메라</li>
          </ul>
        </nav>
        <div className="item-baaner">
          <div className="item-textBox">
            <h3>wiggle wiggle DIGITAL</h3>
            <h5>
              Colorful smart life
              <br />
              Tech + color = techcolorgy
            </h5>
            <p>
              무채색으로 물든 단조로운 세상,
              <br />
              컬러풀 스마트 라이프를 꿈꿉니다.
            </p>
          </div>
        </div>
        <div className="item-inner">
          {DigitaList.map((item, index) => (
            <ProductCard item={item} key={index} Title={Title} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Digital;
