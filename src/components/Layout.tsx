import React from 'react';
import Navigation from './Navigation';
import { Segment, Container } from 'semantic-ui-react';
import PageHeader from './PageHeader';
import Head from './Head';

const Layout = ({ children, title }: { children?: any; title: string }) => {
  const pageTitle = `Set Tracker - ${title}`;

  return (
    <div>
      <Head title={pageTitle} />
      <Navigation />
      <Container textAlign="center" style={{ marginTop: '2em' }}>
        <PageHeader title={title} />
        {children}
      </Container>
    </div>
  );
};

export default Layout;
