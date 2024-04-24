import React from 'react';
import './App.css';
import styled from 'styled-components';
import tw from 'twin.macro';
import { HomePage } from './app/containers/HomePage';

const AppContainer = styled.div`
  ${tw`
    flex
    flex-col
    w-full
    h-full
  `}
`;

function App() {
  return (
    <AppContainer>
      <HomePage />
    </AppContainer>
  );
}

export default App;
