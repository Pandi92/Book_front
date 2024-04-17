// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import HomeNav from './HomeNav';
// import { Navigate, useNavigate } from 'react-router'


// const Booking = () => {
//     const [city, setCity] = useState('');
//     const [parkingLots, setParkingLots] = useState([]);

//     const Navigate = useNavigate();


//     useEffect(() => {
//         if (city) {
//             axios.get(`http://localhost:8080/addParking/city?city=${city}`)
//                 .then(response => {
//                     setParkingLots(response.data);
//                 })
//                 .catch(error => {
//                     console.error('Error fetching parking lots:', error);
//                 });
//         }
//     }, [city]);

//     const handleCityChange = (event) => {
//         setCity(event.target.value);
//     };
//     const handleBooking = (slots, place) => {
//         Navigate(`/bookdetails/${slots}/${place}`); // Navigate to the booking path with the parking lot ID
//     };

//     return (
//         <div>
//             <HomeNav />
//             {/* <label className='text-center ms-auto'>Select City:</label> */}
//             <center> <select className='text-center mb-3 ms-5 mt-3' value={city} onChange={handleCityChange}>
//                 <option value="">Select a city</option>
//                 <option value="Madurai">Madurai</option>
//                 <option value="Arupukottai">Arupukottai</option>
//                 <option value="Bangalore">Banglaore</option>
//                 {/* Add other cities as needed */}
//             </select></center>
//             <div>
//                 <table className='table table-dark table-striped table-bordered border-secondary text-center'>
//                     <thead>
//                         <tr>
//                             <th scope="col">CITY</th>
//                             <th scope="col">PLACE</th>
//                             <th scope="col">FLOOR</th>
//                             <th scope="col">SLOTS</th>
//                             <th scope="col">LOCATE-ME</th>
//                             <th scope="col">BOOK</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {parkingLots.map(parkingLot => (
//                             <div key={parkingLot.id}>

//                                 <tr>
//                                     <td> {parkingLot.city}</td>
//                                     <td>{parkingLot.place}</td>
//                                     <td>{parkingLot.floor}</td>
//                                     <td>{parkingLot.slots}</td>
//                                     <td><a className='btn btn-outline-warning' href={parkingLot.location} target='_blank'>Gmap</a></td>
//                                     <td><button className='btn btn-outline-success' onClick={() => handleBooking(parkingLot.slots, parkingLot.place)}>Book</button></td> {/* Add booking button */}

//                                     {/* <td><button className='btn btn-outline-danger' onClick={() => deletedata(parkinslot.id)}>Delete</button></td> */}

//                                 </tr>
//                             </tbody>

//                         </table>

//             </div>
//                 ))}
//         </div>
//         </div >
//     );
// };

// export default Booking;



import React, { useState, useEffect } from 'react';
import axios from 'axios';
import HomeNav from './HomeNav';
import { useNavigate } from 'react-router-dom';

const Booking = () => {
    const [city, setCity] = useState('');
    const [parkingLots, setParkingLots] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        if (city) {
            axios.get(`http://localhost:8080/addParking/city?city=${city}`)
                .then(response => {
                    setParkingLots(response.data);
                })
                .catch(error => {
                    console.error('Error fetching parking lots:', error);
                });
        }
    }, [city]);

    const handleCityChange = (event) => {
        setCity(event.target.value);
    };

    const handleBooking = (slots, place) => {
        navigate(`/bookdetails/${slots}/${place}`);
    };

    return (
        <div>
            <HomeNav />
            <center>
                <select className='text-center mb-3 ms-5 mt-3' value={city} onChange={handleCityChange}>
                    <option value="">Select a city</option>
                    <option value="Madurai">Madurai</option>
                    <option value="Arupukottai">Arupukottai</option>
                    <option value="Bangalore">Banglaore</option>
                    {/* Add other cities as needed */}
                </select>
            </center>
            <table className='table table-dark table-striped table-bordered border-secondary text-center'>
                <thead>
                    <tr>
                        <th scope="col">CITY</th>
                        <th scope="col">PLACE</th>
                        <th scope="col">FLOOR</th>
                        <th scope="col">SLOTS</th>
                        <th scope="col">LOCATE-ME</th>
                        <th scope="col">BOOK</th>
                    </tr>
                </thead>
                <tbody>
                    {parkingLots.map(parkingLot => (
                        <tr key={parkingLot.id}>
                            <td>{parkingLot.city}</td>
                            <td>{parkingLot.place}</td>
                            <td>{parkingLot.floor}</td>
                            <td>{parkingLot.slots}</td>
                            <td><a className='btn btn-outline-warning' href={parkingLot.location} target='_blank'>Gmap</a></td>
                            <td><button className='btn btn-outline-success' onClick={() => handleBooking(parkingLot.slots, parkingLot.place)}>Book</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Booking;
