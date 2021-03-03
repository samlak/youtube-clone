import React from 'react';
import {
  ChakraProvider,
} from '@chakra-ui/react';
import Dashboard from './containers/Dashboard';

import theme from './theme'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Dashboard />
    </ChakraProvider>
  );
}

export default App;
