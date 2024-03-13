import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import Navbar from './Navbar';



const ShowParking = () => {
    const [parkinslot, setparkingslot] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8080/addParking/get_data')
            .then(response => {
                setparkingslot(response.data);
                console.log(response.data);
            })
            .catch(error => {
                console.error("failed to fetch", error);
            })
    }, []);

    return (
        <div>
            <Navbar />
            <h2 className='text-center'>PARKING SLOTS</h2>

            {parkinslot.map(parkinslot => (
                <div key={parkinslot.id}>
                    <table className='table'>

                        <tr>
                            <th> City</th>
                            <th> Area</th>
                            <th>Location</th>
                            <th>Floor</th>
                            <th>SlotNo</th>
                        </tr>
                        <tr>
                            <td> {parkinslot.city}</td>
                            <td>{parkinslot.area}</td>
                            <td>{parkinslot.location}</td>
                            <td>{parkinslot.floor}</td>
                            <td>{parkinslot.slotno}</td>
                        </tr>
                           </table>
                </div>
            ))}

        </div>
    );
};
export default ShowParking;