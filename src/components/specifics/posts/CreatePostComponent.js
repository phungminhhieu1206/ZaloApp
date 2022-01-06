import React from 'react'
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet, Image } from 'react-native'
import CustomInput from "../../common/CustomInput"
import Container from "../../common/Container"
import Icon from '../../common/Icon'
import colors from '../../../assets/themes/colors'
import { DEFAULT_IMAGE_URI } from '../../../constants/general'
import ImagePicker from '../../common/ImagePicker'

const CreatePostComponent = ({
    sheetRef,
    openSheet,
    closeSheet,
    onFileSelected,
    localFile
}) => {
    return (
        <Container>
            <CustomInput
                label="Described"
                placeholder="Write your thoughts ..."
                styleBoxInput={{
                    height: 200
                }}
                multiline={true}
            />
            <TouchableOpacity
                style={{
                    flexDirection: 'row',
                    paddingVertical: 8,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 100,
                    backgroundColor: colors.grey
                }}
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
                }}>Upload Photo</Text>
            </TouchableOpacity>
            {localFile ?
                <Image
                    source={{ uri: localFile?.path }}
                    style={styles.imageView}
                /> :
                <Image
                    source={require('../../../assets/images/image_empty.jpg')}
                    style={styles.imageView}
                />
            }
            <ImagePicker onFileSelected={onFileSelected} ref={sheetRef} />
        </Container>
    )
}

const styles = StyleSheet.create({
    imageView: {
        width: '100%',
        height: 250,
        marginTop: 15
    },
})

export default CreatePostComponent
