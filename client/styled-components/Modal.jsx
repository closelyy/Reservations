import React from 'react';
import PropTypes from 'prop-types';

const cd = require('../CalendarData/CalendarData').default;

const ModalContainer = window.styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: ${(props) => (props.showModal ? 1 : 0)};
  visibility: ${(props) => (props.showModal ? 'visible' : 'hidden')};
  transform: scale(1.0);
  z-index: 9999;
  transition: visibility 0s linear 0.25s, opacity 0.25s 0s, transform 0.25s;
`;

const ModalContent = window.styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 3%;
  width: 60%;
  text-align: center;
  border-radius: 2px;
`;

const CloseButton = window.styled.span`
  float: right;
  width: 1.5rem;
  line-height: 1.5rem;
  text-align: center;
  cursor: pointer;
  border-radius: 0.25rem;
`;

const OpenTimes = window.styled.div`
  background-color: #0097ec;
  color: #fff;
  display: inline-block;
  text-align: center;
  border-radius: 2px;
  padding: 1%;
  margin: 1%;
  font-family: Arial;
`;

const Date = window.styled.div`
  display: inline-flex;
  font-family: Arial;
  justify-content: left;
`;

const Header = window.styled.h3`
  font-family: Arial;
  padding: 0;
`;

const Modal = ({
  showModal, hideModal, openTimes, selectedDate,
}) => (
  <ModalContainer showModal={showModal}>
    <ModalContent>
      <Header>Available Times</Header>
      <CloseButton onClick={hideModal}>&times;</CloseButton>
      <Date>
        {selectedDate || cd.currentDay}
      </Date>
      &nbsp;
      &nbsp;
      {openTimes.map((time) => <OpenTimes key={time}>{time}</OpenTimes>)}
    </ModalContent>
  </ModalContainer>
);

Modal.propTypes = {
  openTimes: PropTypes.arrayOf(PropTypes.string).isRequired,
  showModal: PropTypes.bool.isRequired,
  hideModal: PropTypes.func.isRequired,
  selectedDate: PropTypes.string,
};

Modal.defaultProps = {
  selectedDate: cd.currentDay,
};

export default Modal;
