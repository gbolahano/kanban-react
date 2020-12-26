import React from 'react';
import lekki from '../../assets/lekki.jpg';
import { Container, SidebarNav, StyledLink, Top } from './Styles';

const Sidebar = () => {
  return (
      <Container>
        <Top>
          <img src={lekki} alt="ic"/>
          <div>
            <h3>Kanban board</h3>
            <span>Software roject</span>
          </div>
        </Top>

        <SidebarNav>
          <ul>
            <li>
              <StyledLink active to="/project/board">
                <span class="lnr icon-custom lnr-layers"></span>
                Kanban Board
              </StyledLink>
            </li>
            <li>
              <StyledLink to="/project/settings">
                <span class="lnr icon-custom lnr-cog"></span>
              Project Settings
              </StyledLink>
            </li>
          </ul>
        </SidebarNav>

        <hr />

        <SidebarNav>
          <ul>
            <li>
              <StyledLink to="#">
                <span class="lnr icon-custom lnr-book"></span>
                Releases
              </StyledLink>
            </li>
            <li>
              <StyledLink to="#">
                <span class="lnr icon-custom lnr-page-break"></span>
                Issues and filters
              </StyledLink>
            </li>
            <li>
              <StyledLink to="#">
                <span class="lnr icon-custom lnr-dice"></span>
                Pages
              </StyledLink>
            </li>
            <li>
              <StyledLink to="#">
                <span class="lnr icon-custom lnr-sort-amount-asc"></span>
                Reports
              </StyledLink>
            </li>
            <li>
              <StyledLink to="#">
                <span class="lnr icon-custom lnr-database"></span>
                Components
              </StyledLink>
            </li>
          </ul>
        </SidebarNav>
      </Container>
   );
}

export default Sidebar;