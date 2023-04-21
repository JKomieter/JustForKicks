import React from 'react'
import { useState, useEffect } from 'react'
import "./DownArrivals.css"
import ArrivalList from './ArrivalList'

function DownArrivals() {
    const [arrivals, setArrivals] = useState([])

    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '6740a5ce38msh1b181d397537ea9p1a61cbjsn06fe669cfc16',
		        'X-RapidAPI-Host': 'the-sneaker-database.p.rapidapi.com'
            }
        };

         fetch(`https://the-sneaker-database.p.rapidapi.com/search?limit=10`, options)
        .then(response => response.json())
        .then(response => {
            // console.log(response)
            setArrivals(response)
        })
        .catch(err => console.error(err));
    })

    const arrivalList = arrivals["results"]

    return (
        <div className='downArrivals'>
            {
                arrivalList?.map((a, index) => {
                    <ArrivalList shoes={a} key={index}/>
                })
            }
        </div>
    )
}

export default DownArrivals