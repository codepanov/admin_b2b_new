import React, { useMemo } from "react";
import MaterialReactTable from "material-react-table";

import Chip from '@mui/material/Chip';

import { rows } from '../temp_data/table_data';

const formatDate = (date) => {
    return new Date(date).toLocaleString('sr');
}

const formatCurrency = (value) => {
    return value.toLocaleString('sr', { style: 'currency', currency: 'RSD', minimumFractionDigits: 2 });
}

//simple data example - Check out https://www.material-react-table.com/docs/examples/remote for a more complex example

const App = () => {

    const horizontal_scroll = document.querySelector('.ch-table-container')
    React.useEffect(() => {
        horizontal_scroll.children[1].classList.add('scroll-handler')

    }, [horizontal_scroll])

    const columns = useMemo(
        () => [
            {
                accessorKey: "id",
                header: "ID",
                size: 50,
            },
            {
                accessorFn: (row) => formatDate(row.order_time),
                id: "order_time",
                header: "Datum porudžbine",
            },
            {
                accessorKey: "buyer",
                header: "Kupac",
            },
            {
                accessorKey: "address",
                header: "Adresa za isporuku",
                enableSorting: false,
            },
            {
                accessorKey: "status",
                header: "Status",
                // enableSorting: false,
                size: 70,
                Cell: ({ cell, row }) => <Chip label={cell.getValue()} color={row.original.color} style={{width: '95px'}} />
            },
            {
                accessorFn: (row) => formatCurrency(row.price),
                id: "price",
                header: "Vrednost",
                size: 90
            }
        ], []
    );

    return  (
        <>
            <MaterialReactTable
                ref={horizontal_scroll}
                columns={columns}
                data={rows}
                muiTablePaperProps={{
                    //change the mui box shadow
                    elevation: 0,
                    //customize paper styles
                    sx: {
                        borderRadius: '0',
                        // borderTop: '1px solid #e0e0e0',
                        borderBottom: '1px solid #e0e0e0',
                    },
                    className: 'ch-table-container'
                }}
                enableColumnResizing
                columnResizeMode="onChange"
            />
        </>
    )
}

export default App;
