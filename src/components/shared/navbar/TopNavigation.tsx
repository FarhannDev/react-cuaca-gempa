import { Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const TopNavigation = () => {
  const [expanded] = useState(false);

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
          Weather Forecast
        </Link>

        {/* <Navbar.Toggle
          onClick={() => setExpanded(expanded ? false : true)}
          aria-controls="responsive-navbar-nav"
        >
          <RxHamburgerMenu fontSize={22} color="fff" />
        </Navbar.Toggle> */}
        {/* <Navbar.Collapse id="responsive-navbar-nav">
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
        </Navbar.Collapse> */}
      </Container>
    </Navbar>
  );
};
export default TopNavigation;
