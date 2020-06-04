import React from 'react';
import Main from './components/maincomponent';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {ConfigStore} from './redux/configstore';

const store = ConfigStore();

  function App(){
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Main/>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }

export default App;
