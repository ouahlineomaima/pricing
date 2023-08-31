import { useState } from 'react';
import { useMemo } from 'react';
import { IoMdCheckmarkCircleOutline, IoMdCloseCircleOutline } from 'react-icons/io';
import { FaRegCircleXmark } from 'react-icons/fa6';
import './App.css';
import { Cards } from './Cards'
import { useTable } from 'react-table';
import MOCK_DATA from './MOCK_DATA.json'



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
  const cards = [basicCard, premiumCard, proCard ]

  const COLUMNS = [
    {
      Header: 'Feature',
      accessor: 'feature'
    },
    {
      Header: 'Basic',
      accessor: 'basic'
    },
    {
      Header: 'Pro',
      accessor: 'pro'
    },
    {
      Header: 'Premium',
      accessor: 'premium'
    },
    {
      Header: 'effort',
      accessor: 'effort'
    },
  ]

  const columns = useMemo(() => COLUMNS, [])
  const data = useMemo(() => MOCK_DATA, [])
  const tableInstance = useTable({ columns, data });
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance


  return (
    <>
    <h2>Features by Complexity</h2>
      <div className='features'>
        <table {...getTableProps}>
          <thead >
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                ))}

              </tr>

            ))}

          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    const column = cell.column;
                    const value = cell.value;

                    return (
                      <td {...cell.getCellProps()}>
                        {typeof value === 'boolean' ? (
                          <span>
                            {value ? (
                              <IoMdCheckmarkCircleOutline color='#d2d0d0' size={'2rem'} />
                            ) : (
                              <IoMdCloseCircleOutline color='#d2d0d0'size={'2rem'} />
                            )}
                          </span>
                        ) : (
                          value
                        )}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>

      </div>

      <h2>Pricing</h2>

      <Cards cards={cards} />
    </>
  )
}

export default App
