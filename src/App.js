import React from 'react';
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import {
  ChakraProvider,
} from '@chakra-ui/react';
import Dashboard from './containers/Dashboard';
import Video from './containers/Video';

import theme from './theme'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Dashboard}/>
          <Route path="/video/:videoId" exact component={Video}/>
        </Switch>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
