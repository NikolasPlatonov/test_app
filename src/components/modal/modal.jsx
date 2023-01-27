import React, {useEffect} from 'react'
import classes from './modal.module.scss'
import {useDispatch, useSelector} from 'react-redux'
import {fetchAlbums} from './albumsSlice'

export const Modal = ({id, closeModal}) => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchAlbums())
    }, [])

    const albums = useSelector((state) => state.albums)
    const userAlbums = albums?.albums?.filter((album) => id === album.userId)
    return (
        <div className={classes.wrapper}>
            <button className={classes.closeBtn} onClick={() => {closeModal(false)}}>X</button>
            <div className={classes.content}>
                {userAlbums?.map((post, index) => {
                    return (
                        <div>
                            <div className={classes.albumNum}>
                                Album {index + 1}
                            </div>
                            <div className={classes.title}>
                                {post.title}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}