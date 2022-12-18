import React from "react";
import modal from "./Modal.module.scss";
import  {ReactComponent as Close} from "./close.svg"




function Modal({setIsOpen}) {
  return (
    <main>
      <div className={modal.wrapper}>
        <Close className={modal.close} onClick={()=>setIsOpen(false)} />
        
        <div className={modal.menu}>
          <div>Студія</div>
          <div>Портфоліо</div>
          <div>Контакти</div>
        </div>

        <div className={modal.block_nav}>
          <div className={modal.nav_adress}>
            <a href="#">+38 096 111 11 11</a>
            <a href="mailto">info@devstudio.com</a>
          </div>
          <ul className={modal.social}>
            <li>
              <a href="#" className={modal.first}>Instagram</a>
            </li>
            <li>
              <a href="#">Twitter</a>
            </li>
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a className={modal.aLast} href="#">LinkedIn</a>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
export { Modal };
