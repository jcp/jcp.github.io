import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Particles from '../components/particles';

const Layout = ({ children }) => (
  <>
    <main>
      <Header />
      <section>{children}</section>
      <Particles />
      <Footer />
    </main>
  </>
);

export default Layout;
