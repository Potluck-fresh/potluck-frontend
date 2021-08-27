import React, { useState } from 'react'
import axiosWithAuth from '../utils/axiosWithAuth';

export default function CreatePotluck(props) {
    const [value, setValue]=useState({
        potluck_name: "",
        potluck_description: "",
        potluck_date: "",
        potluck_time: "",
        potluck_location: "",
        organizer: null
    })
    console.log(props)

    const handleChange = e => {
        setValue({
            ...value,
            [e.target.name]: e.target.value
        });
      };
      
      const submit = e =>{
          e.preventDefault()
          axiosWithAuth()
          .post('/api/potlucks', value, value.organizer)
          .then(res => {
              console.log(res)
              
          })
          .catch(err=> {
              console.log(err)
          })
      }
    return (
        <div>
            <form onSubmit={submit}>
            <h1>Let's Create your Event</h1>

            <input 
            type='text'
            name='potluck_location'
            value={value.potluck_location}
            onChange={handleChange}
            placeholder='Potluck Location'
            />

            <h2>Event Details</h2>
            <input 
            type='text'
            name='potluck_name'
            value={value.potluck_name}
            onChange={handleChange}
            placeholder='Potluck Name'
            />

            <input 
            type='date'
            name='potluck_date'
            value={value.potluck_date}
            onChange={handleChange}
            />
            <input 
            type='text'
            name='potluck_time'
            value={value.potluck_time}
            onChange={handleChange}
            placeholder='Potluck Time'
            />
            <textarea
                height="5"
                name="potluck_description"
                placeholder="potluck_description Special instructions..."
                value={value.potluck_description}
                onChange={handleChange}
              />

              <button>Submit</button>
            </form>
        </div>
    )
}
