import findPalindromes from './findPalindromes';

test('tests "pool"', () => {
  const { isPalindrome, characters } = findPalindromes('pool');
  expect(isPalindrome).toEqual(false);
  expect(characters).toEqual([
    { value: 'p', isPalindrome: false },
    { value: 'o', isPalindrome: true },
    { value: 'o', isPalindrome: true },
    { value: 'l', isPalindrome: false },
  ]);
});

test('tests "racecar"', () => {
  const { isPalindrome, characters } = findPalindromes('racecar');
  expect(isPalindrome).toEqual(true);
  expect(characters).toEqual([
    { value: 'r', isPalindrome: true },
    { value: 'a', isPalindrome: true },
    { value: 'c', isPalindrome: true },
    { value: 'e', isPalindrome: true },
    { value: 'c', isPalindrome: true },
    { value: 'a', isPalindrome: true },
    { value: 'r', isPalindrome: true },
  ]);
});

test('tests "civic"', () => {
  const { isPalindrome, characters } = findPalindromes('civic');
  expect(isPalindrome).toEqual(true);
  expect(characters).toEqual([
    { value: 'c', isPalindrome: true },
    { value: 'i', isPalindrome: true },
    { value: 'v', isPalindrome: true },
    { value: 'i', isPalindrome: true },
    { value: 'c', isPalindrome: true },
  ]);
});
test('tests "civics"', () => {
  const { isPalindrome, characters } = findPalindromes('civics');
  expect(isPalindrome).toEqual(false);
  expect(characters).toEqual([
    { value: 'c', isPalindrome: true },
    { value: 'i', isPalindrome: true },
    { value: 'v', isPalindrome: true },
    { value: 'i', isPalindrome: true },
    { value: 'c', isPalindrome: true },
    { value: 's', isPalindrome: false },
  ]);
});
