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

const OptionPost = React.forwardRef(({ closeSheet, currentPost, user }, ref) => {
    // console.log('userrrrrrrrrrrrrrr :>>>', user);

    const IDAuthorPost = currentPost.author?._id;

    // console.log('currentPost:    ', IDAuthorPost);

    const optionIfMyPost = [
        {
            name: 'Edit Post',
            icon: <Icon type="AntDesign" color={colors.grey} size={21} name="edit" />,
            onPress: () => {

                //code here
                console.log('click edit post id: ', currentPost._id);

                // close sheet
                closeSheet();
            },
        },
        {
            name: 'Delete this post',
            icon: <Icon type="AntDesign" name="delete" color={colors.grey} size={21} />,
            onPress: () => {

                //code here
                console.log('click delete post id: ', currentPost._id);

                // close sheet
                closeSheet();

            },
        },
    ];

    const optionIfNotMyPost = [
        {
            name: 'Edit Post',
            icon: <Icon type="AntDesign" color={colors.grey} size={21} name="edit" />,
            onPress: () => {

                //code here
                console.log('click edit post id: ', currentPost._id);

                // close sheet
                closeSheet();
            },
        },
        {
            name: 'Delete this post',
            icon: <Icon type="AntDesign" name="delete" color={colors.grey} size={21} />,
            onPress: () => {

                //code here
                console.log('click delete post id: ', currentPost._id);

                // close sheet
                closeSheet();

            },
        },
        {
            name: 'Report',
            icon: <Icon type="AntDesign" name="warning" color={colors.grey} size={21} />,
            onPress: () => {

                //code here
                console.log('click report post id: ', currentPost._id);

                // close sheet
                closeSheet();
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
                {IDAuthorPost === user.id ?
                    optionIfMyPost.map(({ name, onPress, icon }) => (
                        <TouchableOpacity
                            onPress={onPress}
                            style={styles.pickerOption}
                            key={name}
                        >
                            {icon}
                            <Text style={styles.text}>{name}</Text>
                        </TouchableOpacity>
                    ))
                    :
                    optionIfNotMyPost.map(({ name, onPress, icon }) => (
                        <TouchableOpacity
                            onPress={onPress}
                            style={styles.pickerOption}
                            key={name}
                        >
                            {icon}
                            <Text style={styles.text}>{name}</Text>
                        </TouchableOpacity>
                    ))
                }
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

export default OptionPost;
