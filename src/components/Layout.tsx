import React from 'react';
import Navigation from './Navigation';
import PageHeader from './PageHeader';
import Head from './Head';

const Layout = ({ children, title }: { children?: any; title: string }) => {
  const pageTitle = `Set Tracker - ${title}`;

  return (
    <div>
      <Head title={pageTitle} />
      <Navigation>
        <PageHeader title={title} />
        {children}
      </Navigation>
    </div>
  );
};

export default Layout;
