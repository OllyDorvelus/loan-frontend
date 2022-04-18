import React, { Component, ReactElement, useState, ChangeEvent } from 'react'
import Input from '@mui/material/Input';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

type Props = {}

type BankName = {
    id: string,
    name: string,
}

type BankType = {
    id: string,
    type: string
}

type BankForm = {
    account_number: string,
    bank_name: string,
    bank_type: string,
}


export default function BankForm(props: Props): ReactElement {
    const [formData, setFormData] = useState<BankForm>({
        account_number: '',
        bank_name: '',
        bank_type: '',
    })

    const [bankNames, setBankNames] = useState<BankName[]>([{ 'id': '12131', name: 'Chase' }])
    const [bankTypes, setBankTypes] = useState<BankType[]>([])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
    }

    return (
        <div className="form-container">
            <form>
                <Input type="text" name="phoneNumber" placeholder="sss" value={formData.account_number} onChange={handleChange} required />
                <Select>
                    {bankNames.map(bankName =>
                        <MenuItem key={bankName.id} value={bankName.id}>{bankName.name}</MenuItem>
                    )}
                </Select>
            </form>
        </div>
    )
}
