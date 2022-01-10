import React from 'react'
import { View, Text, SafeAreaView, ScrollView, StyleSheet } from 'react-native'
import colors from '../../../../assets/themes/colors'
import CommentInput from './CommentInput'
import CommentItem from './CommentItem'

const CommentComponent = ({
    data
}) => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scroll}>
                {data.comments.map((comment, index) => (
                    <CommentItem key={index} user={comment.user} comment={comment.comment} />
                ))}
            </ScrollView>
            <CommentInput />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    scroll: {
        flex: 1,
        backgroundColor: colors.white
    }
})

export default CommentComponent
