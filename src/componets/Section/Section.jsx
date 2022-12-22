import React from "react";

import section from "./Section.module.scss";

import { ReactComponent as Antenna } from "./img/antenna.svg";
import { ReactComponent as Astronaut } from "./img/astronaut.svg";
import { ReactComponent as Clock } from "./img/clock.svg";
import { ReactComponent as Diagram } from "./img/diagram.svg";
import { MainNav } from "./MainNav/MainNav";
import { ModalInput } from "../ModalInput/ModalInput";
import { Card } from "./Card/Card";
import { ReactComponent as Logo } from "./img/Logo.svg";
import { ReactComponent as Logo1 } from "./img/Logo1.svg";
import { ReactComponent as Logo2 } from "./img/Logo2.svg";
import { ReactComponent as Logo3 } from "./img/Logo3.svg";
import { ReactComponent as Logo4 } from "./img/Logo4.svg";
import { ReactComponent as Logo5 } from "./img/Logo5.svg";
import { CardPerson } from "./CardPerson/CardPerson";
import cardPerson from "./CardPerson/CardPerson.module.scss";


const Section = () => {

    const [modalIn,setModalIn]= React.useState(false)
  const arrayInfo = [
    {
      id: 1,
      svg: <Antenna />,
      textH1: "УВАГА ДО ДЕТАЛЕЙ",
      text: "Ідейні міркування, і навіть початок повсякденної роботи з формування позиції.",
    },
    {
        id: 2,
        svg: <Clock />,
        textH1: "ПУНКТУАЛЬНІСТЬ",
        text: "Завдання організації, особливо рамки і місце навчання кадрів тягне у себе.",
      },
      {
        id: 3,
        svg: <Diagram />,
        textH1: "ПЛАНУВАННЯ",
        text: "Так само консультація з широким активом значною мірою зумовлює.",
      },
      {
        id: 4,
        svg: <Astronaut />,
        textH1: "СУЧАСНІ ТЕХНОЛОГІЇ",
        text: "Значимість цих проблем настільки очевидна, що реалізація планових завдань.",
      },
  ];
const cardArray = [
  {
    id: 1,
    img: "/img/Igor.jpg" ,
    person: "Ігор Дем'яненко",
    work: "Product Designer",
  },
  {
    id: 2,
    img: "/img/Olya.jpg" ,
    person: "Ольга Рєпіна",
    work: "Frontend Developer",
  },

  {
    id: 3,
    img: "/img/Mukola.jpg" ,
    person: "Микола Тарасов",
    work: "Marketing",
  },

  {
    id: 4,
    img: "/img/Muhaylo.jpg" ,
    person: "Михайло Єрмаков",
    work: "UI Designer",
  },


]
const cardPersonArray = [
  {
    id: 1,
    svg: <Logo className={cardPerson.logo}></Logo>

  },
  {
    id: 2,
    svg: <Logo1  className={cardPerson.logo1}></Logo1> 

  },
  {
    id: 3,
    svg: <Logo2 className={cardPerson.logo2}></Logo2>

  },
  {
    id: 4,
    svg: <Logo3 className={cardPerson.logo3} ></Logo3>

  },
  {
    id: 5,
    svg: <Logo4 className={cardPerson.logo4} ></Logo4>

  }, 
   {
    id: 6,
    svg: <Logo5 className={cardPerson.logo5} ></Logo5>

  },
]
  return (
    
    <section>
      
       {modalIn ? <ModalInput setModalIn={setModalIn} ></ModalInput> : false } 
      <div className={section.block}>
        <div className={section.block_main}>
          <h1>Ефективні рішення для вашого бізнесу</h1>
          <button className={section.btn} onClick={()=>setModalIn(true)}>Замовити послугу</button>
        </div>
      </div>
      <div className={section.mainNav}>
          {arrayInfo.map((arr)=>{
return (<MainNav key={arr.id} {...arr} />)
      })}  
      </div>
    
   <div className={section.block_card}>
    <h1>Наша команда</h1>
    <div className={section.card}>
         {cardArray.map((card)=>{
     return <Card key={card.id} {...card} />
    })}
    </div>
 
   </div>
   <div className={section.block_card_person}>
    <h1>Постійні клієнти</h1>
    <div className={section.block_card_wrapper} >
        {cardPersonArray.map((cardPer)=>{
  return <CardPerson key={cardPer.id} svg={cardPer.svg}></CardPerson>
})}
    </div>
  
   </div>

    </section>
    
  );
};
export { Section };
