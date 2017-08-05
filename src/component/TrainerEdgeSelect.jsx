import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Input from 'material-ui/Input';

import EdgeList from "./EdgeList";

const styleSheet = createStyleSheet('TrainerEdgeSelect', theme => ({
    scrollableList: {
        maxHeight: 600,
        overflow: 'auto'
    }
}));

class TrainerEdgeSelect extends Component {
    render() {
        const {classes, edges, trainer} = this.props;
        return (
            <div>
                <Grid container>
                    <Grid item xs={12}>
                        <h3>Choose Edges</h3>
                    </Grid>
                    <Grid item xs={6}>
                        <h4>Selected Edges</h4>
                        <div className={classes.scrollableList}>
                            <EdgeList edges={trainer.edges}/>
                        </div>
                    </Grid>
                    <Grid item xs={6}>
                        <h4>Available Edges</h4>
                        <div className={classes.scrollableList}>
                            <EdgeList edges={edges}/>
                        </div>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

TrainerEdgeSelect.propTypes = {
    trainer: PropTypes.object.isRequired,
    edges: PropTypes.array.isRequired
};

TrainerEdgeSelect.defaultProps = {};

export default withStyles(styleSheet)(TrainerEdgeSelect);
