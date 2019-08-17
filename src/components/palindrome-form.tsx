import { css } from '@emotion/core';
import React, { useState } from 'react';

import findPalindromes, { Character } from '../utils/findPalindromes';
import Matches from './matches';
import Modal from './modal';
import TextInput from './text-input';

const CorrectTitle = (
  <h2 className="modal-title text-success">It&apos;s a palindrome!</h2>
);
const WrongTitle = (
  <h2 className="modal-title text-danger">
    Sorry, that&apos;s not a palindrome.
  </h2>
);

/**
 * Form for entering text and checking whether its a palindrome
 */
const PalindromeForm: React.FC = () => {
  const [value, setValue] = useState('');
  const [showError, setShowError] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // Output from Palindrome utility class
  const [isPalindrome, setIsPalindrome] = useState(false);
  const [characters, setCharacters] = useState<Character[]>([]);

  const toggleModal = (): void => {
    setShowModal(!showModal);
  };

  // Sets new value on change and resets the validation error
  const onChange = (newValue): void => {
    if (showError) {
      setShowError(false);
    }
    setValue(newValue);
  };

  // Handles validation, analyzes input, and displays the modal
  const onSubmit = (): void => {
    if (!value.length) {
      setShowError(true);
      return;
    }
    const result = findPalindromes(value);
    setIsPalindrome(result.isPalindrome);
    setCharacters(result.characters);
    toggleModal();
  };

  return (
    <>
      <p className="lead">
        Type or paste text and click submit or press enter to check if it is a
        palindrome!
      </p>
      <hr className="my-2" />
      <TextInput
        value={value}
        placeholder="Enter text..."
        onChange={onChange}
        onSubmit={onSubmit}
      />
      <div
        className="text-danger"
        css={css`
          margin-top: 0.25rem;
          font-size: 80%;
          display: ${showError ? 'block' : 'none'};
        `}
      >
        Please enter some alphanumeric characters.
      </div>
      <Modal
        show={showModal}
        toggle={toggleModal}
        title={isPalindrome ? CorrectTitle : WrongTitle}
      >
        <Matches characters={characters} />
      </Modal>
    </>
  );
};

export default PalindromeForm;
