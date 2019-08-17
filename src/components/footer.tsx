import { css } from '@emotion/core';
import React from 'react';
import { Container } from 'reactstrap';

const footerStyle = css`
  padding: 24px 30px;
  position: absolute;
  bottom: 0;
  width: 100%;
`;

const copyrightStyle = css`
  float: right;
  font-size: 0.75em;
  line-height: 1.8;
  @media (min-width: 768px) {
    margin-top: 5px;
  }
  @media (max-width: 480px) {
    float: none;
    text-align: center;
  }
`;

/**
 * Footer propreties.
 */
export interface FooterProps {
  /** text to be displayed */
  text: string;
}

/**
 * Page footer.
 */
const Footer: React.FC<FooterProps> = ({ text }: FooterProps) => (
  <footer css={footerStyle}>
    <Container fluid>
      <div css={copyrightStyle}>{text}</div>
    </Container>
  </footer>
);

export default Footer;
