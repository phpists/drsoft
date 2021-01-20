import React, { useEffect } from 'react';
import { useTable, useSortBy } from "react-table";
import NoDataMessage from '../../components/NoDataMessage/NoDataMessage';



//const SkanTable = ({ skans }) => {
const SkanTable = () => {

    useEffect(() => {
        change()
    })

    function change() {
        console.log("change")
        let height = window.screen.height,
            width = window.screen.width;
        const wrapper = document.querySelector(".table__block-wrapper");

        if (width <= 800)
            wrapper.style.maxHeight = `${(height = height - 550)}px`;
        else wrapper.style.maxHeight = `${(height = height - 580)}px`;

        const moveHeight = wrapper.clientHeight;
        if (moveHeight + 1 > height) wrapper.style.overflowY = "scroll";
        else wrapper.style.overflowY = "hidden";
    }
    change();

    //window.addEventListener("load", change);

    const skans = [
       
        {
            "sgtin": "3333454888",
            "status": "Не проверен",
            "style": "color"
        },
        {
            "sgtin": "3344444444444444432233333333333333",
            "status": "Совпадает",
            "style": "color"
        },
        {
            "sgtin": "3333454888",
            "status": "Не проверен",
            "style": "color"
        },
        {
            "sgtin": "3344444444444444432233333333333333",
            "status": "Совпадает",
            "style": "color"
        },
        {
            "sgtin": "3333454888",
            "status": "Не проверен",
            "style": "color"
        },
        {
            "sgtin": "3344444444444444432233333333333333",
            "status": "Совпадает",
            "style": "color"
        },
        {
            "sgtin": "3333454888",
            "status": "Не проверен",
            "style": "color"
        },
        {
            "sgtin": "3344444444444444432233333333333333",
            "status": "Совпадает",
            "style": "color"
        },
        {
            "sgtin": "3344444444444444432233333333333333",
            "status": "Совпадает",
            "style": "color"
        },
        {
            "sgtin": "3333454888",
            "status": "Не проверен",
            "style": "color"
        },
        {
            "sgtin": "3344444444444444432233333333333333",
            "status": "Совпадает",
            "style": "color"
        },
        {
            "sgtin": "3344444444444444432233333333333333",
            "status": "Совпадает",
            "style": "color"
        },
        {
            "sgtin": "3333454888",
            "status": "Не проверен",
            "style": "color"
        },
        {
            "sgtin": "3344444444444444432233333333333333",
            "status": "Совпадает",
            "style": "color"
        },
        {
            "sgtin": "3344444444444444432233333333333333",
            "status": "Совпадает",
            "style": "color"
        },
        {
            "sgtin": "3333454888",
            "status": "Не проверен",
            "style": "color"
        },
        {
            "sgtin": "3344444444444444432233333333333333",
            "status": "Совпадает",
            "style": "color"
        },
    ]

    const data = React.useMemo(
        () => skans.map((item, index) => {
            return {
                number: index + 1,
                code: item.sgtin,
                status: item.status,
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
                Header: "Cтатус",
                accessor: "status",
            },
            {
                Header: "Коды маркировки",
                accessor: "code",
            },
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
        // skans === undefined
        //     ?
        //     <h1>choose nakl</h1>
        //     :
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
