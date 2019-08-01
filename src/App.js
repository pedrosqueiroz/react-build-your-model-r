import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import { ContextProvider } from './services/Context';

function App(){
  return (
    <ContextProvider>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
