import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid'

class TrainerFeatureSelect extends Component {
    render() {
        return (
            <div>
                <Grid container>
                    <Grid item xs={12}>
                        <h3>Feature Select Select</h3>
                    </Grid>
                    <Grid item xs={12}>
                        <p>Feature select coming soon</p>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

TrainerFeatureSelect.propTypes = {};

TrainerFeatureSelect.defaultProps = {};

export default TrainerFeatureSelect;
