import { createGlobalStyle } from "styled-components";
import bg from "./assets/images/India-night.gif";

export const GlobalStyles = createGlobalStyle`
*{
    margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body{
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  background: url(${bg})top left/cover no-repeat;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  display: grid;
  place-items: center;
  min-height: 100vh;
  overflow: hidden;
  
}
a:-webkit-any-link {
  text-decoration: none !important;
}

`;
