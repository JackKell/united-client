import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import { withStyles, createStyleSheet } from 'material-ui/styles';

const styleSheet = createStyleSheet('TrainerOverview', theme => ({
    paper: {
        padding: 16,
        color: theme.palette.text.primary,
    }
}));

class TrainerOverview extends Component {
    render() {
        const {classes} = this.props;
        return (
            <div>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <h1>Trainer Creation Page</h1>
                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper className={classes.paper}>
                        <h3>Character Overview</h3>
                        {JSON.stringify(this.state.trainer, null, '\t')}
                    </Paper>
                </Grid>
            </div>
        );
    }
}

TrainerOverview.propTypes = {};

TrainerOverview.defaultProps = {};

export default withStyles(styleSheet)(TrainerOverview);
