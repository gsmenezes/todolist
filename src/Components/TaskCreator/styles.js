import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 125px;
  background-color: #00aeef;

  form {
    padding-top: 25px;
  }

  .taskform {
    display: grid;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }

  input {
    width: 420px;
    height: 30px;
    border-radius: 5px;
    padding-left: 10px;
    font-size: 15px;;
  }

  input::placeholder{
    color: #00aeef;
    opacity: 0.4;
  }

  .error {
    font-size: 13px;
    font-weight: 600;
    color: #ff0000;
    opacity: 0.8;
  }

  .submit-button{
    width: 180px;
    height: 30px;
    justify-self: center;
    font-size: 15px;
    color: #FFFFFF;
    background-color: #130e38;
    border-radius: 5px;
  }
  .submit-button:disabled{
    opacity: 0.5;
  }
`;