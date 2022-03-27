import React, { Component, ReactElement, useState, ChangeEvent } from 'react'
import Input from '@mui/material/Input';

type Props = {}

type ApplyLoanForm = {
    principal: string,
    principalConfirm: string,
}


export default function ApplyLoanForm(props: Props): ReactElement {
    const [formData, setFormData] = useState<ApplyLoanForm>({
        principal: '',
        principalConfirm: '',
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
    }

    return (
        <div className="form-container">
            <form>
                <Input type="number" name="phoneNumber" value={formData.principal} onChange={handleChange} required />
                <Input type="number" name="phoneNumberConfirm" value={formData.principalConfirm} onChange={handleChange} required />
            </form>
        </div>
    )
}
