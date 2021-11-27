import React from "react";
import Start from "./Start";
import AddWord from "./AddWord";
import { Route } from "react-router-dom";
import styled from "styled-components";

function App(props) {
  return (
    <>
      <Route path="/" exact>
        <Start component={Start} />
      </Route>
      <Route path="/addword">
        <AddWord component={AddWord} />
      </Route>
    </>
  );
}

export default App;

 
