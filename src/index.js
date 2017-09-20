import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Form from './Form';
import SearchableTable from './SearchableTable';
import VotingApp from './VotingApp';
import FormsMore from './Forms_More';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<FormsMore />, document.getElementById('root'));
registerServiceWorker();
