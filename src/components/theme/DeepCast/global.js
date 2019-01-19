import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,body {
    overflow-x: hidden;
    height: 100%; //This is a must for #root flex and sticky footer to work
  }  
  html {
    // margin-top: 50px;
  }
  body {
    font-family: Arial;
    line-height: 0;
  }

  #root {
    height: 100% !important;
    display: flex;
    flex-direction: column;
    align-items: stretch;
  }
  
  main {
		flex-grow: 1;
	}

	header,
	main,
	footer {
		flex-shrink: 0;
  }
  
  h1, h2, h3, h4, h5, h6 {
    margin-bottom: 0; //bootstrap 4 bugfix
    padding-bottom: 1rem;
  }

  body.fontLoaded {
    font-family: Arial;
  }

  #app {
    background-color: white;
  }

  p,
  label {
    font-family: Arial;
    line-height: 1.5rem;
  } 

  img {
    // @media (max-width: 600px) {
    //   width: 100%;
    // }
  }
`;

export default GlobalStyle;
