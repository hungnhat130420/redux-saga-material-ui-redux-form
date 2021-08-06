import React, { Component } from 'react';
import { withStyles } from "@material-ui/core";
import styles from './styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Fab from '@material-ui/core/Fab';
//import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import Icon from '@material-ui/core/Icon';
import DeleteIcon from '@material-ui/icons/Delete';

 class TaskItem extends Component {
    render() {
        const {classes,task,status} = this.props;
        return (
            <Card key={task.id} className={classes.card}>
            <CardContent>
                <Grid container justify="space-between">
                    <Grid item md={8}>
                        <Typography component="h2">
                          {task.title}
                        </Typography>
                    </Grid>
                    <Grid item md={4}>
                        {
                          status.label
                        }
                    </Grid>
                </Grid>
                {task.description}
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button size="small"></Button>
                <Fab color="primary" aria-label="Edit" className={classes.fab} size="small">
                    <Icon fontSize="default">
                        <EditIcon/> 
                    </Icon>
                </Fab>

                <Fab color="primary" aria-label="Delete" className={classes.fab} size="small">
                    <Icon fontSize="default">
                        <DeleteIcon/>
                    </Icon>
                </Fab>
            </CardActions>
        </Card>
        )
    }
}
export default  withStyles(styles)(TaskItem);
