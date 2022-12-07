import React from 'react'
import { useState } from 'react';
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilBookmark,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDescription,
  cilDrop,
  cilNotes,
  cilPencil,
  cilUserX,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Consultas',
    to: '/consultas',
    icon: <CIcon icon={cilBookmark} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'EHR',
  },
  {
    component: CNavItem,
    name: 'Avaliação Inicial',
    to: '/avini',
    icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Avaliação Ombro',
    to: '/avombro',
    icon: <CIcon icon={cilUserX} customClassName="nav-icon" />,
  },
  /*{
    component: CNavGroup,
    name: 'Avaliação Inicial',
    to: '/avini',
    icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Accordion',
        to: '/base/accordion',
      },
    ],
  },*/

]

export default _nav
