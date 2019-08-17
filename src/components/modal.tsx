import { css } from '@emotion/core';
import React from 'react';
import {
  Button,
  ModalBody,
  Modal as ModalContainer,
  ModalFooter,
  ModalHeader,
} from 'reactstrap';

const containerStyle = css`
  top: calc(-0.11 * (100vh - 60px));
`;

/**
 * Modal propreties.
 */
export interface ModalProps {
  /** whether or not the modal is shown */
  show: boolean;
  /** function that toggles the passed show variables */
  toggle: () => void;
  /** Modal title */
  title: string | React.ReactNode;
  /** Modal content */
  children: React.ReactNode;
}

/**
 * Modal component with cancel button
 */
const Modal: React.FC<ModalProps> = ({
  show,
  toggle,
  title,
  children,
}: ModalProps) => {
  return (
    <ModalContainer isOpen={show} toggle={toggle} centered css={containerStyle}>
      {typeof title === 'string' ? (
        <ModalHeader>{title}</ModalHeader>
      ) : (
        <div className="modal-header">{title}</div>
      )}
      <ModalBody>{children}</ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </ModalContainer>
  );
};

export default Modal;
