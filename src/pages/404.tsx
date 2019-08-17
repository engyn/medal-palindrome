import React from 'react';

import Content from '../components/content';
import Layout from '../components/layout';

const NotFoundPage: React.FC = () => (
  <Layout>
    <Content title="Page not found!">
      <p className="lead">
        Oops, you&apos;ve navigated to a page that doesn&apos;t exist.
      </p>
    </Content>
  </Layout>
);

export default NotFoundPage;
