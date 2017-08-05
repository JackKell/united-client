import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import decamelize from 'decamelize';
import toTitleCase from 'to-title-case';

import UpDownCounter from "./UpDownCounter";

class StatAssigner extends Component {
    renderStatCounters = () => {
        const {trainer, handleChangeStat} = this.props;
        return Object.keys(trainer.stats).map((stat) => {
            return (
                <Grid item key={stat} sm={12} md={6}>
                    <UpDownCounter
                        handleUpClick={() => handleChangeStat(stat, 1)}
                        handleDownClick={() => handleChangeStat(stat, -1)}
                        name={toTitleCase(decamelize(stat, " "))}
                        value={trainer.stats[stat]}/>
                </Grid>
            );
        });
    };

    render() {
        const {trainer} = this.props;
        return (
            <div>
                <Grid container spacing={8}>
                    <Grid item xs={12}>
                        <h3>Combat Stat Assigner</h3>
                        <h4>Stat Points: {trainer.statPoints}</h4>
                    </Grid>
                    {this.renderStatCounters()}
                </Grid>
            </div>
        );
    }
}

StatAssigner.propTypes = {
    trainer: PropTypes.object.isRequired,
    handleChangeStat: PropTypes.func.isRequired,
};

StatAssigner.defaultProps = {};

export default StatAssigner;
