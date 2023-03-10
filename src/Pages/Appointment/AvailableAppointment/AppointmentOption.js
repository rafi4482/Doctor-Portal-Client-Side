import React from 'react'

const AppointmentOption = ({appointmentOption , setTreatment }) => {
  const {name,slots} = appointmentOption
  
    return (
        <div className="card mt-8 bg-accent-focus text-primary-content">
        <div className="card-body text-center">
            <h2 className="text-2xl text-warning font-bold text-center">{name}</h2>
            <p>{slots.length > 0 ? slots[0] : 'Try Another day'}</p>
            <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
            
            <div className="card-actions justify-center">
           
<label   disabled={slots.length === 0} htmlFor="booking-modal" className="btn" onClick={() => setTreatment(appointmentOption)}>Book</label>
            </div>
            
        </div>
        
    </div>
    
  )
}

export default AppointmentOption