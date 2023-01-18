import React from "react";
import "./card.scss";
const card = (props) => {
  return (
    <div className="card">
        <div className={props.className}>
        <img
          className="card__img"
          width={props.width}
          height={props.height}
          src={props.src}
          alt={props.alt}
        />
        <div className="card__content">
          <h2 className={props.styleT} >{props.title}</h2>

          <h3 className={props.styleS}>{props.more}</h3>
        </div>
        </div>
      </div>
  );
};

export default card;
