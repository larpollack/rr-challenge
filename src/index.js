import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { ThemeProvider } from "styled-components";
import { MuiThemeProvider,StylesProvider } from "@material-ui/core/styles";
import theme from './theme'
ReactDOM.render(

  //Make sure the Material stylesheet is placed above your own 
  //styles so you can overwrite them
  <StylesProvider injectFirst> 

    <MuiThemeProvider theme={theme}>

      <ThemeProvider theme={theme}>

        <App />

      </ThemeProvider>

    </MuiThemeProvider>

  </StylesProvider>,

document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
