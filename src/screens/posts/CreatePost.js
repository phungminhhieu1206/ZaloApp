import { useNavigation } from '@react-navigation/native';
import React, { useContext, useEffect, useRef, useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'
import colors from '../../assets/themes/colors';
import Icon from '../../components/common/Icon';
import CreatePostComponent from '../../components/specifics/posts/CreatePostComponent';
import { HOME_POSTS } from '../../constants/routeNames';
import createNewPost from '../../context/actions/posts/createNewPost';
import { GlobalContext } from "../../context/Provider";


const WIDTH = Dimensions.get('window').width - 40;

const CreatePost = () => {
    const { navigate, setOptions, goBack } = useNavigation();

    const {
        postsDispatch,
        postsState: {
            createNewPost: { loading, error }
        },
    } = useContext(GlobalContext);

    const sheetRef = useRef(null);

    // save image local
    const [described, setDescribed] = useState('');
    const [localFiles, setLocalFiles] = useState([]);
    const [uploading, setIsUploading] = useState(false);

    // console.log('aaaaaaaaaa :>>>>', described);

    const onChangeText = (value) => {
        setDescribed(value);
    };

    const closeSheet = () => {
        if (sheetRef.current) {
            sheetRef.current.close();
        }
    };

    const openSheet = () => {
        if (sheetRef.current) {
            sheetRef.current.open();
        }
    };

    const onFileSelected = (images) => {
        closeSheet();
        setLocalFiles(images);
    };

    const onCreatePost = () => {
        // console.log('described :>>>', described);

        let listImagesUpload = [];
        localFiles.map((item) => {
            listImagesUpload.push("data:" + item.mime + ";base64," + item.data);
        })

        // console.log("listImagesUpload: >>>>", listImagesUpload);

        createNewPost({described, listImagesUpload})(postsDispatch)(() => {
            navigate(HOME_POSTS);
        });

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
                        <TouchableOpacity
                            onPress={onCreatePost}
                        >
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
    }, [described]);



    return (
        <CreatePostComponent
            sheetRef={sheetRef}
            openSheet={openSheet}
            closeSheet={closeSheet}
            onFileSelected={onFileSelected}
            localFiles={localFiles}
            widthScreen={WIDTH}
            described={described}
            onChangeText={onChangeText}
        />
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
