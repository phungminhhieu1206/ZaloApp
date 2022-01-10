import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import colors from '../../assets/themes/colors';
import Icon from '../../components/common/Icon';
import CommentComponent from '../../components/specifics/posts/CommentComponent';

const Comment = () => {

    const { params: { post } } = useRoute();
    const { navigate, setOptions, goBack } = useNavigation();

    console.log('post in comment screen :>>>', post);

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
            data={post}
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
