import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.tsx';
import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <CSSReset />
        <BrowserRouter>
          <App />
        </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


