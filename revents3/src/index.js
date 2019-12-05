import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';
import './index.css';
import App from './app/layout/App';
import * as serviceWorker from './serviceWorker';
import ReduxToastr from 'react-redux-toastr';
import { NavLink } from 'react-router-dom';
import { Provider } from 'react-redux'
import { configureStore } from './app/Store/configureStore';
import ScrollToTop from '/Users/user/revents3/src/app/common/util/ScrollToTop.jsx';


const store = configureStore();

const rootEl = document.getElementById('root');

let render = () => {
    ReactDOM.render( <
        Provider store = { store } >
        <
        NavLink >
        <
        ScrollToTop >
        <
        ReduxToastr position = 'bottom-right'
        transitionIn = 'fadeIn'
        transitionOut = 'fadeOut' /
        >
        <
        App / >
        <
        /ScrollToTop> < /
        NavLink > <
        /Provider>,
        rootEl
    );
};

if (module.hot) {
    module.hot.accept('./app/layout/App', () => {
        setTimeout(render);
    });
}


render();