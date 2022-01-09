import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet, Image, ActivityIndicator } from 'react-native'
import CustomInput from "../../common/CustomInput"
import Container from "../../common/Container"
import Icon from '../../common/Icon'
import colors from '../../../assets/themes/colors'
import { DEFAULT_IMAGE_URI } from '../../../constants/general'
import ImagePicker from '../../common/ImagePicker'
import ListImages from '../../../components/common/ListImages';

const CreatePostComponent = ({
    sheetRef,
    openSheet,
    closeSheet,
    onFileSelected,
    localFiles,
    widthScreen,
    described,
    onChangeText,
    loading
}) => {

    // console.log('aaaaaaaaaaaaa: ????', described);
    const [imageActive, setImageActive] = useState(0);
    // console.log('aaaaaaaaaaaaaaa: >>>>', localFiles);

    let listLocalImages = [];
    localFiles.map((item) => {
        listLocalImages.push(item.path);
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
        <Container>
            {loading ?
                <View style={{ padding: 100 }}>
                    <ActivityIndicator color={colors.theme} size="large" />
                </View>
                :
                <View>
                    <CustomInput
                        label="Described"
                        placeholder="Write your thoughts ..."
                        styleBoxInput={{
                            height: 150
                        }}
                        multiline={true}
                        onChangeText={(value) => onChangeText(value)}
                    />
                    <TouchableOpacity
                        style={styles.touchButton}
                        onPress={openSheet}
                    >
                        <Icon
                            type="FontAwesome"
                            name="photo"
                            size={24}
                            color="#2CB427"
                            style={{
                                paddingRight: 10
                            }}
                        />
                        <Text style={{
                            color: colors.text,
                            fontSize: 14,
                        }}>Choose Photo</Text>
                    </TouchableOpacity>
                    {localFiles.length !== 0 ?
                        <View style={{ marginTop: 15 }}>
                            <View style={styles.imageNotify}>
                                <Text>{'You choosed ' + localFiles.length + ' images'}</Text>
                            </View>
                            <ListImages
                                data={listLocalImages}
                                imageActive={imageActive}
                                onChange={onChange}
                                width={widthScreen}
                                height={250}
                            />
                        </View> :
                        <Image
                            source={require('../../../assets/images/image_empty.jpg')}
                            style={styles.imageView}
                        />
                    }
                    <ImagePicker onFileSelected={onFileSelected} ref={sheetRef} />
                </View>
            }
        </Container>
    )
}

const styles = StyleSheet.create({
    imageView: {
        width: '100%',
        height: 250,
        marginTop: 15
    },
    imageNotify: {
        color: colors.text,
        marginBottom: 5,
        fontSize: 16
    },
    touchButton: {
        flexDirection: 'row',
        paddingVertical: 8,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100,
        backgroundColor: colors.grey
    }
})

export default CreatePostComponent
