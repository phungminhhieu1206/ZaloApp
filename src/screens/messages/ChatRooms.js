import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import colors from '../../assets/themes/colors'
import Icon from '../../components/common/Icon';

const ChatRooms = () => {

    const { navigate, setOptions } = useNavigation();

    useEffect(() => {
        setOptions({
            // title: item.first_name + ' ' + item.last_name,
            headerStyle: {
                backgroundColor: colors.theme
            },
            headerLeft: () => {
                return (
                    <View style={styles.headerLeft}>
                        <TouchableOpacity>
                            <Icon
                                type="EvilIcons"
                                name="search"
                                size={34}
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
                            >Search friends, messages...</Text>
                        </TouchableOpacity>
                    </View>
                )
            },
            headerRight: () => {
                return (
                    <View style={styles.headerRight}>
                        <TouchableOpacity onPress={() => console.warn('clicked qrcode of chat room')}>
                            <Icon
                                type="MaterialCommunityIcons"
                                name="qrcode-scan"
                                size={22}
                                color={colors.white}
                                style={{
                                    marginRight: 20
                                }}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => console.warn('add new message')}>
                            <Icon
                                type="AntDesign"
                                name="plus"
                                size={25}
                                color={colors.white}
                                style={{
                                }}
                            />
                        </TouchableOpacity>
                    </View>
                )
            }
        });
    }, []);

    return (
        <View>
            <Text>SCREEN CHAT ROOM !</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    headerLeft: {
        flexDirection: 'row',
        paddingLeft: 8,
    },
    headerTitle: {
        width: '120%',
    },
    headerRight: {
        flexDirection: 'row',
        paddingRight: 14,
    },
    title: {
        height: '100%',
        color: colors.white,
        textAlignVertical: 'center',
        fontSize: 16,
    }
})

export default ChatRooms
