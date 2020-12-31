import React from 'react';
import { useTable } from "react-table";


export const Reacttable = () => {

    const results = [
        {
            "nakl_id": 2,
            "nakl_status_id": 4,
            "nakl_n": "125/2020к",
            "nakl_d": "2020-12-21T00:00:00",
            "receive_d": "2020-12-22T00:00:00",
            "direct": true,
            "NDS": 33.0000,
            "Sum": 8264.0000,
            "company_id": 1,
            "Provider": "ОАО Много",
            "ContractTypeId": 1,
            "ContractTypeName": "купля продажа",
        },
        {
            "nakl_id": 3,
            "nakl_status_id": 5,
            "nakl_n": "126/2020к",
            "nakl_d": "2020-12-20T00:00:00",
            "receive_d": "2020-12-21T00:00:00",
            "direct": true,
            "NDS": 32.0000,
            "Sum": 1234.0000,
            "company_id": 1,
            "Provider": "ОАО Много",
            "ContractTypeId": 1,
            "ContractTypeName": "купля продажа",
        },
        {
            "nakl_id": 3,
            "nakl_status_id": 5,
            "nakl_n": "126/2020к",
            "nakl_d": "2020-12-20T00:00:00",
            "receive_d": "2020-12-21T00:00:00",
            "direct": true,
            "NDS": 32.0000,
            "Sum": 1234.0000,
            "company_id": 1,
            "Provider": "ОАО Много",
            "ContractTypeId": 1,
            "ContractTypeName": "купля продажа",
        },
        {
            "nakl_id": 3,
            "nakl_status_id": 5,
            "nakl_n": "126/2020к",
            "nakl_d": "2020-12-20T00:00:00",
            "receive_d": "2020-12-21T00:00:00",
            "direct": true,
            "NDS": 32.0000,
            "Sum": 1234.0000,
            "company_id": 1,
            "Provider": "ОАО Много",
            "ContractTypeId": 1,
            "ContractTypeName": "купля продажа",
        },
        {
            "nakl_id": 3,
            "nakl_status_id": 5,
            "nakl_n": "126/2020к",
            "nakl_d": "2020-12-20T00:00:00",
            "receive_d": "2020-12-21T00:00:00",
            "direct": true,
            "NDS": 32.0000,
            "Sum": 1234.0000,
            "company_id": 1,
            "Provider": "ОАО Много",
            "ContractTypeId": 1,
            "ContractTypeName": "купля продажа",
        },
        {
            "nakl_id": 3,
            "nakl_status_id": 5,
            "nakl_n": "126/2020к",
            "nakl_d": "2020-12-20T00:00:00",
            "receive_d": "2020-12-21T00:00:00",
            "direct": true,
            "NDS": 32.0000,
            "Sum": 1234.0000,
            "company_id": 1,
            "Provider": "ОАО Много",
            "ContractTypeId": 1,
            "ContractTypeName": "купля продажа",
        },
        {
            "nakl_id": 3,
            "nakl_status_id": 5,
            "nakl_n": "126/2020к",
            "nakl_d": "2020-12-20T00:00:00",
            "receive_d": "2020-12-21T00:00:00",
            "direct": true,
            "NDS": 32.0000,
            "Sum": 1234.0000,
            "company_id": 1,
            "Provider": "ОАО Много",
            "ContractTypeId": 1,
            "ContractTypeName": "купля продажа",
        },
        {
            "nakl_id": 3,
            "nakl_status_id": 5,
            "nakl_n": "126/2020к",
            "nakl_d": "2020-12-20T00:00:00",
            "receive_d": "2020-12-21T00:00:00",
            "direct": true,
            "NDS": 32.0000,
            "Sum": 1234.0000,
            "company_id": 1,
            "Provider": "ОАО Много",
            "ContractTypeId": 1,
            "ContractTypeName": "купля продажа",
        },
    ]

    const data = React.useMemo(
        () =>
            results.map((item) => {
                return {
                    status: item.nakl_status_id,
                    number: item.nakl_n,
                    date: item.nakl_d,
                    provider: item.Provider,
                    direct: item.direct ? "Прямой" : "Непрямой",
                    ContractTypeName: item.ContractTypeName,
                    Sum: item.Sum,
                }
            }),
        []
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
                accessor: "direct",
            },
            {
                Header: "Сумма, Р.",
                accessor: "Sum",
            },
        ],
        []
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
    });


    return (
        <table className="table__block-table"
            {...getTableProps()}>
            <thead>
                {headerGroups.map((headerGroup) => (
                    <tr className="table__block-title"
                        {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column) => (
                            <th {...column.getHeaderProps()}>{column.render("Header")}</th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map((row, i) => {
                    prepareRow(row);
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map((cell) => {
                                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
                            })}
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}



