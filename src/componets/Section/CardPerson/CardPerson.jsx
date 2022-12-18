import React from "react";
import cardPerson from "./CardPerson.module.scss";

const CardPerson = ({svg}) => {

  return (
    
       <div className={cardPerson.block}>
{svg}
</div> 
    

  );
};
export { CardPerson };
