import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import RBSheet from 'react-native-raw-bottom-sheet';
import Icon from '../common/Icon';
import colors from '../../assets/themes/colors';
import ImagePickerCropper from 'react-native-image-crop-picker';

const ImagePicker = React.forwardRef(({ onFileSelected }, ref) => {
    const options = [
        {
            name: 'Take from camera',
            icon: <Icon color={colors.grey} size={21} name="camera" />,
            onPress: () => {
                // Đây mới là lúc dùng image picker cropper
                ImagePickerCropper.openCamera({
                    multiple: true,
                    waitAnimationEnd: false,
                    includeExif: true,
                    forceJpg: true, 
                    compressImageQuality: 0.8,
                    maxFiles: 10,
                    mediaType: 'any',
                    includeBase64: true
                })
                    .then((images) => {
                        // console.log('image by camera: >>>', images);
                        onFileSelected(images);
                    })
                    .catch((error) => {
                        // console.log('error image picker camera --->', error);
                    });
            },
        },
        {
            name: 'Choose from Gallery',
            icon: <Icon name="image" color={colors.grey} size={21} />,
            onPress: () => {
                // Đây mới là lúc dùng image picker cropper
                ImagePickerCropper.openPicker({
                    multiple: true,
                    waitAnimationEnd: false,
                    includeExif: true,
                    forceJpg: true, 
                    compressImageQuality: 0.8,
                    maxFiles: 4,
                    mediaType: 'any',
                    includeBase64: true
                })
                    .then((images) => { // image được chọn trong library
                        // console.log('image by choose image: >>>', images);
                        onFileSelected(images);
                    })
                    .catch((error) => {
                        console.log("error image picker cropper ---> ", error);
                    });
            },
        },
    ];

    return (
        <RBSheet
            ref={ref} // Quan Trọng
            height={190}
            openDuration={250}
            dragFromTopOnly
            closeOnDragDown
            customStyles={{
                container: {
                    borderTopRightRadius: 20,
                    borderTopLeftRadius: 20,
                },
            }}>
            <View style={styles.optionsWrapper}>
                {options.map(({ name, onPress, icon }) => (
                    <TouchableOpacity
                        onPress={onPress}
                        style={styles.pickerOption}
                        key={name}
                    >
                        {icon}
                        <Text style={styles.text}>{name}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </RBSheet>
    )
});

const styles = StyleSheet.create({
    pickerOption: {
        flexDirection: 'row',
        paddingTop: 20,
        alignItems: 'center',
    },
    optionsWrapper: {
        paddingHorizontal: 20,
    },
    text: {
        fontSize: 17,
        paddingLeft: 17,
    },
})

export default ImagePicker;
