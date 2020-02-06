import React from 'react';
import * as serviceWorker from 'serviceWorker';
import ReactDOM from 'react-dom';
import App from 'components/App';

// css
import 'css/app.scss';
import 'css/style.scss';

ReactDOM.render(<App />, document.getElementById('app'));

serviceWorker.unregister();
