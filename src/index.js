import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Form from './Form';
import SearchableTable from './SearchableTable';
import VotingApp from './VotingApp';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<VotingApp />, document.getElementById('root'));
registerServiceWorker();
