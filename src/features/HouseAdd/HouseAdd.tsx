import axios from 'axios';
import React, { useState } from 'react';
import { House } from '../../reducer/houseSlice';

const addHouse = async (data: House) => {
    return axios({
        method: 'POST',
        url: 'http://mobile-reality-backend.sadek.usermd.net/houses/',
        data: {
            ...data
        },
    }).then(({ data }) => {
        return true;
    }).catch((err) => {
        return false
    })
}

const HouseAdd = () => {
    const [address, setAddress] = useState('');
    const [floorsNumber, setFloorsNumber] = useState(0);
    const [description, setDescription] = useState('');
    const [label, setLabel] = useState('');

    const handleAddHouse = async () => {
        await addHouse({
            address,
            floorsNumber,
            description,
            label,
        })
    }

    return (
        <div>
            <div>
                <label htmlFor="address">address</label>
                <input type="text" name="address" value={address} onChange={(e) => setAddress(e.target.value)} />
            </div>
            <div>
                <label htmlFor="floorsNumber">floorsNumber</label>
                <input type="number" name="floorsNumber" value={floorsNumber} onChange={(e) => setFloorsNumber(parseInt(e.target.value))} />
            </div>
            <div>
                <label htmlFor="description">description</label>
                <input type="text" name="description" value={description} onChange={(e) => setDescription(e.target.value)} />
            </div>
            <div>
                <label htmlFor="label">label</label>
                <input type="text" name="label" value={label} onChange={(e) => setLabel(e.target.value)} />
            </div>
            <button onClick={handleAddHouse}> Add </button>
        </div>
    )
}

export default HouseAdd;
