import React, {useEffect} from 'react'
import classes from '../../pages/usersList/usersList.module.scss'
import {useParams} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {fetchPosts} from './postsSlice'
import {Link} from 'react-router-dom'

export const Posts = () => {
    const {id} = useParams()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchPosts())
    }, [])

    const posts = useSelector((state) => state.posts)
    const userPosts = posts.posts.filter((post) => id === post.userId.toString())


    return (
        <div className={classes.wrapper}>
            <div className={classes.content}>
                {userPosts?.map((post, index) => {
                    return (
                        <div>
                            <div className={classes.postNum}>
                                Post {index + 1}
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
                <Link to="/test_app" >
                    <button className={classes.backBtn} >
                        Back
                    </button>
                </Link>
            </div>
        </div>
    )
}