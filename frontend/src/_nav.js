import React from 'react'
import CIcon from '@coreui/icons-react'
import {BsFileMedical} from 'react-icons/bs'
import {
  cilUserFollow,
  cilUser,
  cilPeople,
  cilNotes,
  cilZoom,
  cilClipboard
} from '@coreui/icons'
import { CNavItem, CNavTitle } from '@coreui/react'
import shoulderNav from '../src/assets/images/shoulder-nav.png'

const _nav = [
  {
    component: CNavTitle,
    name: 'Something',
  },
  {
    component: CNavItem,
    name: 'Facto ou Mito?',
    to: '/desmistificação',
    icon: <CIcon icon={cilZoom} customClassName="nav-icon" />,
  }
  /*
  {
    component: CNavItem,
    name: 'Fact or Cap',
    to: '/desmistificação',
    icon: (
      <img src={shoulderNav} alt="image" style={{ width: '11%', marginLeft: '6.5px', marginRight: '17px' }} />
    ),
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
