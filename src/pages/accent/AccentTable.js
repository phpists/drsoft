import React from 'react';
import { useTable, useSortBy } from "react-table";
import NoDataMessage from '../../components/NoDataMessage/NoDataMessage';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { setIdForSkans, setTitleForSkans } from "../../store/skans/actions";


const AccentTable = (props) => {

    const data = React.useMemo(
        () => props.results || [].map((item) => {
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
                id: item.nakl_item_id,
            }
        }), [props.results]
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
        [props.results]
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

    const onNaklStringSelect = (id, name) => {
        props.setSkansId(id);
        props.setSkansTitle(name);
        props.history.push("/skan");
    };


    return (
        props.results.length === 0
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
                    {props.results.length === 0
                        ?
                        <NoDataMessage />
                        :
                        rows.map((row, i) => {
                            prepareRow(row);

                            return (
                                <tr className="cursor-pointer"
                                    onDoubleClick={() => {
                                        onNaklStringSelect(row.original.id, row.original.name)
                                    }}

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



const mapDispatchToProps = dispatch => ({
    setSkansId: (id) => dispatch(setIdForSkans(id)),
    setSkansTitle: (name) => dispatch(setTitleForSkans(name)),
});



export default withRouter(
    connect(null, mapDispatchToProps)(AccentTable)
);

