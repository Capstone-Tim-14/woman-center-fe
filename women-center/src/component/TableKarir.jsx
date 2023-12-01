import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';

function TableKarir() {
    return (
        <>
        <div className='mainText'>
            <div className=''>
                <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                    <th>Username</th>
                    <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    </tr>
                    <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    </tr>
                    <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    </tr>
                    <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    </tr>
                    <tr>
                    <td>3</td>
                    <td colSpan={4}>Larry the Bird</td>
                    <td className='text-end'>@twitter</td>
                    </tr>
                </tbody>
                </Table>
                </div>
        </div>
        </>
    );
    }

export default TableKarir;