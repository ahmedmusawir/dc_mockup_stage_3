import React from 'react';
import { Footer, Header, Main } from 'components/layout';
import { FooterContent } from 'components/general';

export const Layout = ({ children }) => (
  <React.Fragment>
    <Header />
    <Main>{children}</Main>
    <Footer>
      <FooterContent />
    </Footer>
  </React.Fragment>
);

export default Layout;
