import React from 'react'
import {
    StyleSheet,
    SafeAreaView,
    ScrollView
} from 'react-native'
import colors from '../../../assets/themes/colors'
import { POSTS } from '../../../assets/sample_data/Posts'
import Stories from './ItemsHomePosts/Stories'
import CreatePostFrom from './ItemsHomePosts/CreatePostFrom'
import PostItem from './ItemsHomePosts/PostItem'

const HomePostsComponent = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Stories />
                <CreatePostFrom />
                {POSTS.map((post, index) => (
                    <PostItem post={post} key={index} />
                ))}
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        flex: 1,
    }
})

export default HomePostsComponent
