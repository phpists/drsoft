import React, { useState, useEffect } from 'react';
import { useTable, useSortBy } from "react-table";
import NoDataMessage from '../../components/NoDataMessage/NoDataMessage';



const OverHeadTable = ({ results, props }) => {
    //const OverHeadTable = ({ props }) => {

    const onNaklSelect = (event) => {
        event.preventDefault();
        console.log(props);
        props.history.push("/accent");
    };



    // const results = [
    //     {
    //         "id": 1,
    //         "number": "9sdls99",
    //         "date_time": "2021-01-01T00:00:00",
    //         "provider": "РОГА И КОПЫТА",
    //         "acceptance_type": "Прямой",
    //         "contract_type": "Комисия",
    //         "sum": 1200.00,
    //         "status": "Новая поставка",
    //         "status_style": "table__block-newover"
    //     },
    //     {
    //         "id": -1,
    //         "number": "9sdls99",
    //         "date_time": "2021-01-01T00:00:00",
    //         "provider": "ОАО Мартышкин Труд",
    //         "acceptance_type": "Обратный",
    //         "contract_type": "Комисия",
    //         "sum": 138250.00,
    //         "status": "Новая поставка",
    //         "status_style": "table__block-newover"
    //     }
    // ];


    const data = React.useMemo(
        () => results.map((item) => {
            return {
                status: item.status,
                style: item.status_style,
                number: item.number,
                date: item.date_time,
                provider: item.provider,
                acceptance_type: item.acceptance_type,
                ContractTypeName: item.ContractTypeName,
                Sum: item.sum,
            }
        }), [results]
    );


    const columns = React.useMemo(
        () => [
            {
                Header: "Статус",
                accessor: "status",
            },
            {
                Header: "№",
                accessor: "number",
            },
            {
                Header: "Дата",
                accessor: "date",
            },
            {
                Header: "Поставщик",
                accessor: "provider",
            },
            {
                Header: "Акцент",
                accessor: "acceptance_type",
            },
            {
                Header: "Сумма, Р.",
                accessor: "Sum",
            },
        ],
        [results]
    );


    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({
        columns,
        data,
    },
        useSortBy
    );



    return (

        results.length === 0
            ?
            <NoDataMessage />
            :
            <table className="table__block-table"
                {...getTableProps()} >
                <thead>
                    {headerGroups.map((headerGroup) => (
                        <tr className="table__block-title"
                            {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (

                                //Add the sorting props to control sorting
                                < th {...column.getHeaderProps(column.getSortByToggleProps())} >
                                    {column.render("Header")}

                                    {/* Add a sort direction indicator  */}
                                    <span>
                                        {column.isSorted
                                            ? column.isSortedDesc
                                                ? ' 🔽'
                                                : ' 🔼'
                                            : ''}
                                    </span>
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>


                <tbody {...getTableBodyProps()}>
                    {results.length === 0
                        ?
                        <NoDataMessage />
                        :
                        rows.map((row, i) => {
                            prepareRow(row);
                            //console.log(row.original.style) 

                            return (
                                <tr onDoubleClick={(event) => { onNaklSelect(event) }}
                                    className={row.original.style + ""}

                                    {...row.getRowProps()}>
                                    {row.cells.map((cell) => {
                                        return (
                                            <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                                        )
                                    })}
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table >
    );
};


export default OverHeadTable;
