import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {fetchUsers} from './usersSlice'
import {Link} from 'react-router-dom'
import classes from '../usersList/usersList.module.scss'
import {Modal} from '../../components/modal/modal'
import Dialog from '@mui/material/Dialog';

export const UsersList = () => {
    const [openModal, setOpenModal] = useState(false)
    const [userId, setUserId] = useState()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchUsers())
    }, [])

    const users = useSelector((state) => state.users)

    return (
        <div className={classes.wrapper}>
            <div className={classes.content}>
                <div className={classes.title}>
                    LIST OF USERS:
                </div>
                {users.isLoading && <div>Loading...</div>}
                {!users.isLoading && users.error ? <div>Error: {users.error}</div> : null}
                {!users.isLoading && users.users.length ?
                    (
                        <div className={classes.list}>
                            {users?.users?.map((user) => (
                                <>
                                    <div key={user.id}>
                                        <div className={classes.item}>
                                            <div>
                                                {user.name}
                                            </div>
                                            <div>
                                                <Link to={`/posts/${user.id}`} key={user.id} >
                                                    <button>
                                                        Posts
                                                    </button>
                                                </Link>
                                                <button onClick={() => {setOpenModal(true); setUserId(user.id)}}>
                                                    Albums
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            ))}
                        </div>
                    ) : null}
            </div>
            <Dialog
                PaperProps={{classes: {root: classes.wrapperDialog}}}
                open={openModal}
                onClose={() => setOpenModal(false)}
            >
                <Modal id={userId} closeModal={setOpenModal} />
            </Dialog>
        </div >
    )
}