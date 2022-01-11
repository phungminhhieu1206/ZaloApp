import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import colors from '../../../../assets/themes/colors';
import Icon from '../../../common/Icon';
import { DEFAULT_IMAGE_URI } from '../../../../constants/general'

const CommentItem = ({
    user,
    comment,
    createDate
}) => {
    const [liked, setLiked] = useState(false);

    const onPressWhiteLike = () => {
        setLiked(true);
    }

    const onPressRedLike = () => {
        setLiked(false);
    }

    return (
        <View style={styles.wrapper}>
            <TouchableOpacity onPress={() => console.warn("click channel of commenter")}>
                <Image
                    source={{ uri: DEFAULT_IMAGE_URI }}
                    style={styles.imageAvt}
                />
            </TouchableOpacity>
            <View style={{ flex: 1 }}>
                <Text
                    numberOfLines={1}
                    style={styles.username}>{user}</Text>
                <Text style={styles.comment}>{comment}</Text>
                <View style={styles.subDetail}>
                    <Text
                        numberOfLines={1}
                        style={styles.date}>{createDate}</Text>
                    <TouchableOpacity>
                        <Text style={styles.reply}>Reply</Text>
                    </TouchableOpacity>
                </View>
            </View>
            {liked ?
                <TouchableOpacity onPress={onPressRedLike}>
                    <Icon
                        type="AntDesign"
                        name="heart"
                        size={20}
                        color="red"
                        style={styles.iconHeart}
                    />
                </TouchableOpacity>
                :
                <TouchableOpacity onPress={onPressWhiteLike}>
                    <Icon
                        type="AntDesign"
                        name="hearto"
                        size={20}
                        color="black"
                        style={styles.iconHeart}
                    />
                </TouchableOpacity>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        backgroundColor: colors.white,
        borderBottomColor: colors.background,
        borderBottomWidth: 1
    },
    imageAvt: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 15
    },
    username: {
        fontWeight: 'bold',
        fontSize: 15,
        color: colors.text
    },
    comment: {
        paddingTop: 3,
        fontSize: 14
    },
    subDetail: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 5
    },
    date: {
        fontSize: 13,
        color: colors.grey,
        width: 80,
        marginRight: 20
    },
    reply: {
        color: colors.text,
        fontWeight: 'bold',
        fontSize: 13
    },
    iconHeart: {
        marginRight: 5,
        marginLeft: 10
    }

});

export default CommentItem;
