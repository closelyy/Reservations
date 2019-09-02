import styled from 'styled-components';

const ComponentContainer = styled.div`
  border-radius: 2%;
  border: 2px solid #e6e6e6;
  width: 25%;
  padding: 1%;
  text-align: center;
`;

const CalendarContainer = styled.div`
  position: fixed;
  min-width: 25%;
`;

const Days = styled.div`
  color: black;
`;

const Month = styled.div`
  background: cornsilk;
  text-align: center;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  z-index: 10;
  text-align: center;
  background-color: cornsilk;
  color: white;
`;

export {
  ComponentContainer,
  CalendarContainer,
  Days,
  Month,
  GridContainer,
};
