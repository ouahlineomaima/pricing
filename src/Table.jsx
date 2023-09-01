import React from 'react'
import { useTable } from 'react-table';
import { useMemo } from 'react';
import { IoMdCheckmarkCircleOutline, IoMdCloseCircleOutline } from 'react-icons/io';
import { FaRegCircleXmark } from 'react-icons/fa6';
import './table.css'
import FEATURES from './data/features.json';


export function Table(props) {
    const COLUMNS1 = [
        {
            Header: 'Functionality',
            accessor: 'functionnality',
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
            Header: 'Cost (MAD)',
            accessor: 'cost'
        },
    ]
    const COLUMNS2 = [
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
            Header: 'Cost (MAD)',
            accessor: 'cost'
        },
    ]

    const columns = useMemo(() => COLUMNS1, [])
    const columns2 = useMemo(() => COLUMNS2, [])
    const selectedColumns = props.data === FEATURES ? columns2: columns;
    const dataMock = useMemo(() => props.data, [])
    const tableInstanceMock = useTable({ columns: selectedColumns, data: dataMock });
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstanceMock
    return (
        <div className='features'>
            <h2>{props.title}</h2>

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
                                            {['TRUE', 'FALSE'].includes(value) ? (
                                                <span>
                                                    {value === 'TRUE' ? (
                                                        <IoMdCheckmarkCircleOutline color='#d2d0d0' size={'2rem'} />
                                                    ) : (
                                                        <IoMdCloseCircleOutline color='#d2d0d0' size={'2rem'} />
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

    )
}
