import styled from 'styled-components';

const Button = styled.button`
`;

const FindButton = styled(Button)`
  background-color: #d32323;
  border: 1px solid #d32323;
  width: 96%;
  height: 40%;
  color: #fff;
  border-radius: 2px;
`;

const DayButton = styled(Button)`
  grid-column: ${(props) => (props.firstChild ? 3 : 'auto')};
  border: 0;
  border-radius: 50%;
  background-color: ${(props) => (props.firstChild ? 'red' : 'green')};;
  position: relative;
`;

export {
  FindButton,
  DayButton,
};
