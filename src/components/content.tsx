import { css } from '@emotion/core';
import React from 'react';
import { Col, Container, Jumbotron, Row } from 'reactstrap';

const jumbotronStyle = css`
  padding: 24px 30px;
`;

const containerStyle = css`
  height: calc(100vh - 60px);
`;

const rowStyle = css`
  height: 75%;
`;

/**
 * Content propreties.
 */
export interface ContentProps {
  /** header text */
  title: string;
  /** content to be displayed */
  children: React.ReactNode;
}

/**
 * Page content with title.
 */
const Content: React.FC<ContentProps> = ({ title, children }: ContentProps) => (
  <Container css={containerStyle}>
    <Row className="justify-content-center align-items-center" css={rowStyle}>
      <Col>
        <Jumbotron css={jumbotronStyle}>
          <h1>{title}</h1>
          {children}
        </Jumbotron>
      </Col>
    </Row>
  </Container>
);

export default Content;
