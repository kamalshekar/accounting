import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";

import Myaccount from "./Myaccount";
import { ProductConsumer } from "../../contextAPI/Context";
import "./navbar.css";
import atlogo from "../../Images/navbar/AtAdmin.svg";
import LogoNHealth from "../../Images/navbar/agroup.svg";
import SelectCountry from "./SelectCountry";
import { Link } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";

import TextsmsIcon from "@material-ui/icons/Textsms";

import accountants from "../../Images/navbar/accountants.svg";
import add from "../../Images/navbar/add.svg";
import ag from "../../Images/navbar/ag.svg";
import at from "../../Images/navbar/at.svg";
import digital from "../../Images/navbar/digital.svg";
import setting from "../../Images/navbar/setting.svg";
import staff from "../../Images/navbar/staff.svg";
import tasks from "../../Images/navbar/tasks.svg";
import tax from "../../Images/navbar/tax.svg";
import traction from "../../Images/navbar/traction.svg";
import training from "../../Images/navbar/training.svg";
import NavToggle from "./NavbarToggle";

import Stickybar from "../footer/StickyBar";

import NavDrawer from "../main/Add/NavDrawer";
const drawerWidth = 300;
const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`
  },
  menuButton: {
    marginRight: 36
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap"
  },
  drawerOpen: {
    width: drawerWidth,
    // transition: unset
    overflowY: "hidden"
  },
  drawerClose: {
    // transition: unset,
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1
    }
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar
  },
  content: {
    flexGrow: 1
  }
}));

export default function MiniDrawer(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const { children } = props;
  return (
    <ProductConsumer>
      {value => {
        const { navTraining, navTraction, navAt } = value;

        return (
          <div className="navbarMain">
            <div className={classes.root}>
              <CssBaseline />
              <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                  [classes.appBarShift]: open
                })}
              >
                <Toolbar
                  className="bg-light pl-0 pr-0 "
                  style={{ color: "#FFF !important" }}
                >
                  <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    edge="start"
                    className={clsx(classes.menuButton, {
                      [classes.hide]: open
                    })}
                  >
                    <img
                      style={{
                        height: "1.5rem",
                        marginLeft: "10px"
                      }}
                      src={atlogo}
                      alt="no_img"
                    />
                  </IconButton>
                  <div className="fitNavcontent">
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <NavToggle />
                    </div>

                    <div className="ml-5">
                      <Myaccount />
                    </div>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <SelectCountry />
                    </div>
                  </div>
                  <br></br>
                </Toolbar>
              </AppBar>

              <Drawer
                className="RemoveScroll noScroll"
                variant="permanent"
                className={clsx(classes.drawer, {
                  [classes.drawerOpen]: open,
                  [classes.drawerClose]: !open
                })}
                classes={{
                  paper: clsx({
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open
                  })
                }}
              >
                <div>
                  <div>
                    <div className={classes.toolbar}>
                      <img
                        style={{ height: "1.2rem" }}
                        src={LogoNHealth}
                        alt="no_img"
                      />
                      <IconButton onClick={handleDrawerClose}>
                        {theme.direction === "rtl" ? (
                          <ChevronRightIcon />
                        ) : (
                          <ChevronLeftIcon style={{ color: "#fff" }} />
                        )}
                      </IconButton>
                    </div>
                  </div>
                  <Divider className="dividerStyle" />
                  <div className="navHeight">
                    <List onClick={handleDrawerOpen}>
                      <ListItem
                        style={{
                          display: open ? "" : "none"
                        }}
                      >
                        <ListItemIcon
                          style={{
                            display: "flex",
                            justifyContent: "center"
                          }}
                        >
                          <span className="dividerHead">MAIN</span>
                        </ListItemIcon>
                      </ListItem>
                      <div className="insideHeight">
                        <ListItem>
                          <ListItemIcon>
                            <img
                              src={traction}
                              className="img-fluid"
                              style={{
                                marginLeft: "8px"
                              }}
                            />
                          </ListItemIcon>
                          <ListItemText className="removeFocus">
                            <Link to="/traction">
                              <span onClick={navTraction} className="listStyle">
                                Traction
                              </span>
                            </Link>
                          </ListItemText>
                        </ListItem>
                        {/* <ListItem>
                          <ListItemIcon>
                            <img
                              src={tasks}
                              className="img-fluid"
                              style={{
                                marginLeft: "8px"
                              }}
                            />
                          </ListItemIcon>
                          <ListItemText className="removeFocus">
                            <Link to="/tasks">
                              {" "}
                              <span className="listStyle">Tasks</span>
                            </Link>
                          </ListItemText>
                        </ListItem> */}
                        {/* <ListItem>
                          <ListItemIcon>
                            <img
                              src={digital}
                              className="img-fluid"
                              style={{
                                marginLeft: "8px"
                              }}
                            />
                          </ListItemIcon>
                          <ListItemText className="removeFocus">
                            <Link to="/digitalhealth">
                              {" "}
                              <span className="listStyle">Digital Health</span>
                            </Link>
                          </ListItemText>
                        </ListItem> */}
                        <ListItem>
                          <ListItemIcon>
                            <img
                              src={add}
                              className="img-fluid"
                              style={{
                                marginLeft: "8px"
                              }}
                            />
                          </ListItemIcon>
                          <ListItemText className="removeFocus">
                            <NavDrawer />
                          </ListItemText>
                        </ListItem>
                      </div>

                      <Divider
                        className="dividerStyle mt-3 mb-3"
                        style={{ margin: open ? "0px 20px 0px 20px" : "" }}
                      />

                      <ListItem
                        style={{
                          display: open ? "" : "none"
                        }}
                        className="mt-2"
                      >
                        <ListItemIcon style={{ paddingLeft: "8px" }}>
                          <span className="dividerHead">Management</span>
                        </ListItemIcon>
                      </ListItem>
                      <div className="insideHeight">
                        <ListItem>
                          <ListItemIcon>
                            <img
                              src={training}
                              className="img-fluid"
                              style={{
                                marginLeft: "8px"
                              }}
                            />
                          </ListItemIcon>
                          <ListItemText className="removeFocus">
                            <Link to="/training">
                              {" "}
                              <span onClick={navTraining} className="listStyle">
                                Training
                              </span>
                            </Link>
                          </ListItemText>
                        </ListItem>
                        {/* <ListItem>
                          <ListItemIcon>
                            <img
                              src={staff}
                              className="img-fluid"
                              style={{
                                marginLeft: "8px"
                              }}
                            />
                          </ListItemIcon>
                          <ListItemText className="removeFocus">
                            <Link to="/staff">
                              {" "}
                              <span className="listStyle">Staff</span>
                            </Link>
                          </ListItemText>
                        </ListItem>
                        <ListItem>
                          <ListItemIcon>
                            <img
                              src={setting}
                              className="img-fluid"
                              style={{
                                marginLeft: "8px"
                              }}
                            />
                          </ListItemIcon>
                          <ListItemText className="removeFocus">
                            <Link to="/settings">
                              {" "}
                              <span className="listStyle">Settings</span>
                            </Link>
                          </ListItemText>
                        </ListItem> */}
                      </div>

                      <Divider
                        className="dividerStyle mt-3 mb-3"
                        style={{ margin: open ? "0px 20px 0px 20px" : "" }}
                      />

                      <ListItem
                        style={{
                          display: open ? "" : "none"
                        }}
                      >
                        <ListItemIcon
                          style={{
                            display: "flex",
                            justifyContent: "center"
                          }}
                        >
                          <span className="dividerHead">APPS</span>
                        </ListItemIcon>
                      </ListItem>
                      <div className="insideHeight">
                        <ListItem>
                          <ListItemIcon>
                            <img
                              src={at}
                              className="img-fluid"
                              style={{
                                marginLeft: "8px"
                              }}
                            />
                          </ListItemIcon>
                          <ListItemText className="removeFocus">
                            <Link to="/at">
                              <span onClick={navAt} className="listStyle">
                                AT For Individuals
                              </span>
                            </Link>
                          </ListItemText>
                        </ListItem>
                        {/* <ListItem>
                          <ListItemIcon>
                            <img
                              src={at}
                              className="img-fluid"
                              style={{
                                marginLeft: "8px"
                              }}
                            />
                          </ListItemIcon>
                          <ListItemText className="removeFocus">
                            <Link to="/business">
                              {" "}
                              <span className="listStyle">
                                AT For Businesses
                              </span>
                            </Link>
                          </ListItemText>
                        </ListItem>
                        <ListItem>
                          <ListItemIcon>
                            <img
                              src={accountants}
                              className="img-fluid"
                              style={{
                                marginLeft: "8px"
                              }}
                            />
                          </ListItemIcon>
                          <ListItemText className="removeFocus">
                            <Link to="/accountants">
                              {" "}
                              <span className="listStyle">Accuntants Pro</span>
                            </Link>
                          </ListItemText>
                        </ListItem>
                        <ListItem>
                          <ListItemIcon>
                            <img
                              src={ag}
                              className="img-fluid"
                              style={{
                                marginLeft: "8px"
                              }}
                            />
                          </ListItemIcon>
                          <ListItemText className="removeFocus">
                            <Link to="/firms">
                              {" "}
                              <span className="listStyle">AG For Firms</span>
                            </Link>
                          </ListItemText>
                        </ListItem>
                        <ListItem>
                          <ListItemIcon>
                            <img
                              src={tax}
                              className="img-fluid"
                              style={{
                                marginLeft: "8px"
                              }}
                            />
                          </ListItemIcon>
                          <ListItemText className="removeFocus">
                            <Link to="/taxregulator">
                              {" "}
                              <span className="listStyle">Tax Regulator</span>
                            </Link>
                          </ListItemText>
                        </ListItem> */}
                      </div>
                    </List>
                  </div>
                  <div className="mt-auto">
                    <Divider className="dividerStyle" />
                    <List>
                      <ListItem>
                        <ListItemIcon>
                          <Avatar
                            alt="Remy Sharp"
                            src="/static/images/avatar/1.jpg"
                          />
                        </ListItemIcon>
                        <ListItemText>
                          <Link to="#">
                            {" "}
                            <div className="d-flex">
                              <div>
                                <span style={{ color: "#fff" }}>
                                  Rimbimasli
                                </span>
                                <br></br>
                                <span
                                  className="boxFont"
                                  style={{
                                    color: "#fff"
                                  }}
                                >
                                  Logout
                                </span>
                              </div>
                              <div>
                                <TextsmsIcon
                                  style={{
                                    color: "#fff",
                                    marginLeft: "2.5rem"
                                  }}
                                />
                              </div>
                            </div>
                          </Link>
                        </ListItemText>
                      </ListItem>
                    </List>
                  </div>
                </div>
              </Drawer>
              <main className={classes.content}>{children}</main>
            </div>
            <Stickybar />
          </div>
        );
      }}
    </ProductConsumer>
  );
}
