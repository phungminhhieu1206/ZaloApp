import { useNavigation, useFocusEffect } from '@react-navigation/native';
import React, { useContext, useState, useCallback } from 'react'
import { View, Text } from 'react-native'
import RegisterComponent from '../../components/specifics/auth/RegisterComponent'
import { GlobalContext } from '../../context/Provider';
import registerAction from "../../context/actions/auth/registerAction"
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
            Object.values(errors).every((item) => !item) // đảm bảo ko còn input nào rỗng
        ) {
            /**
             * đến đây các lỗi ko còn, cần gửi dữ liệu lên server
             * Ngay tại đây, mình cần tạo actions để dispatch action register đó đến server -> vào context tạo
             * Trong action of context -> dùng axios để tạo request
             */

            /**
             * cta cần gửi dữ liệu là form
             * và cần 1 action để thay đổi state là: authDispatch
             */
            registerAction(form)(authDispatch);
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
