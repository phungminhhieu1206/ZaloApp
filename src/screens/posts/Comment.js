import { useFocusEffect, useNavigation, useRoute } from '@react-navigation/native';
import React, { useCallback, useContext, useEffect, useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import colors from '../../assets/themes/colors';
import Icon from '../../components/common/Icon';
import CommentComponent from '../../components/specifics/posts/CommentComponent';
import getListComments, { clearListCommentsState } from '../../context/actions/posts/getListComments';
import createComment from '../../context/actions/posts/createComment';
import { GlobalContext } from '../../context/Provider';

const Comment = () => {

    const { params: { post } } = useRoute();
    const { navigate, setOptions, goBack } = useNavigation();
    const [refreshList, setRefreshList] = useState(false);
    const [contentComment, setContentComment] = useState('');

    // console.log('post in comment screen :>>>', post._id);
    // console.log('contentComment :>>>', contentComment);


    const {
        postsDispatch,
        postsState: {
            getListComments: { data, loading },
            createComment: { dataCreate }
        }
    } = useContext(GlobalContext);

    // console.log('state data :>>>', data);

    const onChangeText = (value) => {
        setContentComment(value);
    };

    const onRefresh = () => {
        setRefreshList(true);
        getListComments(post._id)(postsDispatch);
        setRefreshList(false)
    }

    const onCreateComment = () => {
        const postId = post._id;
        // console.log('comment content :>>>>', contentComment, postId);

        createComment({ postId, contentComment })(postsDispatch)(() => {
            onRefresh();
        });
        setContentComment('');
    }


    useEffect(() => {
        getListComments(post._id)(postsDispatch);
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
                        <TouchableOpacity onPress={() => {
                            goBack();
                        }}>
                            <Icon
                                type="Ionicons"
                                name="chevron-back"
                                size={30}
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
                            >Comment</Text>
                        </TouchableOpacity>
                    </View>
                )
            },
        });
    }, []);

    // useFocusEffect(
    //     useCallback(() => {
    //         return () => {
    //             if (data) {
    //                 clearListCommentsState()(postsDispatch);
    //             }
    //         }
    //     }, []),
    // );

    return (
        <CommentComponent
            data={data}
            refreshList={refreshList}
            onRefresh={onRefresh}
            content={contentComment}
            onChangeText={onChangeText}
            onCreateComment={onCreateComment}
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

export default Comment
