import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Grid from 'material-ui/Grid';
import TextField from 'material-ui/TextField';
import { withStyles, createStyleSheet } from 'material-ui/styles';

import GenderSelectField from './GenderSelectField';

const styleSheet = createStyleSheet('TrainerInfoStep', theme => ({
    selectField: {
        marginBottom: "1em",
        marginTop: "1em"
    }
}));

class TrainerInfoStep extends Component {
    render() {
        const {classes, trainer, handleChangeTrait} = this.props;
        return (
            <div>
                <h3>Character Information</h3>
                <TextField
                    label={"Name"}
                    margin="normal"
                    defaultValue={trainer.name}
                    onBlur={event => handleChangeTrait("name", event.target.value)}
                    fullWidth/>
                <TextField
                    label={"Age"}
                    margin="normal"
                    defaultValue={trainer.age}
                    onBlur={event => handleChangeTrait("age", event.target.value)}
                    fullWidth/>
                <TextField
                    label={"Weight"}
                    margin="normal"
                    defaultValue={trainer.weight}
                    onBlur={event => handleChangeTrait("weight", event.target.value)}
                    fullWidth/>
                <TextField
                    multiline
                    label={"Description"}
                    margin="normal"
                    defaultValue={trainer.description}
                    onBlur={event => handleChangeTrait("description", event.target.value)}
                    fullWidth/>
                <GenderSelectField
                    className={classes.selectField}
                    clearable={false}
                    showMenuBelow
                    floatingLabel
                    name="trainer-gender-select"
                    value={trainer.gender}
                    onChange={(option) => handleChangeTrait("gender", option.value)}/>
            </div>
        );
    }
}

TrainerInfoStep.propTypes = {
    trainer: PropTypes.object.isRequired,
    handleChangeTrait: PropTypes.func.isRequired
};

TrainerInfoStep.defaultProps = {};

export default withStyles(styleSheet)(TrainerInfoStep);
