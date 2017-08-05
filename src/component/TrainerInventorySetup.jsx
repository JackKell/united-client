import React, {Component} from 'react';
import PropTypes from 'prop-types';

import { withStyles, createStyleSheet } from 'material-ui/styles';

class TrainerInventorySetup extends Component {
    render() {
        return (
            <div>
                <h3>Inventory</h3>
                <h4>Starting Money</h4>
                <h4>Starting Items</h4>
            </div>
        );
    }
}

TrainerInventorySetup.propTypes = {};

TrainerInventorySetup.defaultProps = {};

export default TrainerInventorySetup;
