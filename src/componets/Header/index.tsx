import React, { useCallback, useContext } from 'react';
import clsx from 'clsx';
import { useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { useLocation } from 'react-router-dom';
import useStyles from './styles';
import { IHeader } from './types';
import { Link } from "react-router-dom";
import { navItems } from "./data";
import classNames from "classnames";
import { UserContext } from "../../utils/contexts";

const Header = ({ children }: IHeader) => {
  const classes = useStyles();
  const theme = useTheme();
  const { user } = useContext(UserContext);
  const [open, setOpen] = React.useState(false);
  const location = useLocation();

  const onDrawerOpen = useCallback(() => {
    setOpen(true);
  }, []);

  const onDrawerClose = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <div className={classes.root}>
      <CssBaseline/>
      <AppBar
        position="fixed"
        color="default"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar className={classes.toolbar}>
          <div className={classes.toggleWrapper}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={onDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon/>
            </IconButton>
            <Typography variant="h6" noWrap>
              {user?.firstname} {user?.lastname}
            </Typography>
          </div>
          <Link to='/auth' className={classes.logOut}>Log out</Link>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={onDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon/> : <ChevronRightIcon/>}
          </IconButton>
        </div>
        <Divider/>
        <List>
          {navItems.map(item => (
            <Link to={item.href} key={item.title} className={classes.navItem}>
              <ListItem button className={classNames({
                active: item.href === location.pathname
              })}>
                <ListItemIcon> {item.icon} </ListItemIcon>
                <ListItemText primary={item.title}/>
              </ListItem>
            </Link>
          ))}
        </List>
        <Divider/>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader}/>
        {children}
      </main>
    </div>
  );
}

export default Header;
