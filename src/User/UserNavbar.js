import React from 'react'


const UserNavbar = () => {

    return (
        <div className='Home'>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container">
                    <a class="navbar-brand h1 text-danger fs-3 shadow-lg" href="#">CAR PARKING MANAGEMENT</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mb-2 mb-lg-0 ms-auto fs-5">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="http://localhost:3000">SignIN</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="http://localhost:3000/Register">SignUp</a>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </div>


    );
};

export default UserNavbar;