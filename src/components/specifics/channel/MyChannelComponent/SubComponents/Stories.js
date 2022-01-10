import React from 'react'
import {
    View,
    Text,
    ScrollView,
    Image,
    StyleSheet,
    TouchableOpacity
} from 'react-native'

const Stories = ({ friends }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Story</Text>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
            >
                {friends.map((story, index) => (
                    <TouchableOpacity key={index} style={styles.touch}>
                        < Image
                            source={{ uri: story.image }}
                            style={styles.story}
                        />
                        <Text style={styles.username}>{
                            story.user.length > 10 ? story.user.slice(0, 9).toLowerCase() + '...' : story.user.toLowerCase()
                        }</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
        paddingHorizontal: 10,
        marginBottom: 13
    },
    story: {
        width: 70,
        height: 70,
        borderRadius: 50,
        marginLeft: 6,
        borderWidth: 3,
        borderColor: '#ff8501'
    },
    touch: {
        alignItems: 'center'
    },
    title: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 14,
        marginBottom: 10
    },
    username: {
        color: 'black'
    },
})

export default Stories
