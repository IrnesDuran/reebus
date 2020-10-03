import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

// import { api } from './api';

// function getEcho() {
//     const requestOptions = {
//       method: "GET",
//       url: `/echo`,
//     };
//     return api(requestOptions).then(
//       (res) => {
//         console.log(res.data);
//       }
//     );
// }

// getEcho();

// console.log(
//   'Environment variable REACT_APP_CLIENT_ID',
//   process.env.REACT_APP_CLIENT_ID
// )
// console.log('Environment variable REACT_APP_KEY', process.env.REACT_APP_KEY)
// console.log(
//   'Environment variable REACT_APP_CUSTOM',
//   process.env.REACT_APP_CUSTOM
// )

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
