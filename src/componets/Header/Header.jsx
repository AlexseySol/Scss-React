import React from "react";
import header from "./Header.module.scss";
import { Modal } from "./modalWindow/Modal";
import { ReactComponent as Menu } from "./svg/menu.svg";
import { ReactComponent as Email } from "./svg/email.svg";
import { ReactComponent as Phone } from "./svg/phone.svg";

function Header({ setIsOpen }) {
  return (
    <header>
      <div className={header.wrapper}>
        <div className={header.title}>
          <span>Web</span>Studio
        </div>
        <div className={header.wrapper_planshet}>
          <ul className={header.ul_left} >
            <li>Студія</li>
            <li>Портфоліо</li>
            <li>Контакти</li>
          </ul>
          <ul className={header.ul_right} >
            <li>
              
              <Email /> info@devstudio.com
            </li>
            <li>
          
              <Phone /> +38 096 111 11 11
            </li>
          </ul>
        </div>
        <Menu className={header.menu} onClick={() => setIsOpen(true)} />
      </div>
    </header>
  );
}
export { Header };
