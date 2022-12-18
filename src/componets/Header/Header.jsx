import React from "react";
import header from "./Header.module.scss";
import { Modal } from "./modalWindow/Modal";
import { ReactComponent as Menu } from "./menu.svg";



function Header({setIsOpen}) {
 

  return (
    <header>
    
        <div className={header.wrapper}>
          <div className={header.title}>
            <span>Web</span>Studio
          </div>

          <Menu className={header.menu} onClick={() => setIsOpen(true)} />
        </div>
      
    </header>
  );
}
export { Header };
