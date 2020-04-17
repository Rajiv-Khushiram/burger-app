import React from "react";
import Aux from "../../hoc/auxillary";
import classes from './Layout.module.css'
const Layout = (props) => (
  <Aux>
    <div>Toobar Side drawer, Backdrop</div>
    <main className={classes.Content}>{props.children}</main>
  </Aux>
);

export default Layout;
