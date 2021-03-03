import styled from 'styled-components';

export const Container = styled.div `
width: 540px;
height: 30px;
padding: 4px 10px;
display: flex;
grid-auto-flow: column;
justify-content: space-between;
align-content: center;
border: 2px solid #130e38;
border-radius: 5px;

.ok {
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
  background-color: #ffd7eb;
  box-shadow: inset 0px 0px 4px 2px #eeecfb;
}

svg{
  width: 60%;
  height: 60%;
  fill: #160f46;
}

input[type="checkbox"]{
  width: 40px;
  height: 20px;
  position: relative;
  border-radius: 5px;
  background-color: #ffd7eb;
  box-shadow: inset 0px 0px 4px 2px #eeecfb;
  appearance: none;
  cursor: pointer;
}

input[type="checkbox"]:checked{
  background-color: #ff158a;
  box-shadow: inset 0px 0px 4px 2px #eeecfb;
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
