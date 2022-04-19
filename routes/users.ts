import axios from 'axios';
import snakecaseKeys from 'snakecase-keys';
import { RegisterFormType } from '@/components/forms/RegisterForm'
import { LoginFormType } from '@/components/forms/LoginForm'
const BASE_URL = `/users`;
const API_URL = process.env.NEXT_PUBLIC_API_URL

export async function register(payload: RegisterFormType) {
    try {
        const res = await axios.post(`${API_URL}${BASE_URL}/`, snakecaseKeys(payload));
        if (res.status === 201) {
            await login(payload)
            return res.data;
        }
    } catch (err) {
        console.log(err)
    }
}

export async function login(payload: LoginFormType) {
    try {
        //  const res = await axios.post(`${API_URL}/auth/login/`, { username: payload.phoneNumber, password: payload.password }, { withCredentials: true })
        const rest = await fetch(`${API_URL}/auth/login/`, {
            method: 'POST',
            body: JSON.stringify({ username: payload.phoneNumber, password: payload.password }),
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: "include",
        })
    }
    // return rest.data;
    catch (err) {
        console.log(err);
    }
}