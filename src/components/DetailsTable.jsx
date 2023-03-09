import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(buyer, amount, price, value) {
  return { buyer, amount, price, value };
}

const rows = [
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
  createData('Justbread', 356, 16.0, 49, 3.9),
  createData('Whitebread', 356, 16.0, 49, 3.9),
  createData('Razanibread', 356, 16.0, 49, 3.9),
  createData('Bread', 356, 16.0, 49, 3.9),
  createData('Vince', 356, 16.0, 49, 3.9),
];

export default function BasicTable() {
  return (
    <TableContainer
			sx={{ 
				backgroundColor: 'transparent',
				fontFamily: 'Roboto',
				boxShadow: 'none',
			}}
			component={Paper}
		>
      <Table stickyHeader aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Naziv</TableCell>
            <TableCell align="right">Kolicina</TableCell>
            <TableCell align="right">Cena</TableCell>
            <TableCell align="right">Vrednost</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.buyer}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" align="left">{row.buyer}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
              <TableCell align="right">{row.price}</TableCell>
              <TableCell align="right">{row.value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
