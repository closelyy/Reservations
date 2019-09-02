import styled from 'styled-components';

const FindButton = styled.button`
  background-color: #d32323;
  border: 1px solid #d32323;
  width: 96%;
  height: 40%;
  color: #fff;
  border-radius: 2px;
`;

const DayButton = styled.button`
  grid-column: ${(props) => (props.index === 0 ? 3 : 'auto')};
  border: 0;
  border-radius: 50%;
  background-color: transparent;
  position: relative;
`;

export {
  FindButton,
  DayButton,
};
