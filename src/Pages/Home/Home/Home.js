import React from 'react'
import Banner from '../Banner/Banner'
import MakeAppointment from '../MakeAppointment/MakeAppointment'
import Services from '../Services/Services'

const Home = () => {
  return (
    <div className="mx-5">
      <Banner></Banner>
      <Services></Services>
      <MakeAppointment></MakeAppointment>
      </div>
  )
}

export default Home