import { createGlobalStyle } from 'styled-components';

import light from '../assets/fonts/PlusJakartaSans-Light.ttf';
import regular from '../assets/fonts/PlusJakartaSans-Regular.ttf';
import medium from '../assets/fonts/PlusJakartaSans-Medium.ttf';
import bold from '../assets/fonts/PlusJakartaSans-Bold.ttf';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'PlusJakartaSans';
    font-style: normal;
    font-weight: 300;
    src: url(${light}) format('truetype');
  }

  @font-face {
    font-family: 'PlusJakartaSans';
    font-style: normal;
    font-weight: 400;
    src: url(${regular}) format('truetype');
  }

  @font-face {
    font-family: 'PlusJakartaSans';
    font-style: normal;
    font-weight: 500;
    src: url(${medium}) format('truetype');
  }

  @font-face {
    font-family: 'PlusJakartaSans';
    font-style: normal;
    font-weight: 700;
    src: url(${bold}) format('truetype');
  }

  html {
    font-family: PlusJakartaSans, Open-Sans, Sans-Serif, serif;
    font-weight: 400;
    font-size: 100%;
  }

  body {
    text-rendering: optimizeSpeed;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #FAFAFA;
  }

  @media (prefers-reduced-motion: no-preference) {
    html {
      scroll-behavior: smooth;
    }
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
    padding: 0;
    margin: 0;
  }

  img {
    height: auto;
    user-select: none;
  }

`;

export default GlobalStyle;
