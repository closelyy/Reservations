import styled from 'styled-components';

const DropDown = styled.select`
  margin-bottom: ${(props) => (props.calendar ? '3%' : '0')};
  background-color: white;
  border: 1px solid black;
  width: ${(props) => (props.calendar ? '95%' : '47%')};
`;

export default DropDown;
