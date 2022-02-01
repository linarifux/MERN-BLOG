import React from 'react';
import { Button, Table, TableHead, TableRow, TableBody, TableCell } from '@mui/material';
import { Link } from 'react-router-dom';

const Categories = () => {
    const categories = ['Tech','Science','Music','Sports', 'Fashion','Programming'];
  return (
      <>
        <Link to={'/create'} style={{textDecoration: 'none', color: 'inherit'}}><Button variant='contained' sx={{margin: '20px', fontSize: '20px', width: '86%'}}>Create Blog</Button></Link>

        <Table sx={{border: '1px solid #878787'}}>
            <TableHead>
                <TableRow>
                    <TableCell>All Categories</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {categories.map(cat => {
                    return(
                        <TableRow>
                            <TableCell>{cat}</TableCell>
                        </TableRow>
                    )
                })}
            </TableBody>
        </Table>
      </>
  );
};

export default Categories;
