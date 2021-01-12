import React from 'react';
import { useTable, useSortBy } from "react-table";
import NoDataMessage from '../../components/NoDataMessage/NoDataMessage';



const AccentTable = ({ results }) => {

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
                status: "-",
                name: item.name,
                code_count: item.code_count,
                count: item.count,
                validation: item.validation,
                ContractTypeName: item.ContractTypeName,
                price: item.price,
                nds: item.nds,
                sum: item.sum,
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
                Header: "Наименование",
                accessor: "name",
            },
            {
                Header: "Коды маркировки",
                accessor: "code_count",
            },
            {
                Header: "Кол-во",
                accessor: "count",
            },
            {
                Header: "Проверка",
                accessor: "validation",
            },
            {
                Header: "Цена, Р.",
                accessor: "price",
            },
            {
                Header: "НДС, Р.",
                accessor: "nds",
            },
            {
                Header: "Сумма(с НДС)",
                accessor: "sum",
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
                                <tr className={row.original.style + ""}

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


export default AccentTable;
