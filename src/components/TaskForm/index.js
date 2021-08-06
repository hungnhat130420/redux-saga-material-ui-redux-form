import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
import styles from "./styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";

class TaskForm extends Component {
  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  render() {
    const { classes, open, onClose} = this.props;

    return (
      <div>
        <Dialog
          open={open}
          onClose={onClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Thêm mới công việc </DialogTitle>
          <DialogContent>
            <TextField
              id="standard-name"
              label="name"
              className={classes.textField}
              margin="normal"
            ></TextField>

            <TextField
              id="standard-multiline-flexible"
              label="Multiline"
              multiline
              rowsMax="4"
              className={classes.textField}
              margin="normal"
            ></TextField>       
          </DialogContent>
          <DialogActions>
            <Button onClick={onClose} color="primary">
              Cancel
            </Button>
            <Button onClick={onClose} color="primary">
              Subscribe
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
export default withStyles(styles)(TaskForm);
