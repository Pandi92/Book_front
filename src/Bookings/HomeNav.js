import React from 'react'
import Bookingdetails from './Bookingdetails'

import { useNavigate } from 'react-router-dom';


const HomeNav = () => {
    const navigate = useNavigate();

    function Bookingdetails(){
        navigate(`/Bookdetails/:slots/:place`)
    }
    return (
        <div className='Home'>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <a className="navbar-brand h1 text-danger fs-3 shadow-lg" href="#">CAR PARKING MANAGEMENT</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mb-2 mb-lg-0 ms-auto fs-5">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="http://localhost:3000/Booking">Home</a>
                            </li>
                            <li className="nav-item">
                                {/* <a className="nav-link btn btn-outline-success" href="#"></a> */}
                                <button className='nav-link btn btn-outline-dark' onClick={() => Bookingdetails()}>Booking</button>
                        
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="http://localhost:3000">Signout</a>
                            </li>

                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    )
}

export default HomeNav