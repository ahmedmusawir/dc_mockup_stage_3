import React from 'react';
import Head from 'next/head';
import Router from 'next/router';
import NProgress from 'nprogress';
import { Footer, Header, Main } from 'components/layout';
import { FooterContent } from 'components/general';

Router.onRouteChangeStart = url => {
  NProgress.start();
};
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

export const Layout = ({ children, title, description }) => (
  <React.Fragment>
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Head>
    <Header />
    <Main>{children}</Main>
    <Footer>
      <FooterContent />
    </Footer>
  </React.Fragment>
);

export default Layout;
