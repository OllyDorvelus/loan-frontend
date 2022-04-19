import React, { Component, ReactElement, useState } from 'react'
import Input from '@mui/material/Input';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
import FormHelperText from '@mui/material/FormHelperText';
import { login } from '../../routes/users';

type Props = {}

export type LoginFormType = {
    phoneNumber: string,
    password: string,

}


export default function LoginForm(props: Props): ReactElement {
    const [formData, setFormData] = useState<LoginFormType>({
        phoneNumber: '',
        password: '',
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = async (event: React.FormEvent<HTMLButtonElement>) => {
        event.preventDefault();
        alert("Okay")
        const res = await login(formData);
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
                    <InputLabel htmlFor="my-input">Password</InputLabel>
                    <Input type="password" name="password" value={formData.password} onChange={handleChange} required />
                </FormControl>

                <Button type="submit">Login</Button>

            </form>
        </div>
    )
}
