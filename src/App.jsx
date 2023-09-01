import { useState } from 'react';
import { useMemo } from 'react';
import { IoMdCheckmarkCircleOutline, IoMdCloseCircleOutline } from 'react-icons/io';
import { FaRegCircleXmark } from 'react-icons/fa6';
import './App.css';
import { Cards } from './Cards'
import { useTable } from 'react-table';
import MOCK_DATA from './MOCK_DATA.json';
import ADMIN from './data/admin.json';
import FEATURES from './data/features.json';
import NORMAL_USER from './data/normal user.json';
import PROFESSOR from './data/professor.json';
import STUDENT from './data/student.json';
import { Table } from './Table';



function App() {
  const premiumCard = {
    title: 'Premium',
    price: '17,500 MAD',
    features: [
      { text: 'Premium Normal user functionalities', icon: <IoMdCheckmarkCircleOutline color='#d2d0d0' /> },
      { text: 'Premium Student account functionalities', icon: <IoMdCheckmarkCircleOutline color='#d2d0d0' /> },
      { text: 'Premium Professor account functionalities', icon: <IoMdCheckmarkCircleOutline color='#d2d0d0' /> },
      { text: 'Premium Admin account functionalities', icon: <IoMdCheckmarkCircleOutline color='#d2d0d0' /> },
      { text: 'Premium general features', icon: <IoMdCheckmarkCircleOutline color='#d2d0d0' /> },
      // ... add more features
    ],
  };

  const proCard = {
    title: 'Pro',
    price: '12,850 MAD',
    features: [
      { text: 'Pro Normal user functionalities', icon: <IoMdCheckmarkCircleOutline color='#0f0c29' /> },
      { text: 'Pro Student account functionalities', icon: <IoMdCheckmarkCircleOutline color='#0f0c29' /> },
      { text: 'Pro Professor account functionalities', icon: <IoMdCheckmarkCircleOutline color='#0f0c29' /> },
      { text: 'Pro Admin account functionalities', icon: <IoMdCheckmarkCircleOutline color='#0f0c29' /> },
      { text: 'Pro general features', icon: <IoMdCheckmarkCircleOutline color='#0f0c29' /> },
      // ... add more features
    ],
  };

  const basicCard = {
    title: 'Basic',
    price: '8,750 MAD',
    features: [
      { text: 'Basic Normal user functionalities', icon: <IoMdCheckmarkCircleOutline color='#0f0c29' /> },
      { text: 'Basic Student account functionalities', icon: <IoMdCheckmarkCircleOutline color='#0f0c29' /> },
      { text: 'Basic Professor account functionalities', icon: <IoMdCheckmarkCircleOutline color='#0f0c29' /> },
      { text: 'Basic Admin account functionalities', icon: <IoMdCheckmarkCircleOutline color='#0f0c29' /> },
      { text: 'Basic general features', icon: <IoMdCheckmarkCircleOutline color='#0f0c29' /> },

      // ... add more features
    ],
  };
  const cards = [basicCard, premiumCard, proCard]

  return (
    <>
      <h2>Development Packs</h2>
      <Cards cards={cards} />
      <Table data={NORMAL_USER} title='Normal user allowed functionalities' />
      <Table data={STUDENT} title='Student account functionalities' />
      <Table data={PROFESSOR} title='Professor account functionalities' />
      <Table data={ADMIN} title='Admin account functionalities' />
      <Table data={FEATURES} title='Genaral features' />



    </>
  )
}

export default App
