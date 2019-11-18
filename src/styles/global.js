import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body {
        -webkit-font-smoothing: antialiased;
    }

    body, input, button {
      background: linear-gradient(-90deg, #111, #000);
        font: 14px Roboto, sans-serif;
    }

    #root {
        max-width: 80%;
        margin: 0 auto;
        padding: 0 20px 50px;
    }
`;
