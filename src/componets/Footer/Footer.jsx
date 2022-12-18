import React from "react";
import footer from "./Footer.module.scss";
import { ReactComponent as Inst } from "./img/inst.svg";
import { ReactComponent as Facebook } from "./img/facebook.svg";
import { ReactComponent as Linkedin } from "./img/linkedin.svg";
import { ReactComponent as Twitter } from "./img/twitter.svg";
import { ReactComponent as Btn } from "./img/btn.svg";
function Footer() {
  return (
    <div className={footer.wrapper}>
      <div className={footer.title}>
        <span>Web</span>Studio
      </div>
      <div className={footer.text_map}>м. Київ, пр-т Лесі Українки, 26</div>
      <p>
        {" "}
        <a href="mailto"> info@devstudio.com</a>
      </p>
      <p>
        {" "}
        <a href="tel">+38 096 111 11 11</a>{" "}
      </p>
      <h3>приєднуйтесь</h3>
      <div className={footer.svg_block}>
        <a href="#">
          <Inst className={footer.svg} />
        </a>
        <a href="#"><Facebook className={footer.svg} /></a> 
        <a href="#"><Linkedin className={footer.svg} /></a> 
        <a href="#"><Twitter className={footer.svg} /></a> 
      </div>
      <div className={footer.title_niz}>Підпишіться на розсилку</div>
      <input className={footer.input} placeholder="E-mail" type="email" />
      <button className={footer.btn}>
        <Btn />
      </button>
    </div>
  );
}
export { Footer };
