import React from "react";

const NBItem = (props) => {
  return (
    <div className="NBItem">
      <div className="imgBox">
        {props.imagesUrl.map((imagesUrl, index) => (
          <img key={index} src={imagesUrl} />
        ))}
      </div>
      <div className="textBox">
        <p>{props.item}</p>
        <span>{props.price}</span>
      </div>
    </div>
  );
};

export default NBItem;
