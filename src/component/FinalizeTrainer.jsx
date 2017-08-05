import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Button from "material-ui/Button";

class FinalizeTrainer extends Component {
    render() {
        const {handleSaveTrainer} = this.props;
        return (
            <div>
                <h3>Finalize Trainer</h3>
                <Button color="primary" raised onClick={handleSaveTrainer}>Save Trainer</Button>
            </div>
        );
    }
}

FinalizeTrainer.propTypes = {
    handleSaveTrainer: PropTypes.func.isRequired
};

FinalizeTrainer.defaultProps = {};

export default FinalizeTrainer;
