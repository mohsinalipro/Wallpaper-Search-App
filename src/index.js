import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store/configureStore";
import App from "./components/app";
import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";
import registerServiceWorker from "./registerServiceWorker";
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
