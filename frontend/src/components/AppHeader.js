import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {
  CContainer,
  CHeader,
  CHeaderBrand,
  CHeaderDivider,
  CHeaderNav,
  CHeaderToggler,
  CNavLink,
  CNavItem,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilBell, cilEnvelopeOpen, cilList, cilMenu } from '@coreui/icons'

import { AppBreadcrumb } from './index'
import { AppHeaderDropdown } from './header/index'
import logo from '../assets/bee/bee1.png';

const AppHeader = () => {
  const dispatch = useDispatch()
  const sidebarShow = useSelector((state) => state.sidebarShow)

  return (
    <CHeader position="sticky" className="mb-5">
      <CContainer>
        <CHeaderNav className="d-none d-md-flex me-auto align-items-center">
        <CNavItem>
          <CNavLink to="/" component={NavLink}>
            <img src={logo} alt="Logo" width="150" />
          </CNavLink>
        </CNavItem>
        <CNavItem className="mx-3">
          <CNavLink to="/desmistificação" component={NavLink} style={{ fontSize: '18px', color: 'black' }}>
            Facto ou Mito?
          </CNavLink>
          </CNavItem>
          <CNavItem className="mx-3">
          <CNavLink href="#" style={{ fontSize: '18px', color: 'black' }}>
            Users
          </CNavLink>
        </CNavItem>
        <CNavItem className="mx-3">
          <CNavLink href="#" style={{ fontSize: '18px', color: 'black' }}>
            Settings
          </CNavLink>
        </CNavItem>
        </CHeaderNav>
        <CHeaderNav>
          <CNavItem>
            <CNavLink href="#">
              <CIcon icon={cilBell} size="lg" />
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#">
              <CIcon icon={cilList} size="lg" />
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#">
              <CIcon icon={cilEnvelopeOpen} size="lg" />
            </CNavLink>
          </CNavItem>
        </CHeaderNav>
        <CHeaderNav className="ms-3">
          <AppHeaderDropdown />
        </CHeaderNav>
      </CContainer>
    </CHeader>
  )
}

export default AppHeader
