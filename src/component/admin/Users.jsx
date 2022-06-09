import React, { useEffect, useState } from 'react'

const Users = () => {

    const [users, setUsers] = useState([]);
    const [isComponentMounted, setIsComponentMounted] = useState(true);

    //  fetch users from https://fakestoreapi.com/users
    useEffect(() => {
        const getUsers = async () => {
            const response = await fetch('https://fakestoreapi.com/users?limit=3', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Headers': '*',
                    'Access-Control-Allow-Methods': '*'
                }
            });

            if (isComponentMounted) {
                setUsers(await response.clone().json());
            }

            return () => {
                setIsComponentMounted(false);
            }
        }

        getUsers();

    }, [isComponentMounted]);

    const user = (user) => {
        return (
            <div id='accordion'  key={user.id} className='mt-1'>
                <div className="card">
                    <div className="card-header" id="headingOne3">
                        <h5 className="mb-0">
                            <button className="btn btn-link" data-toggle="collapse" data-target={'#collapse' + user.id} aria-expanded="true" aria-controls="collapseOne">
                                {user.name.firstname} {user.name.lastname}
                            </button>
                        </h5>
                    </div>

                    <div id={'collapse' + user.id} className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                        <div className="card-body">
                            {/* create row with product details */}
                            <div className='columns'>
                                <div className='column'>
                                    <h5>
                                        Role <button className='btn btn-sm btn-info mx-3'>USER</button>
                                    </h5>
                                    <div className='d-flex m-3'>
                                        <p className='m-2'>
                                            email: {user.email}
                                            address: {user.address.street} {user.address.number}, {user.address.city} {user.address.zipcode}
                                            <br />
                                            phone: {user.phone}
                                        </p>
                                        <img className='rounded-circle' src='https://via.placeholder.com/50' alt='user' />
                                    </div>
                                    {/* product is available */}
                                    <div className='d-flex'>
                                        <button className='btn btn-sm btn-success mx-3'>update</button>
                                        <button className='btn btn-sm btn-danger mx-3'>remove</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }


    return (
        <React.Fragment>

            {/* display all users */}
            { users.map(user) }

        </React.Fragment>
    )
}

export default Users;
