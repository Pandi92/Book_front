

import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import Navbar from './Navbar';
import './Home.css'

const UserBooking = () => {
    const [UserBooking, setUserBooking] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8080/Booking/get_data')
            .then(response => {
                setUserBooking(response.data);
                console.log(response.data);
            })
            .catch(error => {
                console.error("failed to fetch", error);
            })
    }, []);

    const deletedata = (id) => {
        axios.delete('http://localhost:8080/Booking/delete/' + id)
            .then(() => alert("Data Deleted"))
            .catch(error => alert("Failed to delete data"))
    }

    return (
        <div className='create'>
            <Navbar />
            <h2 className='text-center text-light'>BOOKING DETAILS</h2>
            <table className='table table-dark table-striped table-bordered border-secondary text-center'>
                <thead>
                    <tr>
                        <th scope="col">USERNAME</th>
                        <th scope="col">PLACE</th>
                        <th scope="col">SLOTS</th>
                        <th scope="col">CARNO</th>
                        <th scope="col">DATE-TIME</th>
                        <th scope="col">DURATION</th>
                        <th scope="col">AMOUNT</th>
                        <th scope="col">TASKS</th>
                    </tr>
                </thead>
                <tbody>
                    {UserBooking.map(UserBooking => (
                        <tr key={UserBooking.id}>
                            <td>{UserBooking.username}</td>
                            <td>{UserBooking.place}</td>
                            <td>{UserBooking.slots}</td>
                            <td>{UserBooking.carno}</td>
                            <td>{UserBooking.bookingDateTime}</td>
                            <td>{UserBooking.duration}</td>
                            <td>{UserBooking.amount}</td>
                            <td><button className='btn btn-outline-danger' onClick={() => deletedata(UserBooking.id)}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
export default UserBooking;
