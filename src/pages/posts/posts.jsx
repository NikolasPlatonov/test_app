import React, {useEffect} from 'react'
import classes from '../../pages/usersList/usersList.module.scss'
import {useParams} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {fetchPosts} from './postsSlice'

export const Posts = () => {
    const {id} = useParams()
    console.log("useParams()", useParams())
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchPosts())
    }, [])

    const posts = useSelector((state) => state.posts)
    const userPosts = posts.posts.filter((post) => id === post.userId.toString())
    console.log("userPosts", userPosts)


    return (
        <div className={classes.wrapper}>
            <div className={classes.content}>
                {userPosts?.map((post) => {
                    return (
                        <div>
                            <div className={classes.postNum}>
                                Post {post.id}
                            </div>
                            <div className={classes.title}>
                                {post.title}
                            </div>
                            <div>
                                {post.body}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}