import { useState } from 'react';
import { IoMdCheckmarkCircleOutline, IoMdCloseCircleOutline } from 'react-icons/io';
import { FaRegCircleXmark } from 'react-icons/fa6';
import './App.css';
import {Cards} from './Cards'


function App() {
  const premiumCard = {
    title: 'Premium',
    price: '10,000 MAD',
    features: [
      { text: 'Premium features', icon: <IoMdCheckmarkCircleOutline color='#d2d0d0' /> },
      { text: 'Another premium feature', icon: <IoMdCheckmarkCircleOutline color='#d2d0d0' /> },
      // ... add more features
    ],
  };

  const proCard = {
    title: 'Pro',
    price: '8,000 MAD',
    features: [
      { text: 'Pro features', icon: <IoMdCheckmarkCircleOutline color='#d2d0d0' /> },
      { text: 'Another pro feature', icon: <IoMdCheckmarkCircleOutline color='#d2d0d0' /> },
      // ... add more features
    ],
  };

  const basicCard = {
    title: 'Basic',
    price: '5,000 MAD',
    features: [
      { text: 'Basic features', icon: <IoMdCheckmarkCircleOutline color='#d2d0d0' /> },
      { text: 'Another basic feature', icon: <IoMdCheckmarkCircleOutline color='#d2d0d0' /> },
      // ... add more features
    ],
  };
  const cards = [premiumCard, proCard, basicCard]
  

  return (
    <>
    <Cards cards={cards}/>
    </>
  )
}

export default App
