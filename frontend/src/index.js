import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom'
import './skeleton/css/normalize.css'
import './skeleton/css/skeleton.css'
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
<Router>
  <App />
</Router>, 
document.getElementById('root'));
registerServiceWorker();
