import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import React, { useEffect, useState } from 'react';

const ManageProducts = () => {
    const [explores, setExplores] = useState([])

    useEffect(() => {
        fetch('https://whispering-shore-11998.herokuapp.com/explores')
            .then(res => res.json())
            .then(data => setExplores(data))
    }, [])

    const handleDelete = (id) => {
        const url = `https://whispering-shore-11998.herokuapp.com/orders/${id}`
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    alert('Deleted Successfully')
                    const remainingOrders = explores.filter(order => order._id !== id)
                    setExplores(remainingOrders)
                }
            })
    }
    return (
        <div>
            <h2>From Manage Products</h2>
            <TableContainer component={Paper}>
                <Table sx={{}} aria-label="Appointments table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Product Name</TableCell>
                            <TableCell align="right">Price</TableCell>

                            <TableCell align="right">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {explores.map((row) => (
                            <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.Price}</TableCell>

                                <TableCell align="right">
                                    <button onClick={() => handleDelete(row._id)}>X</button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default ManageProducts;