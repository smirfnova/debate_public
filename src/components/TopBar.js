import React from "react";
import {
    Button, AppBar, Toolbar, Typography, IconButton, ClickAwayListener, Menu, MenuItem, MenuList, Popover
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { makeStyles } from '@material-ui/core/styles';
import './TopBar.css'
import { createMuiTheme, withStyles, ThemeProvider } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(5),
      
    }, toolBar: {
      background: '#f0e9db',
      minHeight: 12,
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(0),
    },
    homeButton: {
      marginLeft: theme.spacing(2),
    }, bar: {
        minHeight: 5
    },
    title: {
      fontWeight: 'bold',
      flexGrow: 1,
      marginLeft: theme.spacing(0),
      fontFamily: [
        'Cambria', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', 'Arial', 'sans-serif',
      ].join(','),
      textDecoration: "underline",
      textDecorationColor: "#a8a6a6",
      textDecorationThickness: '5px'
    },
  }));

  const theme = createMuiTheme({
    typography: {
      fontFamily: [
        'Cambria', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', 'Arial', 'sans-serif',
      ].join(','),
    }
  });

export default function TopBar() {
    const classes = useStyles();

    return (
      <ThemeProvider theme={theme}>

        <div className={classes.root}>
        <AppBar position="static" className = {classes.toolBar} style = {{color: "#161a1d", boxShadow: "0px 0px 0px 0px" }}>
          <Toolbar variant = "dense" className = {classes.bar}>
            <IconButton className={classes.homeButton} edge="start">
            <a href = "/" >
                    <HomeIcon  style = {{fill: "#a4161a"}} />
                </a>
            </IconButton>
            <Typography className={classes.title} variant="h5" >
                Debate Topics
            </Typography>
            <div className = "menu_container">
            <PopupState  className = "menu_select" variant="popover" popupId="demo-popup-menu">
                    {(popupState) => (
                        <React.Fragment>
                        <Button className={classes.menuButton} style = {{backgroundColor: "#a4161a", color : "white", fontSize: '15px'}}variant="contained" {...bindTrigger(popupState)}>
                            <Typography>MENU</Typography> <MenuIcon  style = {{fill: "white"}}/>
                        </Button>
                        <Menu  {...bindMenu(popupState)}>
                            <a href = "#/" style = {{color: "black"}}>  <MenuItem onClick={popupState.close}>Simple Topic Generator</MenuItem></a>
                            <a href = "#/advanced" style = {{color: "black"}}>  <MenuItem onClick={popupState.close}>Advanced Topic Generator</MenuItem></a>
                            <a href = "#/about" style = {{color: "black"}}> <MenuItem onClick={popupState.close}>About this Page</MenuItem>
                        </a>
                        </Menu>
                        </React.Fragment>
                    )}
                </PopupState>
            </div>

          </Toolbar>
        </AppBar>
      </div>
      </ThemeProvider>

    );
}
