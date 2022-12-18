import React from "react";
import mainNav from "./MainNav.module.scss";

const MainNav = ({textH1,svg,text}) => {

  return (
 <main className={mainNav.main}>
    <div className={mainNav.block_svg}>{svg} </div>
<h2 className={mainNav.texth2}>{textH1}</h2>
<div className={mainNav.text}>{text}</div>
   
 </main>
  );
};
export { MainNav };
