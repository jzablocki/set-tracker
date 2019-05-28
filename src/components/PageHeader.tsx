import React from 'react';
import { Header } from 'semantic-ui-react';

const PageHeader = ({ title }: { title: string }) => {
  return <Header as="h1">{title}</Header>;
};

export default PageHeader;
