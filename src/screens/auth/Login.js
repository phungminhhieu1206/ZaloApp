import React, { useState } from 'react'
import LoginComponent from '../../components/specifics/auth/LoginComponent'

const Login = () => {

    const [form, setForm] = useState({});
    return (
        <LoginComponent />
    )
}

export default Login
