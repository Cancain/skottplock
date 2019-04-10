import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";

import About from "../../Containers/About/About";
import Contact from "../../Containers/Contact/Constact";
import Home from "../../Containers/Home/Home";
import ProductDisplay from "../../Containers/ProductDisplay/ProductDisplay";
import Login from "../Login/login.js";
import Register from "../Register/Register";
import ShoppingCart from "../ShoppingCart/ShoppingCart";

const router = props => {
  return (
    <Fragment>
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/product" component={ProductDisplay} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route
          path="/cart"
          render={() => <ShoppingCart items={props.items} />}
        />
        <Route path="/" exact component={Home} />
      </Switch>
    </Fragment>
  );
};

export default router;
