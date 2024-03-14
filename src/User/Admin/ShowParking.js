import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import Navbar from './Navbar';
import css from './Home.css'



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

    const deletedata = (id) => {
        axios.delete('http://localhost:8080/addParking/delete/' + id)
            .then(() => alert("Data Daleted"))
            .catch(error => alert("failed to delete data"))
    }

    return (
        <div className='create'>
            <Navbar />
            <h2 className='text-center text-light'>PARKING SLOTS</h2>

            {parkinslot.map(parkinslot => (
                <div key={parkinslot.id}>
                    <table className='table table-dark table-striped table-bordered border-secondary'>
                        <thead>
                            <tr>
                                <th scope="col">CITY</th>
                                {/* <th> Area</th> */}
                                <th scope="col">LOCATION</th>
                                <th scope="col">FLOOR</th>
                                <th scope="col">SLOTS</th>
                                <th scope="col">TASKS</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td> {parkinslot.city}</td>
                                {/* <td>{parkinslot.area}</td> */}
                                <td><a href={parkinslot.location} target='_blank'>{parkinslot.area}</a></td>
                                <td>{parkinslot.floor}</td>
                                <td>{parkinslot.slots}</td>
                                <td><button className='btn btn-outline-danger' onClick={() => deletedata(parkinslot.id)}>Delete</button></td>

                            </tr>
                        </tbody>
                    </table>
                </div>
            ))}

        </div>
    );
};
export default ShowParking;