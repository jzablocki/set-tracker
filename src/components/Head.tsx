import React from 'react';
import { Helmet } from 'react-helmet';

const Head = ({ title }: { title: string }) => {
  return <Helmet title={title} />;
};

export default Head;
