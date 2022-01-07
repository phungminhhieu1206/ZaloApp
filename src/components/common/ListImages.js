import React from 'react'
import {
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    Dimensions,
    ScrollView,
    Image
} from 'react-native'

const ListImages = ({
    data,
    imageActive,
    onChange,
    width,
    height
}) => {
    console.log('data lenght" >>', data.length);
    const styleSize = {
        width: width,
        height: height
    }
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styleSize}>
                <ScrollView
                    onScroll={({ nativeEvent }) => onChange(nativeEvent)}
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                    horizontal
                    style={styleSize}
                >
                    {
                        data.map((image, index) => (
                            <Image
                                key={index}
                                resizeMode='stretch'
                                style={styleSize}
                                source={{ uri: image }}
                            />
                        ))
                    }
                </ScrollView>
                {data?.length > 1 && (
                    <View style={styles.wrapDot}>
                        {
                            data.map((image, index) => (
                                <Text
                                    key={index}
                                    style={imageActive == index ? styles.dotActive : styles.dot}
                                >
                                    ●
                                </Text>
                            ))
                        }
                    </View>
                )}

            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    wrapper: {
        width: '100%',
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

export default ListImages
