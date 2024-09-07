import * as React from 'react';
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import TopNavigation from '../components/shared/navbar/TopNavigation';

const RootLayout: React.FC = () => (
  <>
    {/* Rendered Content Start */}
    <TopNavigation />

    <main className="main-content">
      <Container className="main-content-container">
        <Outlet />
      </Container>
    </main>
    {/* Rendered Content End */}
  </>
);

export default RootLayout;
