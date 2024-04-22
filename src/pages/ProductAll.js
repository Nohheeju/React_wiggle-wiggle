import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import db from "../db.json";

import ProductCard from "../components/ProductCard";

const ProductAll = () => {
  const [DigitalList, setDigitalList] = useState([]);
  const [LivingList, setLivingList] = useState([]);
  const [FashionList, setFashionList] = useState([]);

  const [query, setQuery] = useSearchParams();
  const getProducts = async () => {
    let searchQuery = query.get("q") || "";
    const filteredProducts = db.filter((product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setDigitalList(filteredProducts);
    setLivingList(filteredProducts);
    setFashionList(filteredProducts);
  };

  useEffect(() => {
    setDigitalList(db.Digital);
    setLivingList(db.Living);
    setFashionList(db.Fashion);
  }, [query]);

  return (
    <div className="ProductAll">
      <div className="item-wrap">
        <nav className="item-nav">
          <h3>ALL</h3>
          <ul className="item-menu">
            <li>Digital</li>
            <li>Living</li>
            <li>Fashion</li>
          </ul>
        </nav>
        <div className="item-baaner">
          <div className="item-textBox">
            <h3>wiggle wiggle All Products</h3>
            <p>
              Sometimes life feels boring because of the
              <br />
              frequent repetition. Wiggle Wiggle started
              <br />
              with a simple question that “Isn’t there anything
              <br />
              that repeats and is also funny?”
              <br />
              How about changing your life with full of fun
              <br />
              by unique designs of Wiggle Wiggle?
              <br />
            </p>
          </div>
        </div>
        <div className="item-inner">
          {DigitalList.map((item, index) => (
            <ProductCard item={item} key={index} />
          ))}
          {LivingList.map((item, index) => (
            <ProductCard item={item} key={index} />
          ))}
          {FashionList.map((item, index) => (
            <ProductCard item={item} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductAll;
