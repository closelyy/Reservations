import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ModalContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: ${(props) => (props.showModal ? 1 : 0)};
  visibility: ${(props) => (props.showModal ? 'visible' : 'hidden')};
  transform: scale(1.0);
  transition: visibility 0s linear 0.25s, opacity 0.25s 0s, transform 0.25s;
`;

const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 1rem 1.5rem;
  width: 24rem;
  border-radius: 0.5rem;
`;

const CloseButton = styled.span`
  float: right;
  width: 1.5rem;
  line-height: 1.5rem;
  text-align: center;
  cursor: pointer;
  border-radius: 0.25rem;
  background-color: lightgray;
`;

const ModalText = styled.h1`
`;

const Modal = ({ showModal, hideModal }) => (
  <ModalContainer showModal={showModal}>
    <ModalContent>
      <CloseButton onClick={hideModal}>&times;</CloseButton>
      <ModalText>Hello World!</ModalText>
    </ModalContent>
  </ModalContainer>
);

Modal.propTypes = {
  showModal: PropTypes.bool.isRequired,
  hideModal: PropTypes.func.isRequired,
};

export default Modal;
