import React from 'react'
import PostItem from './PostItem'

const ListPosts = ({
    data,
    widthScreen,
    openSheet,
}) => {

    return (
        data.slice(0).reverse().map((post, index) => (
            <PostItem
                widthScreen={widthScreen}
                post={post} key={index}
                openSheet={() => openSheet(post)}
            />
        ))
    )
}

export default ListPosts
