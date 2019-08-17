import { longestPalindrome } from 'manacher';

/**
 * Character propreties.
 */
export interface Character {
  value: string;
  isPalindrome: boolean;
}

/**
 * Character propreties.
 */
export interface PalindromeResult {
  /** Whether or not the string is a palindrome */
  isPalindrome: boolean;

  /** value split into characters and marked correct/incorrect as to whether
   *  they are part of a palindrome
   * */
  characters: Character[];
}

/**
 * Analyzes the passed string to check if its a palindrome
 * Each letter is marked as whether or not it is part of a palindrome/subpalindrome
 * e.g. if str = pool then the two o's are marked.
 */
export default (str: string): PalindromeResult => {
  const value = str.toLowerCase().replace(/[^0-9a-z]/gi, '');

  const characters: Character[] = [];
  // Empty string and one letter strings are palindromes
  if (value.length <= 1) {
    characters.push({ value, isPalindrome: true });
    return { isPalindrome: true, characters };
  }
  // Split the input into characters (so individual characters can be shown)
  // as correct or incorrect
  value
    .split('')
    .forEach(character =>
      characters.push({ value: character, isPalindrome: false })
    );

  // Find the longest subpalindrome
  const palindrome = longestPalindrome(value);
  const match = value.match(palindrome);
  // single character subpalindromes are not correct
  if (match === null || palindrome.length <= 1) {
    return { isPalindrome: false, characters };
  }
  // Mark the substring containing the result as correct
  const start = match.index;
  const end = start + palindrome.length;
  const chars = characters.slice(start, end);
  chars.forEach((_, i) => {
    chars[i].isPalindrome = true;
  });
  // if the entire string is not a palindrome, mark the result as incorrect
  return {
    characters,
    isPalindrome: start === 0 && end === value.length,
  };
};
