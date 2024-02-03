import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

const TableUser = () => {
    return (
        <Table striped bordered hover>
            <thead variant="dark">
                <tr>
                    <th>#</th>
                    <th>Email</th>
                    <th>Username</th>
                    <th>ACtion</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>

                    </td>
                    <td>
                        <Button variant="warning">Edit</Button>
                        <Button variant="danger" className='ms-2'>Delete</Button>
                    </td>
                </tr>
            </tbody>
        </Table>
    );
}

export default TableUser;