import React from 'react'
import { useState } from 'react'
import css from './Home.css'
import Navbar  from './Navbar'
import axios from 'axios'
import { Navigate,useNavigate } from 'react-router'

const CreateParking = () => {

    const[place,setplace]=useState({
        city:'',
        place:'',
        location:'',
        floor:'',
        slots:''
    });
    const Navigate = useNavigate();

    function handleChange(event){
        const { name, value } = event.target
        setplace({...place, [name]: value })
        console.log(name, value)
    }

    function handleSubmit(event){
        event.preventDefault()
        console.log(place);
        axios.post('http://localhost:8080/addParking/add_data',place)
        .then(response=>{
            console.log("Parking Lot Created",response.data);
            alert("Successfully Created");
            Navigate("/showlot");
          })
        .catch(error=>{
            console.error("Error Creating Parking lot",error);
        })
        
    }

  return (
    <>
    <Navbar/>

        <div className='text-center pt-5 create'>
            <h2 className='text-primary'>CREATE PARKING LOT</h2>
            <form onSubmit={handleSubmit} className=''>
                <div className='mb-4'>
                    <input type="text" className='rounded p-2 fst-italic' name="city" value={place.city} onChange={handleChange} placeholder='Add City' />
                    
                </div>
                <div className='mb-4'>
                    <input type="text" className='rounded p-2 fst-italic' name="place" value={place.place} onChange={handleChange} placeholder='Add Place ' />
                    
                </div>
                <div className='mb-4'>
                    <input type="text" className='rounded p-2 fst-italic' name="location" value={place.location} onChange={handleChange} placeholder='Add Location' />
                    
                </div>
                    <input type="text" className='rounded p-2 fst-italic' name="floor" value={place.floor} onChange={handleChange} placeholder='Add Floor' />
                <div className='mb-4'>
                </div>
                    
                    <input type="text" className='rounded p-2 fst-italic' name="slots" value={place.slots} onChange={handleChange} placeholder='Add Slots' />
                <div className='mb-4'>
                    
                </div>
                <div className='mb-4'>
                    <button className='btn btn-outline-light' type="submit"><i>Create</i></button>
                </div>

            </form>
        </div>
        </>
  )
}

export default CreateParking