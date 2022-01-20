import { Grid } from '@material-ui/core';
import React from 'react';
import "./Scss/HeaderFooter.scss"
export const HeaderFooter = () => {
  return <Grid container className='HeaderFooterWarp'>
        <Grid item xs={3}>Salses</Grid>
        <Grid item xs={3}>Kalimalang</Grid>
        <Grid item xs={3}>Dki Jakrta</Grid>
  </Grid>
}