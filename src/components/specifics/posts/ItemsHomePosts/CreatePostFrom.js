import { useNavigation } from '@react-navigation/native';
import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native'
import Icon from '../../../common/Icon';
import { CREATE_POST, MY_CHANNEL } from '../../../../constants/routeNames';

const CreatePostFrom = () => {

    const { navigate } = useNavigation();

    return (
        <View style={{
            borderTopColor: '#f8f8f8',
            borderTopWidth: 7,
            backgroundColor: 'white'
        }}>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingLeft: 12,
                paddingVertical: 15
            }}>
                <TouchableOpacity onPress={() => navigate(MY_CHANNEL)}>
                    <Image
                        source={{ uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.jpg' }}
                        style={{
                            width: 40,
                            height: 40,
                            borderRadius: 20,
                        }}

                    />
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        flex: 1
                    }}
                    onPress={() => {
                        navigate(CREATE_POST);
                    }}
                >
                    <Text style={{
                        height: 40,
                        textAlignVertical: 'center',
                        paddingLeft: 20,
                        color: 'grey'
                    }}>How are you today ?</Text>
                </TouchableOpacity>
            </View>
            <View style={{
                flexDirection: 'row',
                borderTopColor: '#C7C7C7',
                borderTopWidth: 0.5,
            }}>
                <TouchableOpacity
                    style={{
                        flex: 1,
                        flexDirection: 'row',
                        borderRightColor: '#C7C7C7',
                        borderRightWidth: 1,
                        justifyContent: 'center',
                        paddingVertical: 8,
                        alignItems: 'center'
                    }}
                    onPress={() => {
                        navigate(CREATE_POST);
                    }}
                >
                    <Icon
                        type="FontAwesome"
                        name="photo"
                        size={20}
                        color="#2CB427"
                        style={{
                            paddingRight: 8
                        }}
                    />
                    <Text style={{
                        color: 'black',
                        fontSize: 11,
                        fontWeight: 'bold'
                    }}>Photo</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'center',
                        paddingVertical: 8,
                        alignItems: 'center'
                    }}
                >
                    <Icon
                        type="FontAwesome"
                        name="video-camera"
                        size={20}
                        color="#FB4D4D"
                        style={{
                            paddingRight: 8
                        }}
                    />
                    <Text style={{
                        color: 'black',
                        fontSize: 11,
                        fontWeight: 'bold'
                    }}>Video</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        flex: 1,
                        flexDirection: 'row',
                        borderLeftColor: '#C7C7C7',
                        borderLeftWidth: 1,
                        justifyContent: 'center',
                        paddingVertical: 8,
                        alignItems: 'center'
                    }}
                >
                    <Icon
                        type="Ionicons"
                        name="images"
                        size={20}
                        color="#3F9EFD"
                        style={{
                            paddingRight: 8
                        }}
                    />
                    <Text style={{
                        color: 'black',
                        fontSize: 11,
                        fontWeight: 'bold'
                    }}>Create album</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}
const styles = StyleSheet.create({
})

export default CreatePostFrom;
