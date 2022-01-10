import React from 'react'
import {
    StyleSheet,
    SafeAreaView,
    ScrollView,
    View,
    Text,
    ActivityIndicator,
    RefreshControl,
    Image
} from 'react-native'
import colors from '../../../../assets/themes/colors'
import Stories from './SubComponents/Stories'
import FormCrePost from './SubComponents/FormCrePost'
import ListPosts from './SubComponents/ListPosts'
import Message from '../../../common/Message'

import { BACKGROUND_IMAGE_URI, DEFAULT_IMAGE_URI } from '../../../../constants/general'

const MyChannelComponent = ({
    friends,
    data,
    loading,
    widthScreen,
    refreshList,
    onRefresh,
    navigate,
    user
}) => {

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
                    <View>
                        <View style={{
                            minHeight: 250,
                            borderBottomColor: colors.background,
                            borderBottomWidth: 1
                        }}>
                            <Image
                                resizeMode='stretch'
                                style={{
                                    width: widthScreen,
                                    height: widthScreen * 3 / 7
                                }}
                                source={{ uri: BACKGROUND_IMAGE_URI }}
                            />
                        </View>

                        <View style={styles.wrapperInfo}>
                            <Image
                                style={styles.imageAvt}
                                source={{ uri: DEFAULT_IMAGE_URI }}
                            />
                            <Text style={styles.name}>{user.username}</Text>
                        </View>
                    </View>
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
    },
    wrapperInfo: {
        position: 'absolute',
        marginTop: 90,
        alignSelf: 'center',
        alignItems: 'center'
    },
    imageAvt: {
        width: 120,
        height: 120,
        borderRadius: 100,
        borderColor: colors.white,
        borderWidth: 3
    },
    name: {
        fontSize: 20,
        color: colors.text
    }
})

export default MyChannelComponent
