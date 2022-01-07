import React from 'react'
import {
    StyleSheet,
    SafeAreaView,
    ScrollView,
    View,
    Text
} from 'react-native'
import colors from '../../../../assets/themes/colors'
import { POSTS } from '../../../../assets/sample_data/Posts'
import Stories from './SubComponents/Stories'
import FormCrePost from './SubComponents/FormCrePost'
import PostItem from './SubComponents/PostItem'
import ListPosts from './SubComponents/ListPosts'

const HomePostsComponent = ({
    friends,
    widthScreen
}) => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Stories friends={friends}/>
                <FormCrePost />
                <ListPosts data={POSTS} widthScreen={widthScreen}/>
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
