import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import toTitleCase from 'to-title-case';
import decamelize from 'decamelize';

class SkillBuffSelectField extends Component {
    skillOptionList = () => {
        const options = Object.keys(this.props.trainer.skills).map((skill) => {
            const value = skill;
            const label = toTitleCase(decamelize(skill, " "));
            const disabled = Object.values(this.props.trainer.background).includes(skill);
            return ({value, label, disabled});
        });

        return options;
    };

    render() {
        const {handleChange, buff, buffAmount} = this.props;
        return (
            <Select
                {...this.props}
                options={this.skillOptionList()}
                onChange={(option) => {
                    if (option) {
                        handleChange(buff, buffAmount, option.value)
                    } else {
                        handleChange(buff, buffAmount, null)
                    }
                }}
            />
        );
    }
}

SkillBuffSelectField.propTypes = {
    trainer: PropTypes.object.isRequired,
    handleChange: PropTypes.func.isRequired,
    buff: PropTypes.string.isRequired,
    buffAmount: PropTypes.number.isRequired,
};

SkillBuffSelectField.defaultProps = {};

export default SkillBuffSelectField;
