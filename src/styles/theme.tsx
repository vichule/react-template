import { createGlobalStyle } from "styled-components";


export const lightTheme = {
    main: "white",
    mainText: "black",
    subText: "#4e4e4e",
    subMain: "white",
    bg: "#f8f8f8",
    bgSecond: "white",
    btnBg: "#f8f8f8",
    btnText: "black",
}

export const darkTheme = {
    main: "black",
    mainText: "white",
    subText: "white",
    subMain: "#00000014",
    bg: "black",
    bgSecond: "#202020",
    btnBg: '#FF9C3A',
    btnText: "white",
}

export const GlobalStyles = createGlobalStyle`
    :root {
        background-color: ${({theme}) => theme.bg};
        color: ${({theme}) => theme.mainText}
    }

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-size: 10px;
        font-family: 'Poppins', sans-serif;
    }
`;