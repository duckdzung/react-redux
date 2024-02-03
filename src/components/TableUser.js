import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, fetchAllUsers } from '../action/actions';
import { useEffect } from 'react';

const TableUser = () => {
    const dispatch = useDispatch();

    const users = useSelector(state => state.user.users);
    const loading = useSelector(state => state.user.loading);
    const error = useSelector(state => state.user.error);
    const errorMessage = useSelector(state => state.user.errorMessage);

    useEffect(() => {
        dispatch(fetchAllUsers());
        // eslint-disable-next-line
    }, []);

    const handleDeleteUser = (user) => {
        dispatch(deleteUser(user.id));
    }

    return (
        <>
            {error ?
                <>
                    <p>Something wrongs, please try again ....</p>
                    <p>Error message: {errorMessage}</p>
                </>
                :
                <>
                    {loading ?
                        <>
                            <p>Loading ....</p>
                        </>
                        :
                        <>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Email</th>
                                        <th>Username</th>
                                        <th>ACtion</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {users && users.length > 0 && users.map((user, index) => (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{user.email}</td>
                                            <td>{user.username}</td>
                                            <td>
                                                <Button
                                                    variant="danger"
                                                    className='ms-2'
                                                    onClick={() => handleDeleteUser(user)}
                                                >Delete</Button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </>
                    }
                </>
            }
        </>
    );
}

export default TableUser;