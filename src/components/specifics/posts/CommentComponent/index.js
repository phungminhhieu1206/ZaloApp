import React from 'react'
import { View, Text, SafeAreaView, ScrollView, StyleSheet, RefreshControl } from 'react-native'
import colors from '../../../../assets/themes/colors'
import CommentInput from './CommentInput'
import CommentItem from './CommentItem'

const CommentComponent = ({
    data,
    refreshList,
    onRefresh,
    content,
    onChangeText,
    onCreateComment
}) => {
    // console.log('data: :>>>', data);

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
                refreshControl={
                    <RefreshControl
                        refreshing={refreshList}
                        onRefresh={onRefresh}
                        colors={['red']}
                    />
                }
                style={styles.scroll}
            >
                {data.map((item, index) => (
                    <CommentItem
                        key={index}
                        user={item.user.username}
                        comment={item.content}
                        createDate={item.createdAt}
                    />
                ))}
            </ScrollView>
            <CommentInput
                onCreateComment={onCreateComment}
                content={content}
                onChangeText={onChangeText}
            />
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
