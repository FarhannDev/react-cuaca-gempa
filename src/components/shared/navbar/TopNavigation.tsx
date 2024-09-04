import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { RxHamburgerMenu } from 'react-icons/rx';
import { useState } from 'react';
import { menuListItem } from '../../../models/menuListModel';

const TopNavigation = () => {
  const [expanded, setExpanded] = useState(false);
  const closeNavbar = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setExpanded(false);
  };

  return (
    <Navbar
      className="transparent navbar-inverse  border-bottom   border-dark"
      sticky="top"
      collapseOnSelect
      expand="lg"
      expanded={expanded}
    >
      <Container className="navbar-container__items ">
        <Link to="/" className="navbar-brand navbar-brand__text">
          Nama Aplikasi{' '}
        </Link>

        <Navbar.Toggle
          onClick={() => setExpanded(expanded ? false : true)}
          aria-controls="responsive-navbar-nav"
        >
          <RxHamburgerMenu fontSize={22} color="fff" />
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto justify-content-start">
            {menuListItem.map((menu, index) => (
              <Link
                key={+index}
                onClick={closeNavbar}
                to={menu.links}
                className="nav-link custom-nav__link mx-md-3 "
              >
                {menu.name}
              </Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default TopNavigation;
