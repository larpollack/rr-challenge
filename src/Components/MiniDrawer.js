import { MuiThemeProvider } from "@material-ui/core/styles";
import * as React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Divider from "@material-ui/core/Divider";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsIcon from "@material-ui/icons/Notifications";
import InputAdornment from "@material-ui/core/InputAdornment";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Avatar from "@material-ui/core/Avatar";
import HomeIcon from "@material-ui/icons/Home";
import TelegramIcon from "@material-ui/icons/Telegram";
import InboxIcon from "@material-ui/icons/Inbox";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import styled from "styled-components";
import Contacts from "./Contacts";
import Icon from "@mdi/react";
import { mdiAccountGroup } from "@mdi/js";
import LensIcon from "@material-ui/icons/Lens";
import AssistantIcon from "@material-ui/icons/Assistant";
import "../App.css";
import avatar from "../img/avatar.png";

const drawerWidth = 240;

const StyledAvatar = styled(Avatar)`
   {
    width: 90px;
    height: 90px;
    margin-left: -28px;
  }
`;

const StyledDrawer = styled(Drawer)`
  & > div {
    background-color: #292f4c;
  }
`;

const StyledListIcon = styled(ListItemIcon)`
   {
    color: #696e80;
    font-size: 30px;
    height: 60px;
    width: 60px;
  }
`;

const StyledSearch = styled(TextField)`
   {
    background-color: #edeef1;
    left: 125px;
    border-radius: 15%;
    height: 48px;
    font-size: 18px;
    overflow: visible;
    color: #c1c2c8;
    margin-top: 20px;
  }
  & > .MuiFilledInput-underline:before {
    border-bottom: none;
  }

  & > .MuiFilledInput-root {
    background-color: transparent;
    color: #c1c2c8;
  }
`;

const OnIcon = styled(LensIcon)`
   {
    width: 14px;
    height: 14px;
    border: 3px solid #292f4c;
    border-radius: 100%;
    position: absolute;
    z-index: 100;
    left: 13px;
    top: 18px;
    color: #34d859;
  }
`;

const RedIcon = styled(LensIcon)`
   {
    width: 10px;
    height: 10px;
    position: absolute;
    z-index: 100;
    left: 48px;
    top: 2px;
    color: #f85252;
  }
`;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },

  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  content: {
    flexGrow: 1,
    padding: 0,
  },
}));

export default function MiniDrawer() {
  const classes = useStyles();
  const theme = useTheme();
  const [open] = React.useState(false);

  return (
    <div className={classes.root}>
      <CssBaseline />
      
        <StyledSearch
          id="filled-search"
          label="Enter for search..."
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          type="search"
          variant="filled"
        />
        <div className='assistant'>

        147
        <AssistantIcon className="icon"/>
        </div>
      

      <MuiThemeProvider theme={theme}>
        <StyledDrawer
          variant="permanent"
          className={clsx(classes.drawer, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          })}
          classes={{
            paper: clsx({
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open,
            }),
          }}
        >
          <Divider />
          <List>
            <ListItem>
              <OnIcon />
              <StyledAvatar alt="avatarpic" src={avatar} />
            </ListItem>
          </List>
          <Divider />
          <List>
            <ListItem>
              <StyledListIcon>
                <HomeIcon style={{ height: "35px", width: "35px" }} />
              </StyledListIcon>
            </ListItem>
            <ListItem>
              <StyledListIcon>
                <TelegramIcon style={{ height: "35px", width: "35px" }} />
              </StyledListIcon>
            </ListItem>
            <ListItem>
              <StyledListIcon>
                <div className="highlight" />
                <InboxIcon
                  style={{ height: "35px", width: "35px", color: "#fff" }}
                />
                <RedIcon />
              </StyledListIcon>
            </ListItem>
            <ListItem>
              <StyledListIcon>
                {" "}
                <Icon
                  path={mdiAccountGroup}
                  title="Users"
                  style={{ height: "35px", width: "35px" }}
                />
              </StyledListIcon>
            </ListItem>
            <ListItem>
              <StyledListIcon>
                <NotificationsIcon style={{ height: "35px", width: "35px" }} />
                <RedIcon />
              </StyledListIcon>
            </ListItem>
            <ListItem>
              <StyledListIcon>
                <MoreHorizIcon style={{ height: "35px", width: "35px" }} />
              </StyledListIcon>
            </ListItem>
          </List>
        </StyledDrawer>
      </MuiThemeProvider>
      <main className={classes.content}>
        <Contacts />
      </main>
    </div>
  );
}
