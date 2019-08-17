import { css } from '@emotion/core';
import React from 'react';
import shortid from 'shortid';

import { Character } from '../../utils/findPalindromes';
import Letter from './letter';

const containerStyle = css`
  font-size: 1rem;
  width: 100%;
`;

/**
 * Matches propreties.
 */
export interface MatchesProps {
  /** array of Character objects to be displayed */
  characters: Character[];
}

/**
 * Displays the passed list of characters.
 */
const Matches: React.FC<MatchesProps> = ({ characters }: MatchesProps) => {
  // Evently space the letters to take up 100% of the horizontal space
  const width = 100 / characters.length;
  const letters = characters.map(character => (
    <Letter key={shortid.generate()} {...character} width={width} />
  ));
  return <div css={containerStyle}>{letters}</div>;
};

export default Matches;
