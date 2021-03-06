import { useNavigation, useFocusEffect } from '@react-navigation/native';
import React, { useContext, useState, useCallback } from 'react'
import { View, Text } from 'react-native'
import RegisterComponent from '../../components/specifics/auth/RegisterComponent'
import { GlobalContext } from '../../context/Provider';
import register, { clearAuthState } from "../../context/actions/auth/register"
import { LOGIN } from "../../constants/routeNames";

const Register = () => {

    const { navigate } = useNavigation();

    // state local
    const [form, setForm] = useState({});
    const [errors, setErrors] = useState({});

    // state global
    const {
        authDispatch,
        authState: { error, loading, data }
    } = useContext(GlobalContext);

    useFocusEffect(
        useCallback(() => {
            return () => {
                if (data || error) {
                    clearAuthState()(authDispatch);
                }
            }
        }, [data, error]),
    );


    const onChange = ({ name, value }) => {
        setForm({ ...form, [name]: value });

        // reset error when form not empty
        if (value !== '') {
            if (name === 'password') {
                if (value.length < 6) {
                    setErrors((prev) => {
                        return { ...prev, [name]: 'This field needs minimize 6 characters' };
                    });
                } else {
                    setErrors((prev) => {
                        return { ...prev, [name]: null };
                    });
                }
            } else {
                setErrors((prev) => {
                    return { ...prev, [name]: null };
                });
            }
        } else {
            setErrors((prev) => {
                return { ...prev, [name]: 'This field is required' };
            });
        }
    };

    const onSubmit = () => {
        if (!form.phoneNumber) {
            setErrors((prev) => {
                return { ...prev, phoneNumber: 'Please add a phone number' };
            });
        }
        if (!form.userName) {
            setErrors((prev) => {
                return { ...prev, userName: 'Please add a username' };
            });
        }
        if (!form.password) {
            setErrors((prev) => {
                return { ...prev, password: 'Please add a password' };
            });
        }

        if (
            Object.values(form).length === 3 &&
            Object.values(form).every((item) => item.trim().length > 0) &&
            Object.values(errors).every((item) => !item) // ?????m b???o ko c??n input n??o r???ng
        ) {
            /**
             * ?????n ????y c??c l???i ko c??n, c???n g???i d??? li???u l??n server
             * Ngay t???i ????y, m??nh c???n t???o actions ????? dispatch action register ???? ?????n server -> v??o context t???o
             * Trong action of context -> d??ng axios ????? t???o request
             */

            /**
             * cta c???n g???i d??? li???u l?? form
             * v?? c???n 1 action ????? thay ?????i state l??: authDispatch
             */
            register(form)(authDispatch)((data) => {
                navigate(LOGIN, { data });
            });
        }
    };

    return (
        <RegisterComponent
            onSubmit={onSubmit}
            onChange={onChange}
            form={form}
            errors={errors}
            setForm={setForm}
            error={error} // of global state
            loading={loading} // of global state
        />
    )
}

export default Register
