import styled from 'styled-components';

export const Container = styled.div `
position: fixed;
top: 140px;
left: 0;
width: 100%;
height: calc(100vh - 220px);
padding: 40px 60px;

ul{
  width: 100%;
  height: auto;
  display: grid;
  gap: 20px;
  list-style: none;
}
`;