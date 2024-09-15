import React from 'react'
import logo from '../assets/logo.png'
import 
{ BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsFillGearFill ,BsCartPlus,BsGraphUpArrow}
 from 'react-icons/bs'
import { TbLogout } from "react-icons/tb";
import { FaMessage } from "react-icons/fa6";

function Sidebar() {
  return (
    <aside id="sidebar">
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                <img src={logo} alt={logo} height={70} width={150}/>
            </div>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsGrid1X2Fill className='icon'/> Dashboard
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsFillGrid3X3GapFill className='icon'/> Leaderboard
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsCartPlus className='icon'/> Order
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsFillArchiveFill className='icon'/> Products
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsGraphUpArrow className='icon'/> Sales Report
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <FaMessage className='icon'/> Messages
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsFillGearFill className='icon'/> Setting
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <TbLogout className='icon'/> Sign Out
                </a>
            </li>
        </ul>
    </aside>
  )
}

export default Sidebar
