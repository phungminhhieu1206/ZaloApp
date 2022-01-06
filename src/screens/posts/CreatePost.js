import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import colors from '../../assets/themes/colors';
import Icon from '../../components/common/Icon';
import CreatePostComponent from '../../components/specifics/posts/CreatePostComponent';

const CreatePost = () => {
    const { navigate, setOptions, goBack } = useNavigation();

    useEffect(() => {
        setOptions({
            // title: item.first_name + ' ' + item.last_name,
            headerStyle: {
                backgroundColor: colors.grey
            },
            headerLeft: () => {
                return (
                    <View style={styles.headerLeft}>
                        <TouchableOpacity onPress={() => { goBack() }}>
                            <Icon
                                type="EvilIcons"
                                name="close"
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
                        <TouchableOpacity>
                            <Text
                                style={styles.title}
                            >Create new post</Text>
                        </TouchableOpacity>
                    </View>
                )
            },
            headerRight: () => {
                return (
                    <View style={styles.headerRight}>
                        <TouchableOpacity onPress={() => console.warn('sent')}>
                            <Icon
                                type="FontAwesome"
                                name="send"
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
        <CreatePostComponent />
    )
}

const styles = StyleSheet.create({
    headerLeft: {
        flexDirection: 'row',
        paddingLeft: 8
    },
    headerTitle: {
        width: '230%',
    },
    headerRight: {
        flexDirection: 'row',
        paddingRight: 20,
    },
    title: {
        height: '100%',
        color: colors.white,
        textAlignVertical: 'center',
        fontSize: 16,
    }
})

export default CreatePost
