import React, { useState } from 'react'
import {
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    Dimensions,
    ScrollView,
    Image
} from 'react-native'
import ListImages from '../../common/ListImages';

const images = [
    'https://i.pinimg.com/736x/49/6d/e1/496de1373207afca43de414a4b48e9fb.jpg',
    'https://genk.mediacdn.vn/thumb_w/690/2019/12/12/11-1575883882-width650height762-1576168363318789958220.jpg',
    'https://thuthuatnhanh.com/wp-content/uploads/2019/05/gai-xinh-toc-ngan-facebook.jpg',
    'https://hosonhanvat.net/wp-content/uploads/2021/07/Pasted-into-Hot-girl-Tiktok-noi-tieng-Le-Thi-Khanh-Huyen-la-ai.png'
]

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const ChatRoomsComponent = () => {

    const [imageActive, setImageActive] = useState(0);

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
            data={images}
            imageActive={imageActive}
            onChange={onChange}
            width={WIDTH}
            height={450}
        />
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    wrapper: {
        width: WIDTH,
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
        color: 'white'
    }
})
export default ChatRoomsComponent
