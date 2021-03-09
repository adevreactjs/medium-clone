import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom'
import Routes from './node_modules/pages/routes';



const App = () => {
  return (
    <div>
        <h1>Welcome to hooks</h1>
        <Router>
          <Routes></Routes>
        </Router>

    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


