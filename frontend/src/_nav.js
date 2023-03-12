import React from 'react'
import CIcon from '@coreui/icons-react'
import {BsFileMedical} from 'react-icons/bs'
import {
  cilUserFollow,
  cilUser,
  cilPeople,
  cilNotes,
  cilClipboard
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
    to: '/',
    icon: <CIcon icon={cilPeople} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Registo de Utentes',
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
    icon: <CIcon icon={cilClipboard} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Avaliação do Ombro',
    to: '/avombro',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
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
