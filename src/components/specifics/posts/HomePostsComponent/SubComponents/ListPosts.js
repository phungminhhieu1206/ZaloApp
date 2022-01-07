import React from 'react'
import PostItem from './PostItem'

const ListPosts = ({
    data,
    widthScreen
}) => {
    return (
        data.map((post, index) => (
            <PostItem widthScreen={widthScreen} post={post} key={index} />
        ))
    )
}

export default ListPosts
