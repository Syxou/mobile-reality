import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectHouse, fetchHouses, removeHouseById } from '../../reducer/houseSlice';

const HouseList = () => {

    const { houses, status } = useSelector(selectHouse);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchHouses())
    }, [])

    const handleCLickDelete = (id: number | undefined) => {
        if (id) {
            dispatch(removeHouseById(id))
        }
    }

    return (
        <>
            <Link to="/house/add">Add House</Link>
            {status}
            <ul>
                {houses?.map((h) => (
                    <li key={h._id}>
                        <article>
                            <p>address: {h.address}</p>
                            <p>label: {h.label}</p>
                            <p>floorsNumber: {h.floorsNumber}</p>
                            <p>description: {h.description}</p>
                            <Link to={`/house/${h._id}`}>House</Link>
                            <button onClick={() => handleCLickDelete(h._id)}>delete</button>
                        </article>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default HouseList;
