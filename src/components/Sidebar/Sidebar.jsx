import React from 'react';
import { NavLink } from 'react-router-dom';
import { MdDashboard } from 'react-icons/md';
import { FaUsers } from 'react-icons/fa';
import { AiTwotoneShop, AiFillIdcard, AiFillSetting } from 'react-icons/ai';
import { TbTruckDelivery } from 'react-icons/tb';
import { IoMdStats, IoIosNotifications } from 'react-icons/io';
import { CgProfile } from 'react-icons/cg';

import './Sidebar.scss';



const Sidebar = () => {
  return (
    <div className='app__sidebar'>
      <div className="logo">
        <span>admin</span>
      </div>

      <div className="menu">
        <ul className='menu-list'>
          <ul>
            <span>MAIN</span>
            <li><NavLink className='link'><MdDashboard className='icon' size={ 20 } /> Dashboard</NavLink></li>
          </ul>

          <ul>
            <span>LISTS</span>
            <li><NavLink className='link'><FaUsers className='icon' size={ 20 } /> Users</NavLink></li>
            <li><NavLink className='link'><AiTwotoneShop className='icon' size={ 20 } /> Products</NavLink></li>
            <li><NavLink className='link'><AiFillIdcard  className='icon' size={ 20 } /> Orders</NavLink></li>
            <li><NavLink className='link'><TbTruckDelivery  className='icon' size={ 20 } /> Delivery</NavLink></li>
          </ul>

          <ul>
            <span>USEFUL</span>
            <li><NavLink className='link'><IoMdStats className='icon' size={ 20 } /> Status</NavLink></li>
            <li><NavLink className='link'><IoIosNotifications className='icon' size={ 20 } /> Notifications</NavLink></li>
          </ul>

          <ul>
            <span>SERVICE</span>
            <li><NavLink className='link'><AiFillSetting className='icon' size={ 19 } /> System Health</NavLink></li>
            <li><NavLink className='link'><AiFillSetting className='icon' size={ 19 } /> Logs</NavLink></li>
            <li><NavLink className='link'><AiFillSetting className='icon' size={ 19 } /> Settings</NavLink></li>
          </ul>

          <ul>
            <span>USER</span>
            <li><NavLink className='link'><CgProfile className='icon' size={ 19 } /> Profile</NavLink></li>
            <li><NavLink className='link'><CgProfile className='icon' size={ 19 } /> Logout</NavLink></li>
          </ul>
        </ul>
      </div>

      <div className="theme">
        <span>THEME</span>
        <div className='options'>
          <div className="option" />
          <div className="option" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;