import styled from '@emotion/styled';

const DropDown = styled.select`
  margin-bottom: 3%;
  background-color: white;
  border: 1px solid #999;
  width: ${(props) => (props.calendar ? '95%' : '47%')};
`;

const DropDownEntry = styled.option`
`;

export {
  DropDown,
  DropDownEntry,
};
