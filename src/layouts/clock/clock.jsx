import React, { useEffect } from 'react'
import "./clock.css"
export default function Clock({ time }) {
    useEffect(() => {
        if (time) {
            const hourRotation = ((time.num_hour * 30) + (time.num_min * 0.5));
            const hourHand = document.querySelector('.hour-hand');
            hourHand.style.transformOrigin = 'left center'
            hourHand.style.transform = `rotate(${hourRotation}deg)`;
        }
    }, [time])
    return (
        <div className='clock m-0-5'>
            <div className='hour-hand'></div>
            {/* <div className='min-hand'></div> */}
        </div>
    )
}
