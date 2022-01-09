import { useNavigation } from '@react-navigation/native';
import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native'
import Icon from '../../../../common/Icon';
import { CREATE_POST, MY_CHANNEL } from '../../../../../constants/routeNames';
import { DEFAULT_IMAGE_URI } from '../../../../../constants/general'

const FormCrePost = () => {
    const { navigate } = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.wrapper_text}>
                <TouchableOpacity onPress={() => navigate(MY_CHANNEL)}>
                    <Image
                        source={{ uri: DEFAULT_IMAGE_URI }}
                        style={styles.avtImage}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    style={{ flex: 1 }}
                    onPress={() => { navigate(CREATE_POST) }}
                >
                    <Text style={styles.textFell}>How are you today ?</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.wrapper_button}>

                {/* Button Photo */}
                <TouchableOpacity
                    style={[
                        styles.touchButton,
                        { borderRightColor: '#C7C7C7', borderRightWidth: 1, }
                    ]}
                    onPress={() => {
                        navigate(CREATE_POST);
                    }}
                >
                    <Icon
                        type="FontAwesome"
                        name="photo"
                        size={20}
                        color="#2CB427"
                        style={styles.iconButton}
                    />
                    <Text style={styles.textButton}>Photo</Text>
                </TouchableOpacity>

                {/* Button Video */}
                <TouchableOpacity style={styles.touchButton} >
                    <Icon
                        type="FontAwesome"
                        name="video-camera"
                        size={20}
                        color="#FB4D4D"
                        style={styles.iconButton}
                    />
                    <Text style={styles.textButton}>Video</Text>
                </TouchableOpacity>

                {/* Button Create album */}
                <TouchableOpacity
                    style={[
                        styles.touchButton,
                        { borderLeftColor: '#C7C7C7', borderLeftWidth: 1 }
                    ]}
                >
                    <Icon
                        type="Ionicons"
                        name="images"
                        size={20}
                        color="#3F9EFD"
                        style={styles.iconButton}
                    />
                    <Text style={styles.textButton}>Create album</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        borderTopColor: '#f8f8f8',
        borderTopWidth: 7,
        backgroundColor: 'white'
    },
    wrapper_text: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 12,
        paddingVertical: 15
    },
    avtImage: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    textFell: {
        height: 40,
        textAlignVertical: 'center',
        paddingLeft: 20,
        color: 'grey'
    },
    wrapper_button: {
        flexDirection: 'row',
        borderTopColor: '#C7C7C7',
        borderTopWidth: 0.5,
    },
    touchButton: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        paddingVertical: 8,
        alignItems: 'center',
    },
    textButton: {
        color: 'black',
        fontSize: 11,
        fontWeight: 'bold'
    },
    iconButton: {
        paddingRight: 8
    }

})

export default FormCrePost;
