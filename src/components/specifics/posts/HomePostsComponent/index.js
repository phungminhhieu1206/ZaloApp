import React from 'react'
import {
    StyleSheet,
    SafeAreaView,
    ScrollView,
    View,
    Text,
    ActivityIndicator,
    RefreshControl,
    Alert
} from 'react-native'
import colors from '../../../../assets/themes/colors'
import { POSTS } from '../../../../assets/sample_data/Posts'
import Stories from './SubComponents/Stories'
import FormCrePost from './SubComponents/FormCrePost'
import PostItem from './SubComponents/PostItem'
import ListPosts from './SubComponents/ListPosts'
import Message from '../../../common/Message'
import { CREATE_POST, HOME_POSTS } from '../../../../constants/routeNames'
import OptionPost from '../../../common/OptionPost'
import deletePost from '../../../../context/actions/posts/deletePost'

const HomePostsComponent = ({
    friends,
    data,
    loading,
    widthScreen,
    refreshList,
    onRefresh,
    navigate,
    sheetRef,
    openSheet,
    closeSheet,
    currentPost,
    user,
    postsDispatch,
    postFirst
}) => {
    // console.log('data ---------', data[0].images);

    const handOnClick = () => {
        navigate(CREATE_POST);
    }

    const handleDelete = (idPost) => {
        Alert.alert('DELETE POST !', 'Are you sure you want to delete this post ?', [
            {
                text: 'Cancel',
                onPress: () => { },
            },
            {
                text: 'OK',
                onPress: () => {
                    deletePost(idPost)(postsDispatch)(() => {
                        onRefresh();
                    });
                    // console.log('LOGOUT SUCCESSFUL !');
                },
            },
        ]);
    }

    return (
        <SafeAreaView style={styles.container}>

            {loading &&
                <View style={{ padding: 100 }}>
                    <ActivityIndicator color={colors.theme} size="large" />
                </View>
            }

            {!loading &&
                <ScrollView
                    refreshControl={
                        <RefreshControl
                            refreshing={refreshList}
                            onRefresh={onRefresh}
                            colors={['red']}
                        />
                    }
                >
                    <Stories friends={friends} />
                    <FormCrePost />
                    {data.length !== 0 ?
                        <ListPosts
                            data={data}
                            widthScreen={widthScreen}
                            openSheet={openSheet}
                            postFirst={postFirst}
                        />
                        :
                        <View style={{
                            padding: 100,
                            borderTopWidth: 1,
                            borderTopColor: colors.background
                        }}>
                            <Message onClick={handOnClick} info message="Click to create new post !" />
                        </View>
                    }
                    <OptionPost handleDelete={handleDelete} user={user} closeSheet={closeSheet} currentPost={currentPost} ref={sheetRef} />
                </ScrollView>
            }
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
