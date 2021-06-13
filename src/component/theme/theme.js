import { createGlobalStyle } from "styled-components";

export const darkTheme = {
  body: "#242526",
  text: "#fff",
  border: "#505050",
};

export const lightTheme = {
  body: "#f9f9ff",
};

export const GlobalStyle = createGlobalStyle`
  body{
    background-color : ${(props) => props.theme.body} !important;
  }
  h2,h1,svg,span{
    color:${(props) => props.theme.text} !important;
  }
  .sidebar{
    border-color: ${(props) => props.theme.border} !important;;
  }
  .icon-scroll:before{
    background:${(props) => props.theme.text} !important;
  }
  span.time{
    color:rgba(53, 51, 83, 1) !important;
  }
`;
