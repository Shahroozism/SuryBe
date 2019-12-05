import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import thunk from 'redux-thunk';
import rootReducer from "../Reducers/rootReducer";
import firebase from '/Users/user/revents3/src/features/config/firebase.js';


const rrfConfig = {
    userProfile: 'users',
    attachAuthIsReady: true,
    useFirestoreForProfile: true
};

export const configureStore = () => {
    const middlewares = [thunk.withExtraArgument({ getFirebase, getFirestore })];

    const composedEnhancer = composeWithDevTools(applyMiddleware(...middlewares), reactReduxFirebase(firebase, rrfConfig), reduxFirestore(firebase));

    const store = createStore(rootReducer, composedEnhancer);

    return store;
};