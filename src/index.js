import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Form from './Form';
import SearchableTable from './SearchableTable';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<SearchableTable />, document.getElementById('root'));
registerServiceWorker();
