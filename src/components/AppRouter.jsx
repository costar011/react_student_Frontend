import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Content from "../routers/layouts/Content";

const AppRouter = () => {
  return (
    <Router>
      {/*Contnet*/}
      <Route path="/" component={Content} />
    </Router>
  );
};

export default AppRouter;
