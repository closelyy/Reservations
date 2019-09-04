
const DropDown = window.styled.select`
  margin-bottom: 3%;
  background-color: white;
  border: 1px solid #999;
  width: ${(props) => (props.calendar ? '95%' : '47%')};
`;

const DropDownEntry = window.styled.option`
`;

export {
  DropDown,
  DropDownEntry,
};
