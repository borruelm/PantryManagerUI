import React from "react";
import ReactDOM from "react-dom";
import Main from "./js/components/Main"

const Index = () => {
  return <div>
  Welcome Pantry Manager!
  <Main />
  </div>;
};

ReactDOM.render(<Index />, document.getElementById("index"));
