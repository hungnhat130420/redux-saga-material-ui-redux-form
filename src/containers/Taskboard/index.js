import React, { Component } from "react";
import styles from "./styles";
import { withStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";
import { STATUS } from "../../constant";
import TaskList from "./../../components/TaskList/index";
import TaskForm from "../../components/TaskForm";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as taskActions from "./../../actions/task";

class TaskBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  componentDidMount() {
    const { taskActions } = this.props;
    const { fetchListTask } = taskActions;

    fetchListTask();
  }

  renderBoard() {
    const { listTasks } = this.props;
    //const {classes} = this.props;
    let xhtml = null;
    xhtml = (
      <Grid container spacing={2}>
        {STATUS.map((status) => {
          const taskFilter = listTasks.filter(
            (task) => task.status === status.value
          );
          return (
            <TaskList key={status.id} tasks={taskFilter} status={status} />
          );
        })}
      </Grid>
    );
    return xhtml;
  }

  renderForm() {
    let xhtml = null;
    const { open } = this.state;
    xhtml = <TaskForm open={open} onClose={this.handleClose} />;
    return xhtml;
  }

  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  openForm = () => {
    this.setState({
      open: true,
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.taskBoard}>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={this.openForm}
        >
          <AddIcon />
          Thêm mới công việc
        </Button>

        {this.renderBoard()}

        {this.renderForm()}
      </div>
    );
  }
}

TaskBoard.propTypes = {
  classes: PropTypes.object,
  taskActions: PropTypes.shape({
    fetchListTask: PropTypes.func,
  }),
  listTasks: PropTypes.array,
};

const mapStateToProps = (state) => {
  return {
    listTasks: state.tasks.listTask,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    taskActions: bindActionCreators(taskActions, dispatch),
  };
};

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(TaskBoard)
);
