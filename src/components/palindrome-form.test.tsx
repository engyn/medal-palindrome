import { fireEvent, render, waitForElement } from '@testing-library/react';
import React from 'react';

import PalindromeForm from './palindrome-form';

test('value should contain pool', () => {
  const utils = render(<PalindromeForm />);
  const input = utils.getByPlaceholderText('Enter text...') as HTMLInputElement;

  fireEvent.change(input, { target: { value: 'pool' } });
  expect(input.value).toBe('pool');
});

test('modal should appear on submit click', async () => {
  const { getByLabelText, getByText } = render(<PalindromeForm />);
  const input = getByLabelText('input') as HTMLInputElement;

  fireEvent.change(input, { target: { value: 'pool' } });
  fireEvent.click(getByText('Submit!'));

  await waitForElement(() => getByLabelText('modal'));
});

test('modal should appear on enter press', async () => {
  const { getByLabelText } = render(<PalindromeForm />);
  const input = getByLabelText('input') as HTMLInputElement;

  fireEvent.change(input, { target: { value: 'pool' } });
  fireEvent.keyPress(input, { key: 'Enter', code: 13, charCode: 13 });

  await waitForElement(() => getByLabelText('modal'));
});

test('racecar should be a palindrome', async () => {
  const { getByLabelText, getByText, getAllByTestId } = render(
    <PalindromeForm />
  );
  const input = getByLabelText('input') as HTMLInputElement;

  fireEvent.change(input, { target: { value: 'racecar' } });
  fireEvent.click(getByText('Submit!'));

  await waitForElement(() => getByText("It's a palindrome!"));

  const letters = getAllByTestId('letter');
  expect(letters[0].textContent).toBe('r');
  expect(letters[1].textContent).toBe('a');
  expect(letters[2].textContent).toBe('c');
  expect(letters[3].textContent).toBe('e');
  expect(letters[4].textContent).toBe('c');
  expect(letters[5].textContent).toBe('a');
  expect(letters[6].textContent).toBe('r');

  expect(letters[0].className).toBe('text-success');
  expect(letters[1].className).toBe('text-success');
  expect(letters[2].className).toBe('text-success');
  expect(letters[3].className).toBe('text-success');
  expect(letters[4].className).toBe('text-success');
  expect(letters[5].className).toBe('text-success');
  expect(letters[6].className).toBe('text-success');
});

test('pool should not be a palindrome', async () => {
  const { getByLabelText, getByText, getAllByTestId } = render(
    <PalindromeForm />
  );
  const input = getByLabelText('input') as HTMLInputElement;

  fireEvent.change(input, { target: { value: 'pool' } });
  fireEvent.click(getByText('Submit!'));

  await waitForElement(() => getByText("Sorry, that's not a palindrome."));

  const letters = getAllByTestId('letter');
  expect(letters[0].textContent).toBe('p');
  expect(letters[1].textContent).toBe('o');
  expect(letters[2].textContent).toBe('o');
  expect(letters[3].textContent).toBe('l');

  expect(letters[0].className).toBe('text-danger');
  expect(letters[1].className).toBe('text-success');
  expect(letters[2].className).toBe('text-success');
  expect(letters[3].className).toBe('text-danger');
});
