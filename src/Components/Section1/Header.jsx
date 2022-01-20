import { Grid } from "@material-ui/core";
import React from "react";
import { HeaderBody } from "./HeaderBody";
import { HeaderFooter } from "./HeaderFooter";
import { HeaderTop } from "./HeaderTop";
import "./Scss/Header.scss";
export const Header = () => {
  return (
    <Grid container className="HeaderWarp" flex>
      <Grid item xs={12}>
        <HeaderTop />
      </Grid>
      <Grid item xs={12}>
        <HeaderBody />
      </Grid>
      <Grid item xs={12}>
        {" "}
        <HeaderFooter />
      </Grid>
    </Grid>
  );
};
