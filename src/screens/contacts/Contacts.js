import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import colors from '../../assets/themes/colors';
import Icon from '../../components/common/Icon';
import ContactsComponent from "../../components/specifics/contacts/ContactsComponent"

const Contacts = () => {

    const data = [
        {
            "gender": "secret",
            "blocked_inbox": [],
            "blocked_diary": [],
            "_id": "617e3463fe0ef04664383a6f",
            "phonenumber": "0989898999",
            "password": "$2b$10$wEoFMdphtWGBlV2U5xY0DeZigg/VoKsN/Loh./3mcUbZ82v/390Su",
            "username": "anhvu2",
            "avatar": null,
            "cover_image": null,
            "createdAt": "2021-10-31T06:14:59.857Z",
            "updatedAt": "2021-12-05T10:33:20.126Z",
            "__v": 0
        },
        {
            "gender": "secret",
            "blocked_inbox": [],
            "blocked_diary": [],
            "_id": "61d117103e9f6a59d852162a",
            "phonenumber": "0981932985",
            "password": "$2b$10$Mbh0a9VkeRS/b.jn0yg/6.Sf3WRSRTPbvCGtfFresXgLX33z63CXm",
            "username": "admin12345",
            "avatar": null,
            "cover_image": null,
            "createdAt": "2022-01-02T03:08:00.035Z",
            "updatedAt": "2022-01-02T03:08:00.035Z",
            "__v": 0
        },
        {
            "gender": "secret",
            "blocked_inbox": [],
            "blocked_diary": [],
            "_id": "61d5b44ba374cb31785eb8b9",
            "phonenumber": "0989998888",
            "password": "$2b$10$mvb4IDUZrsqgWfiE5abWS.VBD0m0.Yi1ZB5laxrXKX54L5nQu0gxW",
            "username": "thangtrinh",
            "avatar": null,
            "cover_image": null,
            "createdAt": "2022-01-05T15:07:55.775Z",
            "updatedAt": "2022-01-05T15:07:55.775Z",
            "__v": 0
        },
        {
            "gender": "secret",
            "blocked_inbox": [],
            "blocked_diary": [],
            "_id": "61d5b474a374cb31785eb8be",
            "phonenumber": "0989997777",
            "password": "$2b$10$iLNVYum1Hxnqc1vilmO7WOGX8kIUL.Y3VzqO0mbVTPaepYoQTbGk.",
            "username": "hanhpv",
            "avatar": null,
            "cover_image": null,
            "createdAt": "2022-01-05T15:08:36.830Z",
            "updatedAt": "2022-01-05T15:08:36.830Z",
            "__v": 0
        },
        {
            "gender": "secret",
            "blocked_inbox": [],
            "blocked_diary": [],
            "_id": "61d5b4a0a374cb31785eb8c3",
            "phonenumber": "0989996666",
            "password": "$2b$10$nADSrk564Ra6ZKTzGX1f/OLgbfbK8sTLa4QKM1r081Ux3S3ntcoUi",
            "username": "truongbm",
            "avatar": null,
            "cover_image": null,
            "createdAt": "2022-01-05T15:09:20.274Z",
            "updatedAt": "2022-01-05T15:09:20.274Z",
            "__v": 0
        },
        {
            "gender": "secret",
            "blocked_inbox": [],
            "blocked_diary": [],
            "_id": "61d5b4c4a374cb31785eb8c8",
            "phonenumber": "0989995555",
            "password": "$2b$10$s4osBJ1rGjob0wxkzYSOUOCCUJ.NzrpZdk5hIEUkGei4PIY64Wz/q",
            "username": "hoangnam",
            "avatar": null,
            "cover_image": null,
            "createdAt": "2022-01-05T15:09:56.934Z",
            "updatedAt": "2022-01-05T15:09:56.934Z",
            "__v": 0
        },
        {
            "gender": "secret",
            "blocked_inbox": [],
            "blocked_diary": [],
            "_id": "61d5be84a374cb31785eb94c",
            "phonenumber": "0989994444",
            "password": "$2b$10$gyTuHMUFqPBVVABpO2FV1OukdI45aM2e7cUN6CfmF7pBcdjJR1.US",
            "username": "thuytrang",
            "avatar": null,
            "cover_image": null,
            "createdAt": "2022-01-05T15:51:32.510Z",
            "updatedAt": "2022-01-05T15:51:32.510Z",
            "__v": 0
        },
        {
            "gender": "secret",
            "blocked_inbox": [],
            "blocked_diary": [],
            "_id": "61d5bed2a374cb31785eb956",
            "phonenumber": "0989993333",
            "password": "$2b$10$qCbEWnfzfzcNUYrtg0GeR.9coto3z0nev8J7quxgdQUsCpjzDDw0.",
            "username": "thuylinh",
            "avatar": null,
            "cover_image": null,
            "createdAt": "2022-01-05T15:52:50.320Z",
            "updatedAt": "2022-01-05T15:52:50.320Z",
            "__v": 0
        }
    ];

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
                                type="EvilIcon"
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
                        <TouchableOpacity
                            onPress={() => { console.warn('add new contact'); }}
                        >
                            <Icon
                                type="MaterialIcon"
                                name="person-add-alt"
                                size={26}
                                color={colors.white}
                            />
                        </TouchableOpacity>
                    </View>
                )
            }
        });
    }, []);

    return (
        <ContactsComponent
            data={data}
        />
    )
}

const styles = StyleSheet.create({
    headerLeft: {
        flexDirection: 'row',
        paddingLeft: 8
    },
    headerTitle: {
        width: '140%',
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

export default Contacts
