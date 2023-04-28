import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { useState } from 'react';
import Calendar from 'react-calendar';

import { CSidebar, CSidebarBrand, CSidebarNav, CSidebarToggler } from '@coreui/react'

import { AppSidebarNav } from './AppSidebarNav'

import logo from '../assets/bee/bee.png'

import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'

// sidebar nav config
import navigation from '../_nav'

function Cal() {
  const [date, setDate] = useState(new Date());
 
  return (
    <div className='app'>
      <div className='calendar-container'>
        <Calendar onChange={setDate} value={date} />
      </div>
    </div>
  );
}

const AppSidebar = () => {
  const dispatch = useDispatch()
  const unfoldable = useSelector((state) => state.sidebarUnfoldable)
  const sidebarShow = useSelector((state) => state.sidebarShow)

  return (
    <CSidebar
      position="fixed"
      unfoldable={unfoldable}
    >
      <CSidebarBrand className="d-none d-md-flex" to="/">
        <img src={logo} alt="Logo" height='60' width='110' />
      </CSidebarBrand>
      <CSidebarNav>
        <br></br>
        <SimpleBar>
          <AppSidebarNav items={navigation} />
        </SimpleBar>
      </CSidebarNav>
    </CSidebar>
  )
}

export default React.memo(AppSidebar)
