import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook } from 'react-icons/fa'
import { GrInstagram } from 'react-icons/gr'
import { AiFillTwitterCircle } from 'react-icons/ai'
import Sp1 from '../assets/sponsors/ilo.jpeg'
import Sp2 from '../assets/sponsors/iom.jpeg'
import Sp3 from '../assets/sponsors/jump.jpeg'
import Sp4 from '../assets/sponsors/sweden.jpeg'
import Sp5 from '../assets/sponsors/fojo.jpeg'
import Sp6 from '../assets/sponsors/women-in-news.jpeg'



const Footer = () => {
  return (
    <footer>
        <h1 className='text-[50px] text-start pl-10 p-4 mt-3 uppercase font-bold opacity-40'>Supported by</h1>
        <div className="sponsor-logo grid grid-cols-3 space-x-10 space-y-10 ">
          <img className='mt-12 ml-4' src={Sp1} alt="" />
          <img src={Sp2} alt="" />
          <img src={Sp3} alt="" />
          <img src={Sp4} alt="" />
          <img src={Sp5} alt="" />
          <img src={Sp6} alt="" />
        </div>

        <div className="links flex gap-8 p-10 mt-8 bg-[#581664] text-white">
          <p className='text-[20px] p-2'>&copy; Copywright Awim2022</p>
          <Link to='https://www.facebook.com/aficanwomeninmedia'>
            <FaFacebook  className='text-[40px]'/>
          </Link>
          <Link to='https://www.instagram.com/aficanwomeninmedia'>
            <GrInstagram className='text-[40px]' />
          </Link>
          <Link to='https://www.instagram.com/aficanwomeninmedia'>
            <AiFillTwitterCircle className='text-[40px]' />
          </Link>
        </div>
    </footer>
  )
}

export default Footer