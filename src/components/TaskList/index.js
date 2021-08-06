import React, { Component } from 'react';
import { withStyles } from "@material-ui/core";
import styles from './styles';

import Box from '@material-ui/core/Box';
import Grid from "@material-ui/core/Grid";
import TaskItem from '../TaskItem';
//import { STATUS } from "../../constant";


 class TaskList extends Component {
    render() {
        const { classes, tasks, status   } = this.props;
        return (
            <Grid item md={4} xs={12} key={status.value}>
            <Box mt={2} mb={2}>
               <div className={classes.status}>{status.label}</div>
            </Box>
            <div className={classes.wrapperListTask}>
               {
                 tasks.map((task,index)=>{
                     //const {title} = task;
                     return <TaskItem key={index} task={task} status={status} />
                 })
               }
            </div>
       </Grid>
        )
    }
}
export default withStyles(styles)(TaskList) ;
