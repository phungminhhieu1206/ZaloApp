import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    SafeAreaView
} from 'react-native';
import Icon from '../../../../common/Icon';
import ListImages from '../../../../common/ListImages';
import { url_images } from "../../../../../constants/general";
import { DEFAULT_IMAGE_URI } from '../../../../../constants/general'

const PostItem = ({ post, widthScreen }) => {
    // console.log('data ---------', post.images);

    return (
        <View style={styles.container}>
            <PostHeader post={post} />
            {post.described ? <Caption post={post} /> : null}
            {post.images.length !== 0 ? <PostImage post={post.images} width={widthScreen} /> : null}
            <PostFooter post={post} />
        </View>
    )
}

const PostHeader = ({ post }) => (
    <View
        style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 10
        }}
    >
        <View style={{
            flexDirection: 'row',
            alignItems: 'center'
        }}>
            <Image
                source={{ uri: DEFAULT_IMAGE_URI }}
                style={styles.profile_picture}
            />
            <View style={{
                marginLeft: 12,
            }}>
                <Text
                    numberOfLines={1}
                    style={{
                        color: 'black',
                        fontWeight: 'bold',
                        fontSize: 16
                    }}
                >
                    {post.author.username}
                </Text>
                <Text
                    numberOfLines={1}
                    style={{
                        color: 'grey',
                        fontSize: 12
                    }}
                >{post.createdAt}</Text>
            </View>

        </View>

        <TouchableOpacity>
            <Icon
                type="Feather"
                name="more-horizontal"
                size={24}
                color="black"
            />
        </TouchableOpacity>
    </View>
)

const PostImage = ({ post, width }) => {

    // console.log("image array : >>>>>>", post);

    const [imageActive, setImageActive] = useState(0);

    let arrayImages = [];
    post.map((item) => {
        arrayImages.push(url_images + item.fileName);
    })

    const onChange = (nativeEvent) => {
        if (nativeEvent) {
            const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
            if (slide != imageActive) {
                setImageActive(slide);
            }
        }
    }

    return (
        <ListImages
            data={arrayImages}
            imageActive={imageActive}
            onChange={onChange}
            width={width}
            height={width}
        />
    )
}



const PostFooter = ({ post }) => {
    const { navigate } = useNavigation();

    const [liked, setLiked] = useState(post.isLike);
    const [countCMT, setCountCMT] = useState(post.countComments);

    const onPressWhiteLike = () => {
        setLiked(true);
        post.likes += 1;
    }

    const onPressRedLike = () => {
        setLiked(false);
        post.likes -= 1;
    }

    const onPressComment = () => {
        // navigation.navigate("Comment", { post: post })
    }

    return (
        <View>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 20,
                paddingVertical: 10,
                borderBottomWidth: 1,
                borderColor: '#F2F2F2'
            }}>
                {liked ?
                    <TouchableOpacity onPress={onPressRedLike}>
                        <Icon
                            type="AntDesign"
                            name="heart"
                            size={30}
                            color="red"
                        />
                    </TouchableOpacity>
                    :
                    <TouchableOpacity onPress={onPressWhiteLike}>
                        <Icon
                            type="AntDesign"
                            name="hearto"
                            size={30}
                            color="black"
                        />
                    </TouchableOpacity>
                }
                <Text
                    numberOfLines={1}
                    style={{
                        fontSize: 18,
                        marginLeft: 8,
                        width: 60,
                    }}>{post.like.length}</Text>
                <TouchableOpacity onPress={onPressComment}>
                    <Icon
                        type="MaterialCommunityIcons"
                        name="comment-processing-outline"
                        size={33}
                        color="black"
                    />
                </TouchableOpacity>
                <Text
                    numberOfLines={1}
                    style={{
                        fontSize: 18,
                        marginLeft: 8,
                        width: 60,
                    }}>{countCMT}</Text>
            </View>
            <TouchableOpacity
                onPress={onPressComment}
                style={{
                    flexDirection: 'row',
                    paddingHorizontal: 20,
                    paddingVertical: 10,
                    alignItems: 'center'
                }}
            >
                <Image
                    source={{ uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.jpg' }}
                    style={{
                        width: 30,
                        height: 30,
                        borderRadius: 15,
                        marginRight: 10
                    }}
                />
                <View style={{
                    backgroundColor: '#f8f8f8',
                    flex: 1,
                    borderRadius: 25,
                    alignItems: 'center',
                    flexDirection: 'row',
                    padding: 5
                }}>
                    <Icon
                        type="SimpleLineIcons"
                        name="emotsmile"
                        size={24}
                        style={{
                            marginHorizontal: 5,
                            color: '#595959'
                        }}
                    />
                    <Text
                        style={{
                            flex: 1,
                            marginHorizontal: 5,
                            color: 'lightgrey'
                        }}
                    >Write a comment</Text>
                    <Icon
                        type="Feather"
                        name="camera"
                        size={24}
                        style={{
                            marginHorizontal: 5,
                            color: '#595959'
                        }}
                    />

                </View>
            </TouchableOpacity>
        </View>
    )
}

const Caption = ({ post }) => (
    <View style={{}}>
        <Text style={{
            color: 'blue',
            fontSize: 18,
            paddingHorizontal: 10,
            paddingBottom: 10,
            fontWeight: '400',
            fontStyle: 'italic'
        }}>{post.described}</Text>
    </View>
)

const CommentSection = ({ post }) => (
    <View style={{ marginTop: 5 }}>
        {post.comments.length ? (
            <Text style={{ color: 'gray' }}>
                View{post.comments.length > 1 ? ' all' : ''} {post.comments.length}{' '}
                {post.comments.length > 1 ? 'comments' : 'comment'}
            </Text>
        ) : null}
    </View>
)

const styles = StyleSheet.create({
    container: {
        borderTopColor: '#f8f8f8',
        borderTopWidth: 7,
        backgroundColor: 'white'
    },
    profile_picture: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    wrapper: {
        width: 450,
        height: 450
    },
    wrapDot: {
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        alignSelf: 'center'
    },
    dotActive: {
        margin: 3,
        color: 'black'
    },
    dot: {
        margin: 3,
        color: 'blue'
    }
})

export default PostItem;
