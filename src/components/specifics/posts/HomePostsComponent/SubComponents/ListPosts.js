import React from 'react'
import PostItem from './PostItem'

const ListPosts = ({
    data,
    widthScreen,
    openSheet,
    postFirst
}) => {

    return (
        data.slice(0).reverse().map((post, index) => (
            <PostItem
                widthScreen={widthScreen}
                post={post} key={index}
                openSheet={() => openSheet(post)}
                postFirst={postFirst}
            />
        ))
    )
}

export default ListPosts
