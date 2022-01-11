import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useContext, useEffect, useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import colors from '../../assets/themes/colors';
import Icon from '../../components/common/Icon';
import CommentComponent from '../../components/specifics/posts/CommentComponent';
import getListComments from '../../context/actions/posts/getListComments';
import { GlobalContext } from '../../context/Provider';

const Comment = () => {

    const { params: { post } } = useRoute();
    const { navigate, setOptions, goBack } = useNavigation();
    const [refreshList, setRefreshList] = useState(false);

    // console.log('post in comment screen :>>>', post._id);
    

    const {
        postsDispatch,
        postsState: {
            getListComments: { data, loading }
        }
    } = useContext(GlobalContext);

    // console.log('state data :>>>', data);

    const onRefresh = () => {
        setRefreshList(true);
        getListComments(post._id)(postsDispatch);
        setRefreshList(false)
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

    return (
        <CommentComponent 
            data={data}
            refreshList={refreshList}
            onRefresh={onRefresh}
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
