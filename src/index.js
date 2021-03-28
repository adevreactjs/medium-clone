import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom'
import Routes from './node_modules/pages/routes';
import TopBar from 'components/topBar'
import {CurrentUserProvider} from 'context/currentUser'


const App = () => {
  return (
    <CurrentUserProvider>
        <Router>
          <TopBar/>
           <Routes></Routes>
        </Router>
    </CurrentUserProvider>

  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


