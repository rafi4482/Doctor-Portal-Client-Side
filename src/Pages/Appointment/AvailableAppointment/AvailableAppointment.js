import { format } from 'date-fns'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Appointment from '../Appointment/Appointment'
import BookingModal from '../BookingModal/BookingModal'
import AppointmentOption from './AppointmentOption'

const AvailableAppointment = ({selectedDate}) => {
 
    const [appointmentOptions,setAppointmentOptions] = useState([])

    useEffect(()=>{
fetch("appointmentOptions.json")
.then(res=>res.json())
.then(data=>setAppointmentOptions(data))

    },[])


    return (
    <section className="mt-16">
        <p className="text-center text-success font-bold">Available Appointment {format(selectedDate,"PP")}</p>
    <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6'>
        {
            appointmentOptions.map(option=><AppointmentOption
            key={option._id}
            appointmentOption={option}
            >

            </AppointmentOption>)
        }
    </div>
    
    <BookingModal></BookingModal>

    </section>
  )
}

export default AvailableAppointment