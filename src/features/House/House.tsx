import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectHouse, fetchHouseById, removeHouseById } from '../../reducer/houseSlice';

const House = () => {

    const { singleHouse, status } = useSelector(selectHouse);
    const dispatch = useDispatch();
    let { id } = useParams<any>();

    useEffect(() => {
        dispatch(fetchHouseById(id))
    }, [])
    console.log(id)

    const handleCLickDelete = (id: number | undefined) => {
        if (id) {
            dispatch(removeHouseById(id))
        }
    }

    return (
        <div>
            {status}
            <article>
                <p>address: {singleHouse.address}</p>
                <p>label: {singleHouse.label}</p>
                <p>floorsNumber: {singleHouse.floorsNumber}</p>
                <p>description: {singleHouse.description}</p>
                <button onClick={() => handleCLickDelete(singleHouse._id)}>delete</button>
            </article>
        </div>
    )
}

export default House;
