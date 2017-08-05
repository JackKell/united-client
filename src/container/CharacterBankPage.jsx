import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import CharacterBank from "../component/CharacterBank";

class CharacterBankPage extends Component {
    render() {
        return (
            <CharacterBank trainers={this.props.trainers}/>
        );
    }
}

CharacterBankPage.propTypes = {
    trainers: PropTypes.array.isRequired
};

CharacterBankPage.defaultProps = {
};

const mapStateToProps = (state) => {
    return {
        trainers: state.trainers
    };
};

const mapDispatchToProps = (dispatch) => {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CharacterBankPage);
