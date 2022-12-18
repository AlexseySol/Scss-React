import React from "react";
import modalInput from "./ModalInput.module.scss";
import { ReactComponent as ModalClose } from "./img/close.svg";
import { ReactComponent as Phone } from "./img/phone.svg";
import { ReactComponent as Name } from "./img/person.svg";
import { ReactComponent as Imail } from "./img/email.svg";

function ModalInput({ setModalIn }) {
  return (
    <div className={modalInput.shadow}>
      <div className={modalInput.block}>
        <button onClick={() => setModalIn(false)} className={modalInput.btn}>
          <ModalClose className={modalInput.svg} />
        </button>
        <h2 className={modalInput.text_header}>
          Залиште свої дані, ми вам передзвонимо
        </h2>
        <form className={modalInput.block_input} action="">
          <label htmlFor="">Ім'я</label>
          <div className={modalInput.name_block}>
            <Name className={modalInput.name_svg} />
            <input type="text" />
          </div>
          <label htmlFor="">Телефон</label>
          <div className={modalInput.name_block}>
            <Phone />
            <input type="text" />
          </div>
          <label htmlFor="">Пошта</label>
          <div className={modalInput.name_block}>
            <Imail />
            <input type="text" />
          </div>
          <label htmlFor="">Коментар</label>
          <div className={modalInput.textarea}>
            <textarea placeholder="Введіть текст"></textarea>
          </div>

          <div className={modalInput.checkbox_block}>
            <input type="checkbox" />
            <p>
              Погоджуюся з розсилкою та приймаю <span>Умови договору</span>{" "}
            </p>
          </div>
        </form>
        <button
          onClick={() => setModalIn(false)}
          className={modalInput.btn_last}
        >
          Відправити
        </button>
      </div>
    </div>
  );
}
export { ModalInput };
