import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
    Image,
    Text,
    View,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import colors from '../../../assets/themes/colors';
import Container from '../../common/Container';
import CustomButton from '../../common/CustomButton';
import CustomInput from '../../common/CustomInput';
import { REGISTER } from '../../../constants/routeNames';
import Message from '../../common/Message';

const LoginComponent = ({
    error,
    form,
    onChange,
    loading,
    onSubmit,
    justSignedUp,
    errors
}) => {
    const { navigate } = useNavigation();
    const [isSecureEntry, setIsSecureEntry] = useState(true);
    return (
        <Container>
            <Image
                height={70}
                width={70}
                source={require('../../../assets/images/logo_zalo.jpg')} // image local
                style={styles.logoImage}
            />

            <View>
                <Text style={styles.title}>Welcome to ZaloApp</Text>

                <View style={styles.form}>
                    {justSignedUp && (
                        <Message
                            onDismiss={() => { }}
                            message='Account created successfully'
                            success
                        />
                    )}

                    {error && !error.error && <Message
                        onDismiss={() => { }}
                        message={error.message}
                        danger
                    />}

                    {error?.error && (
                        <Message
                            danger
                            onDismiss
                            message={error.error}
                        />
                    )}

                    <CustomInput
                        label="Phone Number"
                        iconPosition="right"
                        placeholder="Enter Phone Number"
                        value={form.phoneNumber || null}
                        onChangeText={(value) => {
                            onChange({ name: 'phoneNumber', value })
                        }}
                        error={errors.phoneNumber}
                        keyboardType="numeric"
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
                        onChangeText={(value) => {
                            onChange({ name: 'password', value })
                        }}
                    />

                    <CustomButton
                        disabled={loading}
                        onPress={onSubmit}
                        loading={loading}
                        primary
                        title="LOGIN"
                    />

                    <View style={styles.createSection}>
                        <Text style={styles.infoText}>Need a new account?</Text>
                        <TouchableOpacity
                            onPress={() => {
                                navigate(REGISTER);
                            }}
                        >
                            <Text style={styles.linkBtn}>Register</Text>
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
        marginTop: 50,
        alignSelf: 'center',
    },
    title: {
        fontSize: 21,
        textAlign: 'center',
        paddingTop: 20,
        fontWeight: '500',
    },
    subTitle: {
        fontSize: 17,
        textAlign: 'center',
        paddingVertical: 10,
        fontWeight: '500',
    },
    form: {
        paddingTop: 30,
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

export default LoginComponent;