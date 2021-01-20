import React, { useEffect } from 'react';
import { useTable, useSortBy } from "react-table";
import NoDataMessage from '../../components/NoDataMessage/NoDataMessage';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { setNaklId } from "../../store/nakladni/actions";
import changeHeight from '../../helpers/tablesHeight';



const OverHeadTable = (props) => {

    useEffect(() => {
        //    Функция изменения высоты таблицы
        changeHeight();
    }, [changeHeight]);


    const onNaklSelect = (event, id) => {
        event.preventDefault();
        props.setId({ id });
        props.history.push("/accent");
    };


    const data = React.useMemo(
        () => props.results.map((item) => {
            return {
                status: item.status,
                style: item.status_style,
                number: item.number,
                date: item.date_time,
                provider: item.provider,
                acceptance_type: item.acceptance_type,
                ContractTypeName: item.ContractTypeName,
                Sum: item.sum,
                id: item.nakl_id,
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
                                <tr
                                    onDoubleClick={(event) => { onNaklSelect(event, row.original.id) }}
                                    className={row.original.style + " cursor-pointer"}

                                    {...row.getRowProps()}>
                                    {row.cells.map((cell) => {
                                        return (
                                            <td

                                                {...cell.getCellProps()}>{cell.render("Cell")}</td>
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
    setId: (id) => dispatch(setNaklId(id)),
});


export default withRouter(
    connect(null, mapDispatchToProps)(OverHeadTable)
);

