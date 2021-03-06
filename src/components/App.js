
import React, {useState} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Login from 'components/pages/Login';
import Home from 'components/pages/Home';

import LightTheme from 'Themes/light';
import DarkTheme from 'Themes/dark';

import {createGlobalStyle, ThemeProvider} from 'styled-components';


const GlobalStyle = createGlobalStyle`
  body {
    background: ${props => props.theme.bodyBackgroundColor};
    min-height: 100vh;
    margin: 0;
    color: ${props => props.theme.bodyFontColor};
    font-family: 'Kaushan Script';
  }
`;

// const theme = {
//   primaryColor: '#f8049c',
//   secondaryColor: '#fdd54f',
// }

function App() {
  const [theme, setTheme] = useState(LightTheme);
  
  return (
    <ThemeProvider theme={{...theme, setTheme: () => {
        setTheme(currentStateTheme => currentStateTheme.id === 'light' ? DarkTheme : LightTheme);
    }}}>    
      <GlobalStyle/>  
      <BrowserRouter>
        <Switch>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </BrowserRouter>
    </ThemeProvider> 

  );
}

export default App;
