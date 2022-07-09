import React from 'react'
import Footer from '../components/footer/Footer'
import Navigation from '../components/navi/Navigation'
import Routers from './../routes/Routers'


function Dashboard() {
  return (
    <div>
      <Navigation/>
      <Routers/>
      <Footer/>
    </div>
  )
}

export default Dashboard