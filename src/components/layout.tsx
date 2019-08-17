import React from 'react';

import Footer from './footer';
import NavBar from './navbar';

/**
 * Content propreties.
 */
export interface LayoutProps {
  children: React.ReactNode;
}

/**
 * Wrapper containing navbar and footer.
 * Shown on every page.
 */
const Layout: React.FC<LayoutProps> = ({ children }: LayoutProps) => {
  return (
    <>
      <NavBar />
      {children}
      <Footer text={`© ${new Date().getFullYear()} Kyle`} />
    </>
  );
};

export default Layout;
