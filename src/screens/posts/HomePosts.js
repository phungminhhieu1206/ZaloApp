import { useNavigation } from '@react-navigation/native';
import React, { useContext, useEffect } from 'react'
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

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const HomePosts = () => {
    const { navigate, setOptions } = useNavigation();

    const {
        postsDispatch,
        postsState: {
            getListPosts: { data, loading }
        }
    } = useContext(GlobalContext);

    useEffect(() => {
        getListPosts()(postsDispatch);
    }, []);

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


    // console.log('aaaaaaaaaaaaaaa ---> ', data);


    return (

        // <View>
        //     {
        //         data.map((post, index) => (
        //             <View key={index}>
        //                 {post.images.length !== 0 &&
        //                     <Text>{post.images.length}</Text>
        //                 }
        //             </View>
        //         ))
        //     }
        // </View>



        <HomePostsComponent
            widthScreen={WIDTH}
            friends={USERS}
            data={data}
            loading={loading}
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
