import React from 'react'
import {
    StyleSheet,
    SafeAreaView,
    ScrollView
} from 'react-native'
import colors from '../../../assets/themes/colors'
import { POSTS } from '../../../assets/sample_data/Posts'
import Stories from './ItemsHomePosts/Stories'

const HomePostsComponent = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Stories />
                <NewPost />
                {/* {POSTS.map((post, index) => (
                    <Post post={post} key={index} />
                ))} */}
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
