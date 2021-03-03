import styled from "styled-components";

export const Backdrop = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #000;
  opacity: 0.5;
  z-index: 1000;
`;

export const ModalTask = styled.div`
  width: 800px;
  height: 200px;
  position: fixed;
  top: calc(50vh - 100px);
  left: calc(50vw - 400px);
  border-radius: 5px;
  background-color: #ffffff;
  z-index: 1500;

  form {
    width: 100%;
    height: 100%;
    position: relative;
    display: grid;
    justify-content: center;
    align-content: center;
    gap: 10px;
  }

  input {
    border: 2px solid #130e38;
    border-radius: 5px;
  }

  .error {
    font-size: 13px;
    font-weight: 600;
    color: #ff0000;
    opacity: 0.8;
  }

  .submit-button {
    width: 180px;
    height: 30px;
    justify-self: center;
    color: #ffffff;
    background-color: #130e38;
  }
  .submit-button:disabled {
    opacity: 0.5;
  }

  .close-button {
    width: 35px;
    height: 35px;
    position: relative;
    top: 0;
    left: 95%;
    border-radius: 50%;
  }

  svg {
    width: 40%;
    height: 40%;
    fill: #160f46;
  }

  p{
  font-size: 15px;
    padding-bottom: 5px;
    color: #130e38;
}
`;
