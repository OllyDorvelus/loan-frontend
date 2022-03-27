import React, { Component, ReactElement, useState } from 'react'
import Input from '@mui/material/Input';

type Props = {}

type RegisterForm = {
    phoneNumber: string,
    phoneNumberConfirm: string,
    firstName: string,
    lastName: string,
    password: string,
    passwordConfirm: string,
    email?: string,
    emailConfirm?: string,
}


export default function RegisterForm(props: Props): ReactElement {
    const [formData, setFormData] = useState<RegisterForm>({
        phoneNumber: '',
        phoneNumberConfirm: '',
        firstName: '',
        lastName: '',
        password: '',
        passwordConfirm: '',
        email: '',
        emailConfirm: '',
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
    }

    return (
        <div className="form-container">
            <form>
                <Input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
                <Input type="tel" name="phoneNumberConfirm" value={formData.phoneNumberConfirm} onChange={handleChange} required />
                <Input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
                <Input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
                <Input type="password" name="password" value={formData.password} onChange={handleChange} required />
                <Input type="password" name="passwordConfirm" value={formData.passwordConfirm} onChange={handleChange} required />
                <Input type="email" name="email" value={formData.email} onChange={handleChange} />
                <Input type="email" name="emailConfirm" value={formData.emailConfirm} onChange={handleChange} />
            </form>
        </div>
    )
}
