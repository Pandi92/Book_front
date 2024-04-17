import React, { useState } from 'react';
import HomeNav from './HomeNav';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const Bookingdetails = () => {
    let { slots, place } = useParams();
    const [book, setBook] = useState({
        username: '',
        place: '',
        slots: '',
        carno: '',
        duration: '',
        amount: '',
    });
    // const navigate = useNavigate();

    function handleChange(event) {
        const { name, value } = event.target;
        let amount = value === '' ? '' : parseInt(value) * 20;
        setBook({ ...book, [name]: value, amount: amount,slots:slots,place:place });
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log(book);
        axios.post('http://localhost:8080/Booking/bookdata', book)
            .then(response => {
                console.log("Successfully Bookings", response.data);
                alert("Successfully Bookings");
                // navigate(`/bill/${book.username}`);
            })
            .catch(error => {
                console.error("Error booking lot", error);
            });
    }

    return (
        <>
            <HomeNav />

            <div className='text-center pt-2 create'>
                <h2 className='text-primary'>Bookings</h2>
                <form onSubmit={handleSubmit} className=''>
                    <div className='mb-4'>
                        <input type="text" className='rounded p-2 fst-italic' name="username" value={book.username} onChange={handleChange} placeholder='UserName ' />
                    </div>
                    <div className='mb-4'>
                        <input type="text" className='rounded p-2 fst-italic' name="place" value={place} readOnly />
                    </div>
                    <div className='mb-4'>
                        <input type="text" className='rounded p-2 fst-italic' name="slots" value={slots} readOnly />
                    </div>
                    <div className='mb-4'>
                        <input type="text" className='rounded p-2 fst-italic' name="carno" value={book.carno} onChange={handleChange} placeholder='CarNumber ' />
                    </div>
                    <div className='mb-4'>
                        <input type="text" className='rounded p-2 fst-italic' name="duration" value={book.duration} onChange={handleChange} placeholder='Duration' />
                    </div>
                    <input type="text" className='rounded p-2 fst-italic' name="amount" value={book.amount} onChange={handleChange} placeholder='Amount' readOnly />
                    <div className='mb-4'></div>
                    <div className='mb-4'>
                        <button className='btn btn-outline-light' type="submit"><i>Book</i></button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Bookingdetails;
