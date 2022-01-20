import { Grid ,Container } from "@material-ui/core";
import React from "react";
import "./Scss/Section2.scss"
export const Section2 = () => {
  return (
    <Container>
      <Grid  container>
        <Grid className="card" item xs={4}>
          Carrer path
        </Grid>
        <Grid className="card" item xs={4}>
          Learning Class
        </Grid>
        <Grid className="card" item xs={4}>
          Achivement 
        </Grid>
      </Grid>
      <Grid  container>
        <Grid className="card" item xs={6}>
          Rewards
        </Grid>
        <Grid className="card" item xs={6}>
            Announcment
        </Grid>
      </Grid>
    </Container>
  );
};
