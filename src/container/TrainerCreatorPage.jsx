import React, { Component } from 'react';
import { connect } from 'react-redux';

import TrainerCreator from '../component/TrainerCreator';

class TrainerCreatorPage extends Component {
    render() {
        return (
            <TrainerCreator/>
        );
    }
}

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(TrainerCreatorPage);