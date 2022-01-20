import { Grid } from '@material-ui/core';
import React from 'react';
import user from "../../Assets/Img/user.png"
import MessageIcon from '@material-ui/icons/Message';
import ListIcon from '@material-ui/icons/List';
import "./Scss/HeaderTop.scss"
export const HeaderTop = () => {
  return (
      <Grid container className='HeaderTopWarp'>
          <Grid item xs={10}>
              <img className='HeaderImg' src={user} alt="" />
          </Grid>
          <Grid item xs={1}>
              <MessageIcon className='icon'/>
          </Grid>
          <Grid item xs={1}>
              <ListIcon  className='icon'></ListIcon>
          </Grid>
          

      </Grid>
  )
};
