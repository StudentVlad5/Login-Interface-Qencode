import 'modern-normalize';
import theme from 'components/baseStyles/Variables.styled';
import { createGlobalStyle } from 'styled-components';
import BasisGrotesqueProLight from './font/BasisGrotesquePROFontFamily/BasisGrotesqueArabicPro-Light.ttf';
import BasisGrotesqueProBold from './font/BasisGrotesquePROFontFamily/BasisGrotesqueArabicPro-Bold.ttf';
import BasisGrotesqueProRegular from './font/BasisGrotesquePROFontFamily/BasisGrotesqueArabicPro-Regular.ttf';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Basis Grotesque Pro';
    src: url(${BasisGrotesqueProLight}) format('truetype');
    font-weight: 300;
    font-style: normal;
    font-display: auto;}
  @font-face {
    font-family: 'Basis Grotesque Pro';
    src: url(${BasisGrotesqueProBold}) format('truetype');
    font-weight: 700;
    font-style: normal;
    font-display: auto;}
    @font-face {
    font-family: 'Basis Grotesque Pro';
    src: url(${BasisGrotesqueProRegular}) format('truetype');
    font-weight: 400;
    font-style: normal;
    font-display: auto;}
body {
 font-family: 'Basis Grotesque Pro', sans-serif;
  background-color:${theme.colors.white};
  
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  transition: .3s ease;
  
  &.scroll {
      max-height: 100vh;
      overflow: hidden;
    }
 }

#root {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

 //-----reset-----
h1, h2, h3, h4, h5, h6, p {
  padding: 0;
  margin: 0;
}

ul {
  padding: 0;
  margin: 0;
  list-style: none;
}

img {
  display:block;
  max-width: 100%;
  height: auto;
}
`;
