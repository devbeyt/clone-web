import React from 'react'
import './navi.css'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FaSearch} from 'react-icons/fa'
import {RiScales3Fill} from 'react-icons/ri'
import {BiHeart} from 'react-icons/bi'
import {BsPerson,BsHandbag} from 'react-icons/bs'
import { BsFillGridFill } from 'react-icons/bs';


function Navigation() {
  return (
    <nav className='navigation'>
      <div className="nav_container container">
        
      <div className="nav_left_container">
        <a href="#" className='logo'>Kontak Home</a>
      
      <BsFillGridFill size={25} className='grid_menu_icon'/> <span className='menyu_icon_text'>Menyu</span>
      </div>

      <div className="nav_right_container">
      <GiHamburgerMenu className="hamburger_menu_icon"/>

{/* nav search component */}
      <div className="input_search">
       <FaSearch className="search_icon"/>
        <input type="text" placeholder="Mehsul uzre axtaris edin..."/>
      </div>

{/* right icons group */}

      <div className="icon_group">
          <BsPerson className='nav_right_icon'/>
          <RiScales3Fill className='nav_right_icon'/>
          <BiHeart className='nav_right_icon'/>
          <BsHandbag className='nav_right_icon'/>
        </div>

        {/* l'll change this ... */}
        <select name="languages" className="select_languages">
          <option value="Aze"> Aze</option>
          <option value="Eng">Eng</option>
        </select>
      </div>
      </div>
    </nav>
  )
}

export default Navigation