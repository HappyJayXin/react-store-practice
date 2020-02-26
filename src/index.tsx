import React from 'react';
import * as serviceWorker from 'serviceWorker';
import ReactDOM from 'react-dom';
import Route from 'Route';

// css
import 'css/app.scss';
import 'css/style.scss';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.render(
  <main>
    <ToastContainer />
    <Route />
  </main>
,
document.getElementById('app') as HTMLElement);

serviceWorker.unregister();
