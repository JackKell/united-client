import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button'

class UpDownCounter extends Component {
    render() {
        const {
            name, value,
            upLabel, upDisabled, handleUpClick,
            downLabel, downDisabled, handleDownClick
        } = this.props;
        return (
            <div>
                <Grid container spacing={8}>
                    <Grid item xs={7}>
                        <h4>{name}: {value}</h4>
                    </Grid>
                    <Grid item xs={5}>
                        <Button raised onClick={handleUpClick} disabled={upDisabled}>{upLabel}</Button>
                        <Button raised onClick={handleDownClick} disabled={downDisabled}>{downLabel}</Button>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

UpDownCounter.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    handleUpClick: PropTypes.func.isRequired,
    handleDownClick: PropTypes.func.isRequired,
    upLabel: PropTypes.string,
    downLabel: PropTypes.string,
    upDisabled: PropTypes.bool,
    downDisabled: PropTypes.bool,
};

UpDownCounter.defaultProps = {
    upLabel: "+",
    downLabel: "-",
    upDisabled: false,
    downDisabled: false,
};

export default UpDownCounter;
