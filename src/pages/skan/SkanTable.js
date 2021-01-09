import React from 'react';
import { useTable, useSortBy } from "react-table";
import NoDataMessage from '../../components/NoDataMessage/NoDataMessage';



const SkanTable = ({ skans }) => {
    //const SkanTable = () => {

    // const skans = [
    //     "24746632",
    //     "9326332",
    //     "93263632",
    //     "93929393"
    // ];

    const data = React.useMemo(
        () => skans.map((item, index) => {
            return {
                number: index + 1,
                code: item,
            }
        }), [skans]
    );

    const columns = React.useMemo(
        () => [
            {
                Header: "№",
                accessor: "number",
            },
            {
                Header: "Коды маркировки",
                accessor: "code",
            }
        ],
        [skans]
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
        skans.length === 0
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
                    {
                        rows.map((row, i) => {
                            prepareRow(row);
                            return (
                                <tr className="table__block-table-text"
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


export default SkanTable;
