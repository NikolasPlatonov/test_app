import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {fetchUsers} from '../../features/users/usersSlice'

export const UsersView = () => {
    const users = useSelector((state) => state.users)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchUsers())
    }, [])

    return (
        <div>
            <h2>
                LIST OF USERS:
            </h2>
            {users.isLoading && <div>Loading...</div>}
            {!users.isLoading && users.error ? <div>Error: {users.error}</div> : null}
            {!users.isLoading && users.users.length ? (
                <ul>
                    {users.users.map((user) => (
                        <li key={user.id}>
                            {user.name}
                        </li>
                    ))}
                </ul>
            ) : null}
        </div>
    )
}