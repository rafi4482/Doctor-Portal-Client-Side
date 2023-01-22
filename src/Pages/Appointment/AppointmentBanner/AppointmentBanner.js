import React, { useState } from 'react'
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';

const AppointmentBanner = ({selectedDate,setSelectedDate}) => {

   
    
    
  return (
    <header className="my-6">
        <div className="hero gap-8">
  <div className="hero-content flex-col lg:flex-row gap-16">
    <img src="https://plus.unsplash.com/premium_photo-1668487827029-2bd54133c303?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1112&q=80" className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <DayPicker
       mode="single"
       selected={selectedDate}
       onSelect={setSelectedDate}
      />
      {/* <p>You picked {format(selectedDate, 'PP')}.</p> */}
    </div>
  </div>
</div>
    </header>
  )
}

export default AppointmentBanner