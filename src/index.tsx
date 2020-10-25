import * as React from "react";
import ReactDOM from "react-dom";

import Routes from "./routes/root";
import "./index.scss";

import "./models";

const App = () => <Routes />;

ReactDOM.render(<App />, document.getElementById("root") as HTMLElement);
