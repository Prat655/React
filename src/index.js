import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";

import App from "./App";
import Employee from "./Employee1";
import Registration from "./Registration";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <>
    <Registration />
  </>,
  rootElement
);
