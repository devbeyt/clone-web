import React from 'react'
import Categories from '../../components/categories/Categories'
import Carusel from './../../components/carusel/Carusel'

function Home() {
  return (
    <div className='page'>
     <div className='home_main_section'>
     <Categories/>
      <Carusel/>
     </div>
    </div>
  )
}

export default Home