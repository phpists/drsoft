import React from 'react';
import { useTable, useSortBy } from "react-table";



const Reacttable = ({ results }) => {

    const data = React.useMemo(
        () => results.data.map((item) => {
            return {
                status: item.status,
                number: item.doc_num,
                date: item.doc_date,
                provider: item.provider,
                direct: item.direct ? "Прямой" : "Непрямой",
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
                accessor: "direct",
            },
            {
                Header: "Сумма, Р.",
                accessor: "Sum",
            },
        ],
        [results.data]
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


    function noData() {
        return <h3>Нет даних</h3>
    };


    return (
        results.data.length === 0
            ?
            noData()
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
                    {results.data.length === 0
                        ?
                        noData()
                        :
                        rows.map((row, i) => {
                            prepareRow(row);
                            return (
                                <tr {...row.getRowProps()}>
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


export default Reacttable;
