import React, { Component } from "react";
// import Button from "@material-ui/core/Button";
import styles from "./styles";
import { withStyles } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import Taskboard from "./../Taskboard/index";
import theme from "./../../commons/themes/index";
import { Provider } from "react-redux";
import configureStore from './../../redux/configureStore';

const store = configureStore();
class App extends Component {
  render() {
    //const {classes} = this.props;
    return (
      // <div className="app">
      //   <Button variant="contained" color="primary">
      //     Primary
      //   </Button>
      //   <div className={classes.box}>
      //       <div className={classes.shape}>React JS</div>
      //       <div className={classes.shape}>Angular</div>
      //       <div className={classes.shape}>Vue js</div>
      //   </div>
      // </div>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Taskboard />
        </ThemeProvider>
      </Provider>
    );
  }
}
export default withStyles(styles)(App);
