import React from 'react'
import {AppBar, Toolbar, Grid, IconButton } from '@material-ui/core'
import Badge from '@material-ui/core/Badge';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import InputBase from '@material-ui/core/InputBase';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Typography from '@material-ui/core/Typography';


export default function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Grid container>
          <Grid item>
          <Typography variant="h6" noWrap>
            Material-UI
            <InputBase />
          </Typography>            
          
         
          </Grid>
            <Grid item sm></Grid>
          <Grid item>
          <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="secondary">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={17} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"              
              color="inherit"
            >
              <AccountCircle />
            </IconButton>

          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}
