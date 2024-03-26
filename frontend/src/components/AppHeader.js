import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  CContainer,
  CHeader,
  CHeaderNav,
  CNavItem,
  CNavLink,
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { cilMagnifyingGlass } from '@coreui/icons';

import { AppHeaderDropdown } from './header/index';
import logo from '../assets/bee/bee1.png';

const AppHeader = () => {
  const dispatch = useDispatch();

  return (
    <CHeader position="sticky" className="mb-5">
      <CContainer>
        <CHeaderNav className="d-flex align-items-center">
          <CNavItem>
            <CNavLink to="/" component={NavLink}>
              <img src={logo} alt="Logo" width="150" />
            </CNavLink>
          </CNavItem>
          <CNavItem className="mx-3 desktop-nav-item">
            <CNavLink to="/tweetstats_worldwide" component={NavLink} style={{ fontSize: '18px', color: 'black' }} size="lg">
              TweetStats Worldwide
            </CNavLink>
          </CNavItem>
          <CNavItem className="mx-3 desktop-nav-item">
            <CNavLink to="/perspectives_updates" component={NavLink} style={{ fontSize: '18px', color: 'black' }} size="lg">
              Perspectives and Updates
            </CNavLink>
          </CNavItem>
          <CNavItem className="app-header-dropdown ml-auto">
          <AppHeaderDropdown /></CNavItem>
        </CHeaderNav>
      </CContainer>
    </CHeader>
  );
};

export default AppHeader;
