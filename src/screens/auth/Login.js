import { useRoute } from '@react-navigation/native';
import React, { useContext, useEffect, useState } from 'react'
import LoginComponent from '../../components/specifics/auth/LoginComponent'
import login from '../../context/actions/auth/login';
import { GlobalContext } from '../../context/Provider';

const Login = () => {

    const [form, setForm] = useState({});
    const [justSignedUp, setJustSignedUp] = useState(false);
    const [errors, setErrors] = useState({});

    const { params } = useRoute();
    /**
     * Khi user đăng kí thành công:
     * + Từ màn hình register: navigate(LOGIN, {params});
     * + Tại màn hình login: tiến hành nhận params từ Route navigate truyền đến
     * + Thực hiện useEffect(() => {}, [params]) bất cứ khi nào có sự thay đổi params
     * + ... đổi dữ liệu nhận được vào form, báo user x vừa đăng kí, mời đăng nhập.
     */
    React.useEffect(() => {
        if (params?.data) {
            console.log('params ----> ', params);

            setJustSignedUp(true);
            setForm({
                ...form,
                phoneNumber: params.data.phonenumber
            })
        }
    }, [params])

    const {
        authDispatch,
        authState: { error, loading }
    } = useContext(GlobalContext);

    const onChange = ({ name, value }) => {
        // setJustSignedUp(false);
        setForm({
            ...form,
            [name]: value
        });
    };

    const onSubmit = () => {
        // console.log('hellooooooo', form);
        if (!form.phoneNumber) {
            setErrors((prev) => {
                return { ...prev, phoneNumber: 'Please add a phone number' };
            });
        }

        if (form.phoneNumber && form.password) {
            login(form)(authDispatch);
        }
    }

    return (
        <LoginComponent
            onSubmit={onSubmit}
            onChange={onChange}
            form={form}
            errors={errors}
            error={error}
            loading={loading}
            justSignedUp={justSignedUp}
        />
    )
}

export default Login
