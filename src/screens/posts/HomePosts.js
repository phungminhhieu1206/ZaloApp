import { useNavigation } from '@react-navigation/native';
import React, { useContext, useEffect, useRef, useState } from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Dimensions
} from 'react-native'
import colors from '../../assets/themes/colors'
import Icon from '../../components/common/Icon';
import HomePostsComponent from '../../components/specifics/posts/HomePostsComponent';
import { GlobalContext } from '../../context/Provider';
import { CREATE_POST, SEARCH_FRIEND } from '../../constants/routeNames';
import { USERS } from "../../assets/sample_data/Users";
import getListPosts from '../../context/actions/posts/getListPosts';
import AsyncStorage from '@react-native-async-storage/async-storage';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const HomePosts = () => {
    const { navigate, setOptions } = useNavigation();
    const [refreshList, setRefreshList] = useState(false);
    const [currentPost, setCurrentPost] = useState({});
    const [user, setUser] = useState({});

    const {
        postsDispatch,
        postsState: {
            getListPosts: { data, loading }
        }
    } = useContext(GlobalContext);

    const sheetRef = useRef(null);

    const getUser = async () => {
        try {
            const author = await AsyncStorage.getItem('user');
            // console.log('IDDDDDDDDDDDDDDDDDDDD ----> ', JSON.parse(author).id);
            setUser(JSON.parse(author));
        } catch (error) { }
    };

    const closeSheet = () => {
        if (sheetRef.current) {
            sheetRef.current.close();
        }
    };

    const openSheet = (currentPost) => {
        console.log('postID when open sheet :>>>', currentPost);
        setCurrentPost(currentPost);
        if (sheetRef.current) {
            sheetRef.current.open();
        }
    };

    // const onFileSelected = () => {
    //     closeSheet();
    //     setLocalFiles(images);
    //     console.log('postID when click edit :>>>', currentPost);
    // };

    useEffect(() => {
        getUser();
        getListPosts()(postsDispatch);
    }, []);

    const onRefresh = () => {
        setRefreshList(true);
        getUser();
        getListPosts()(postsDispatch);
        setRefreshList(false)
    }

    useEffect(() => {
        setOptions({
            // title: item.first_name + ' ' + item.last_name,
            headerStyle: {
                backgroundColor: colors.theme
            },
            headerLeft: () => {
                return (
                    <View style={styles.headerLeft}>
                        <TouchableOpacity
                            onPress={() => {
                                navigate(SEARCH_FRIEND);
                            }}
                        >
                            <Icon
                                type="EvilIcons"
                                name="search"
                                size={34}
                                color={colors.white}
                            />
                        </TouchableOpacity>
                    </View>
                )
            },
            headerTitle: () => {
                return (
                    <View style={styles.headerTitle}>
                        <TouchableOpacity
                            onPress={() => {
                                navigate(SEARCH_FRIEND);
                            }}
                        >
                            <Text
                                style={styles.title}
                            >Search friends, messages...</Text>
                        </TouchableOpacity>
                    </View>
                )
            },
            headerRight: () => {
                return (
                    <View style={styles.headerRight}>
                        <TouchableOpacity
                            onPress={() => {
                                navigate(CREATE_POST);
                            }}
                        >
                            <Icon
                                type="FontAwesome"
                                name="pencil-square-o"
                                size={25}
                                color={colors.white}
                                style={{
                                    marginRight: 20
                                }}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => console.warn('view notify')}>
                            <Icon
                                type="Ionicons"
                                name="notifications-outline"
                                size={22}
                                color={colors.white}
                                style={{
                                }}
                            />
                        </TouchableOpacity>
                    </View>
                )
            }
        });
    }, []);

    return (
        <HomePostsComponent
            widthScreen={WIDTH}
            friends={USERS}
            data={data}
            loading={loading}
            refreshList={refreshList}
            onRefresh={onRefresh}
            navigate={navigate}
            sheetRef={sheetRef}
            openSheet={openSheet}
            closeSheet={closeSheet}
            currentPost={currentPost}
            user={user}
        />
    )
}

const styles = StyleSheet.create({
    headerLeft: {
        flexDirection: 'row',
        paddingLeft: 8
    },
    headerTitle: {
        width: '120%',
    },
    headerRight: {
        flexDirection: 'row',
        paddingRight: 14,
    },
    title: {
        height: '100%',
        color: colors.white,
        textAlignVertical: 'center',
        fontSize: 16,
    }
})

export default HomePosts
