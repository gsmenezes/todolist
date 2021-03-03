import styled from 'styled-components';

export const Container = styled.li `
width: 540px;
height: 30px;
padding: 0 10px;
display: flex;
grid-auto-flow: column;
justify-content: space-between;
align-content: center;
border: 2px solid #130e38;
border-radius: 5px;

.complete {
  text-decoration: line-through;
}
`;

export const ControlButtons = styled.div `
display: grid;
grid-auto-flow: column;
justify-content: center;
align-content: center;
gap: 5px;

button{
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #ff8ac5;
  box-shadow: inset 0px 0px 4px 2px #c10061;
}

svg{
  width: 50%;
  height: 50%;
  fill: #160f46;
}

input[type="checkbox"]{
  width: 40px;
  height: 20px;
  position: relative;
  border-radius: 5px;
  background-color: #eeecfb;
  box-shadow: inset 0px 0px 4px 2px #c10061;
  appearance: none;
  cursor: pointer;
}

input[type="checkbox"]:checked{
  background-color: #ff158a;
  box-shadow: inset 0px 0px 4px 2px #c10061;
}

input[type="checkbox"]::before{
  content: '';
  width: 20px;
  height: 20px;
  position: absolute;
  top: 0%;
  left: 0;
  border-radius: 50%;
  background-color: #ff158a;
  box-shadow: inset 0px 0px 4px 2px #c10061;
  transform: scale(1.1);
  transition: all 400ms;
}

input[type="checkbox"]:checked::before{
  left: 20px;
}
`;
