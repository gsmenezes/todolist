import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;

}

html, body, #root {
overflow: auto;

::-webkit-scrollbar {
    width: 8px;

}

::-webkit-scrollbar-thumb{
    background-color: #00AEEF;
    border-radius: 6px;
}

::-webkit-scrollbar-track{
    background-color: #040BB2;
}
}

*, button, input {
    border: 0;
    outline: 0;
    font-family: 'Montserrat', sans-serif;
    -webkit-font-smoothing: antialiased;
    font-weight: 500;
}

button {
    cursor: pointer;
}
`;
