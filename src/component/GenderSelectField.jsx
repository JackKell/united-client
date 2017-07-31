import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';

class GenderSelectField extends Component {
    constructor(props) {
        super(props);
        this.options = [
            { value: 'male', label: 'Male' },
            { value: 'female', label: 'Female' },
            { value: 'none', label: 'None' },
        ];
    }

    render() {
        return (
            <Select
                {... this.props}
                options={this.options}/>
        );
    }
}

GenderSelectField.propTypes = {
    onChange: PropTypes.func.isRequired,

};

GenderSelectField.defaultProps = {
    placeholder: "Gender",
};

export default GenderSelectField;
