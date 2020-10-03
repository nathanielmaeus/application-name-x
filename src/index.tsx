import * as React from "react";
import * as ReactDOM from "react-dom";

import Routes from "./routes/root";
import "./index.scss";


const App = () => <Routes />;

ReactDOM.render(<App />, document.getElementById("root") as HTMLElement);
