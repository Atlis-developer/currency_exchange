import React from 'react';
import './App.sass';
import ContentContainer from './components/Content/ContentContainer';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';

const App = () => {
  return (
    <div className="App">
      <div className='App-header'>
        <Header/>
      </div>
      <div className='App-content'>
      <ContentContainer/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
