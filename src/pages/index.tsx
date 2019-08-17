import React from 'react';

import Content from '../components/content';
import Layout from '../components/layout';
import PalindromeForm from '../components/palindrome-form';

const IndexPage: React.FC = () => {
  return (
    <Layout>
      <Content title="Palindrome Checker">
        <PalindromeForm />
      </Content>
    </Layout>
  );
};

export default IndexPage;
