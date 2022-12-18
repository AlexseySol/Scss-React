import React from "react";

import card from "./Card.module.scss";

import { ReactComponent as Instagram } from "./img/instagram.svg";
import { ReactComponent as Facebook } from "./img/facebook.svg";
import { ReactComponent as Linkedin } from "./img/linkedin.svg";
import { ReactComponent as Twitter } from "./img/twitter.svg";

const Card = ({ img, person, work }) => {
  console.log(img);
  return (
    <div className={card.wrapper}>
      <div className={card.block}>
        <img src={img} alt="" />
        <p>{person}</p>
        <p>{work}</p>
        <div className={card.svg}>
          <div>
            <Instagram />
          </div>
          <div>
            {" "}
            <Twitter />
          </div>
          <div>
            {" "}
            <Facebook />
          </div>
          <div>
            <Linkedin />
          </div>
        </div>
      </div>
    </div>
  );
};
export { Card };
