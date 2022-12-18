import React from "react";
import app from './App.module.scss'
import { Footer } from "./Footer/Footer";
import { Header } from "./Header/Header";
import { Modal } from "./Header/modalWindow/Modal";
import { Section } from "./Section/Section";


function App() {
  
  const classRef = React.useRef(null)

    const [isOpen, setIsOpen] = React.useState(false);
    return (
        
        <div ref={classRef} className={app.w}  >
          {isOpen ? (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} ></Modal>
      ) : <>
      <Header setIsOpen={setIsOpen} />
      <Section />
      <Footer /></>}

        </div>
    )
}
export {App} 