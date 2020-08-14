import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import firebase from "firebase";
import { Provider } from "react-redux";
import store from "./store";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvbI-YNDlM9dYAV6kjAnRlQaYBnTezSPc",
  authDomain: "astral-root-254015.firebaseapp.com",
  databaseURL: "https://astral-root-254015.firebaseio.com",
  projectId: "astral-root-254015",
  storageBucket: "astral-root-254015.appspot.com",
  messagingSenderId: "556026518307",
  appId: "1:556026518307:web:0852a4002042c344c5ca96",
  measurementId: "G-9F5K60MDV2"
};
firebase.initializeApp(firebaseConfig);

window.store = store;

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
