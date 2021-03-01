import { StrictMode } from "react";
import ReactDOM from "react-dom";

import Mycomponent from "./Mycomponent";
const rootElement = document.getElementById("root");

ReactDOM.render(
  <StrictMode>
    <Mycomponent  
    name ="Efren Aldana Escalona"
    mail = "A01276266@itesm.mx"
    />
  </StrictMode>,
  rootElement
);
