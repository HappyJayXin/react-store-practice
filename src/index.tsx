import React from 'react';
import * as serviceWorker from 'serviceWorker';
import ReactDOM from 'react-dom';
import Route from 'Route';

// css
import 'css/app.scss';
import 'css/style.scss';

ReactDOM.render(<Route />, document.getElementById('app'));

serviceWorker.unregister();
