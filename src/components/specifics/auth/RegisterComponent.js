import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
    Image,
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';
import colors from '../../../assets/themes/colors';
import Container from '../../common/Container';
import CustomButton from '../../common/CustomButton';
import CustomInput from '../../common/CustomInput';
import { LOGIN } from '../../../constants/routeNames';
import CountryPicker from 'react-native-country-picker-modal';
import Message from '../../common/Message';
// import Message from '../common/Message';
// import styles from './styles';

const RegisterComponent = ({
    onSubmit,
    onChange,
    form,
    errors,
    setForm,
    loading,
    error
}) => {
    const { navigate } = useNavigation();
    const [isSecureEntry, setIsSecureEntry] = useState(true);

    console.log('error --> ', error);

    return (
        <Container>
            <Image
                height={70}
                width={70}
                source={require('../../../assets/images/logo_zalo.jpg')}
                style={styles.logoImage}
            />

            <View>
                <View style={styles.form}>
                    {error?.error && (
                        <Message
                            retry
                            danger
                            retryFn={() => {
                                console.log('click retry button in register screen');
                            }}
                            message={error.error}
                        />
                    )}
                    <CustomInput
                        icon={
                            <CountryPicker
                                withFilter
                                withFlag
                                countryCode={form.countryCode || undefined}
                                withCountryNameButton={false}
                                withCallingCode
                                withCallingCodeButton
                                withEmoji
                                onSelect={(value) => {
                                    const phoneCode = value.callingCode[0];
                                    const cCode = value.cca2;
                                    setForm({
                                        ...form,
                                        'phoneCode': phoneCode,
                                        'countryCode': cCode
                                    })
                                }}
                            />
                        }
                        iconPosition="left"
                        style={{ paddingLeft: 10 }}
                        label="Phone Number"
                        placeholder="Enter phone number"
                        error={errors.phoneNumber || error?.message}
                        onChangeText={(value) => {
                            onChange({ name: 'phoneNumber', value });
                        }}
                        keyboardType="numeric"
                    />

                    <CustomInput
                        label="Username"
                        iconPosition="right"
                        placeholder="Enter Username"
                        error={errors.userName}
                        onChangeText={(value) => {
                            onChange({ name: 'userName', value });
                        }}
                    />

                    <CustomInput
                        label="Password"
                        placeholder="Enter Password"
                        secureTextEntry={isSecureEntry}
                        icon={
                            <TouchableOpacity
                                onPress={() => {
                                    setIsSecureEntry((prev) => !prev);
                                }}>
                                <Text>{isSecureEntry ? 'Show' : 'Hide'}</Text>
                            </TouchableOpacity>
                        }
                        iconPosition="right"
                        error={errors.password}
                        onChangeText={(value) => {
                            onChange({ name: 'password', value });
                        }}
                    />

                    <CustomButton
                        loading={loading}
                        disabled={loading}
                        onPress={onSubmit}
                        primary
                        title="REGISTER"
                    />

                    <View style={styles.createSection}>
                        <Text style={styles.infoText}>Already have an account?</Text>
                        <TouchableOpacity
                            onPress={() => {
                                navigate(LOGIN);
                            }}>
                            <Text style={styles.linkBtn}>Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Container>
    );
};

const styles = StyleSheet.create({
    logoImage: {
        height: 150,
        width: 150,
        alignSelf: 'center',
        marginTop: 50,
    },
    title: {
        fontSize: 21,
        textAlign: 'center',
        fontWeight: '500',
    },
    subTitle: {
        fontSize: 17,
        textAlign: 'center',
        paddingVertical: 10,
        fontWeight: '500',
    },
    form: {
        paddingTop: 20,
    },
    createSection: {
        flexDirection: 'row',
        alignSelf: 'center'
    },
    linkBtn: {
        paddingLeft: 17,
        color: colors.primary,
        fontSize: 16,
    },
    infoText: {
        fontSize: 17,
    },
})

export default RegisterComponent;