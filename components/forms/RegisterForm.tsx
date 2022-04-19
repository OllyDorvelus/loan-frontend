import React, { Component, ReactElement, useState } from 'react'
import Input from '@mui/material/Input';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
import FormHelperText from '@mui/material/FormHelperText';
import { register } from '../../routes/users';

type Props = {}

export type RegisterFormType = {
    phoneNumber: string,
    phoneNumberConfirm: string,
    firstName: string,
    lastName: string,
    password: string,
    passwordConfirm: string,

}


export default function RegisterForm(props: Props): ReactElement {
    const [formData, setFormData] = useState<RegisterFormType>({
        phoneNumber: '',
        phoneNumberConfirm: '',
        firstName: '',
        lastName: '',
        password: '',
        passwordConfirm: '',
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = async (event: React.FormEvent<HTMLButtonElement>) => {
        event.preventDefault();
        alert("Okay")
        const res = await register(formData);
        console.log("res", res);
    }

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <FormControl>
                    <InputLabel htmlFor="my-input">Phone Number</InputLabel>
                    <Input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
                </FormControl>

                <FormControl>
                    <InputLabel htmlFor="my-input">Confirm Phone Number</InputLabel>
                    <Input type="tel" name="phoneNumberConfirm" value={formData.phoneNumberConfirm} onChange={handleChange} required />
                </FormControl>

                <FormControl>
                    <InputLabel htmlFor="my-input">First Name</InputLabel>
                    <Input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
                </FormControl>

                <FormControl>
                    <InputLabel htmlFor="my-input">Sur Name</InputLabel>
                    <Input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
                </FormControl>

                <FormControl>
                    <InputLabel htmlFor="my-input">Password</InputLabel>
                    <Input type="password" name="password" value={formData.password} onChange={handleChange} required />
                </FormControl>

                <FormControl>
                    <InputLabel htmlFor="my-input">Confirm Password</InputLabel>
                    <Input type="password" name="passwordConfirm" value={formData.passwordConfirm} onChange={handleChange} required />
                </FormControl>
                {/* <Input type="email" name="email" value={formData.email} onChange={handleChange} />
                <Input type="email" name="emailConfirm" value={formData.emailConfirm} onChange={handleChange} /> */}
                <Button type="submit">Register</Button>

            </form>
        </div>
    )
}
