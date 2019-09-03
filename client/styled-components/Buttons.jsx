import styled from 'styled-components';
import React from 'react';

const FindTableButton = styled.button`
  background-color: #d32323;
  border: 1px solid #d32323;
  width: 96%;
  height: 40%;
  color: #fff;
  border-radius: 2px;
`;

const FindButton = () => (
  <FindTableButton>Find a Table</FindTableButton>
);

export default FindButton;
