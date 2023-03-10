import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilUserFollow,
  cilUser,
  cilPencil,
  cilUserX
} from '@coreui/icons'
import { CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavTitle,
    name: 'Utente',
  },
  {
    component: CNavItem,
    name: 'Utentes',
    to: '/utente',
    icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Registo Utente',
    to: '/add',
    icon: <CIcon icon={cilUserFollow} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Questionários',
  },
  {
    component: CNavItem,
    name: 'Questionário Geral',
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
