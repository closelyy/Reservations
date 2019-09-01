import styled from 'styled-components';

const Div = styled.div`
`;

const ComponentContainer = styled(Div)`
  border-radius: 2%;
  border: 2px solid #e6e6e6;
  width: 25%;
  padding: 1%;
  text-align: center;
`;

const CalendarContainer = styled(Div)`
  position: absolute;
`;

const Days = styled(Div)`
  color: black;
`;

const Month = styled(Div)`
  background: cornsilk;
  text-align: center;
`;

const GridContainer = styled(Div)`
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
