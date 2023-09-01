// Cards.jsx
import React from 'react';
import './cards.css';
import { IoMdCheckmarkCircleOutline, IoMdCloseCircleOutline } from 'react-icons/io';
import { FaRegCircleXmark } from 'react-icons/fa6';

export function Cards(props) {
  return (
    <div className='cardContainer'>
      {props.cards.map((card, index) => (
        <div key={index} className={`card ${card.title.toLowerCase()}`}>
          <div className={`header  header${card.title.toLowerCase()}`}>
            <h4>{card.title}</h4>
            <h2>{card.price}</h2>
          </div>
          <div className={`separator  separator${card.title.toLowerCase()}`}></div>
          <div className='card-body'>
            <ul>
              {card.features.map((feature, featureIndex) => (
                <li className={`li${card.title.toLowerCase()}`} key={featureIndex}>
                  {feature.icon}
                  <h5>{feature.text}</h5>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
