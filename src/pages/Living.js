import React, { useEffect, useState } from "react";

import db from "../db.json";

import ProductCard from "../components/ProductCard";

const Living = () => {
  const [LivingList, setLivingList] = useState([]);
  const Title = "Living";

  useEffect(() => {
    setLivingList(db.Living);
  }, []);

  return (
    <div className="Living">
      <div className="item-wrap">
        <nav className="item-nav">
          <h3>LIVING</h3>
          <ul className="item-menu">
            <li>문구</li>
            <li>미용/욕실용품</li>
            <li>홈데코</li>
          </ul>
        </nav>
        <div className="item-baaner">
          <div className="item-textBox">
            <h3>wiggle wiggle LIVING</h3>
            <h5>
              Gift for present happiness
              <br />
              Choose color, change your vibe
            </h5>
            <p>
              받을 때마다 기분 좋은 깜짝선물처럼,
              <br />
              당신의 일상에 뜻밖의 기쁨과 즐거움을 선물합니다.
            </p>
          </div>
        </div>
        <div className="item-inner">
          {LivingList.map((item, index) => (
            <ProductCard item={item} key={index} Title={Title} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Living;
