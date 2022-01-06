import React, { useContext } from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Alert
} from 'react-native'
import Icon from "../../common/Icon"
import { GlobalContext } from "../../../context/Provider"
import logout from "../../../context/actions/auth/logout"
import colors from '../../../assets/themes/colors'

const SettingsComponent = () => {

    const { authDispatch } = useContext(GlobalContext);

    const handleLogout = () => {
        Alert.alert('Logout !', 'Are you sure you want to logout ?', [
            {
                text: 'Cancel',
                onPress: () => { },
            },
            {
                text: 'OK',
                onPress: () => {
                    logout()(authDispatch);
                    console.log('LOGOUT SUCCESSFUL !');
                },
            },
        ]);
    }

    return (
        <View >
            <View style={{
                backgroundColor: colors.white,
            }}>
                <TouchableOpacity style={styles.touch}>
                    <Icon
                        type="EvilIcons"
                        name="lock"
                        size={33}
                        color="#3C80F5"
                        style={{ marginHorizontal: 10 }}
                    />
                    <Text style={styles.text}>Privacy</Text>
                    <Icon
                        type="MaterialIcons"
                        name="navigate-next"
                        size={28}
                        color="black"
                        style={{ marginRight: 10 }}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.touch}>
                    <Icon
                        type="MaterialIcons"
                        name="security"
                        size={24}
                        color="#30C860"
                        style={{ marginLeft: 16, marginRight: 14 }}
                    />
                    <Text style={styles.text}>Account and security</Text>
                    <Icon
                        type="MaterialIcons"
                        name="navigate-next"
                        size={28}
                        color="black"
                        style={{ marginRight: 10 }}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.touch}>
                    <Icon
                        type="Fontisto"
                        name="cloud-refresh"
                        size={20}
                        color="#362DBB"
                        style={{ marginLeft: 17, marginRight: 15 }}
                    />
                    <Text style={styles.text}>Backup and restore</Text>
                    <Icon
                        type="MaterialIcons"
                        name="navigate-next"
                        size={28}
                        color="black"
                        style={{ marginRight: 10 }}
                    />
                </TouchableOpacity>

            </View>

            <View style={{
                marginTop: 10,
                backgroundColor: colors.white,
            }}>
                <TouchableOpacity style={styles.touch}>
                    <Icon
                        type="Ionicons"
                        name="notifications-outline"
                        size={22}
                        color="#F01414"
                        style={{ marginLeft: 18, marginRight: 15 }}
                    />
                    <Text style={styles.text}>Notifications</Text>
                    <Icon
                        type="MaterialIcons"
                        name="navigate-next"
                        size={28}
                        color="black"
                        style={{ marginRight: 10 }}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.touch}>
                    <Icon
                        type="Ionicons"
                        name="ios-chatbubble-ellipses-outline"
                        size={22}
                        color="#14AAF0"
                        style={{ marginLeft: 19, marginRight: 14 }}
                    />
                    <Text style={styles.text}>Messages</Text>
                    <Icon
                        type="MaterialIcons"
                        name="navigate-next"
                        size={28}
                        color="black"
                        style={{ marginRight: 10 }}
                    />
                </TouchableOpacity>
            </View>


            <View style={{
                marginTop: 10,
                backgroundColor: 'white',
            }}>
                <TouchableOpacity style={styles.touch}>
                    <Icon
                        type="MaterialCommunityIcons"
                        name="account-convert-outline"
                        size={22}
                        color="#F0B914"
                        style={{
                            marginLeft: 19,
                            marginRight: 14
                        }}
                    />
                    <Text style={styles.text}>Switch account</Text>
                    <Icon
                        type="MaterialIcons"
                        name="navigate-next"
                        size={28}
                        color="black"
                        style={{
                            marginRight: 10
                        }}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.touch}
                    onPress={handleLogout}
                >
                    <Icon
                        type="MaterialCommunityIcons"
                        name="logout"
                        size={24}
                        color="black"
                        style={{
                            marginLeft: 21,
                            marginRight: 11
                        }}
                    />
                    <Text style={styles.text}>Log out</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    touch: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    text: {
        fontSize: 18,
        color: 'black',
        flex: 1,
        paddingVertical: 9,
        borderBottomWidth: 0.5,
        borderBottomColor: 'lightgrey'
    }
})

export default SettingsComponent
