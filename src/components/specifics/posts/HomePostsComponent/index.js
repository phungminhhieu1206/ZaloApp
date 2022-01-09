import React from 'react'
import {
    StyleSheet,
    SafeAreaView,
    ScrollView,
    View,
    Text,
    ActivityIndicator,
    RefreshControl
} from 'react-native'
import colors from '../../../../assets/themes/colors'
import { POSTS } from '../../../../assets/sample_data/Posts'
import Stories from './SubComponents/Stories'
import FormCrePost from './SubComponents/FormCrePost'
import PostItem from './SubComponents/PostItem'
import ListPosts from './SubComponents/ListPosts'
import Message from '../../../common/Message'
import { CREATE_POST } from '../../../../constants/routeNames'

const HomePostsComponent = ({
    friends,
    data,
    loading,
    widthScreen,
    refreshList,
    onRefresh,
    navigate
}) => {
    // console.log('data ---------', data);

    const handOnClick = () => {
        navigate(CREATE_POST);
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
