import React from "react";
import Aux from "../../hoc/auxillary";
import classes from "./Layout.module.css";

import Toolbar from '../Navigation/Toolbar/Toolbar'


const Layout = (props) => (
  <Aux>
    <Toolbar/>
    <div>Toobar Side drawer, Backdrop</div>
    <main className={classes.Content}>{props.children}</main>
  </Aux>
);

export default Layout;
