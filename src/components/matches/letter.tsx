import { css } from '@emotion/core';
import React from 'react';

import { Character } from '../../utils/findPalindromes';

/**
 * Letter propreties.
 */
export interface LetterProps extends Character {
  /** Numeric value for percent width */
  width: number;
}

/**
 * Displays the passed character
 */
const Letter: React.FC<LetterProps> = ({
  value,
  isPalindrome,
  width,
}: LetterProps) => {
  // Evenly space two separators before and after the character
  const letterStyle = css`
    width: 1rem;
    height: 1rem;
    text-align: center;
    &::before {
      content: '';
      width: calc((${width.toFixed(2)}% - 0.5rem) / 2);
      display: inline-block;
    }
    &::after {
      content: '';
      width: calc((${width.toFixed(2)}% - 0.5rem) / 2);
      display: inline-block;
    }
  `;
  return (
    <span
      className={isPalindrome ? 'text-success' : 'text-danger'}
      css={letterStyle}
    >
      {value}
    </span>
  );
};

export default Letter;
