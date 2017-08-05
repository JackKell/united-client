import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTrainer } from '../action/TrainerAction';

import TrainerCreator from '../component/TrainerCreator';

class TrainerCreatorPage extends Component {
    render() {
        const {addTrainer} = this.props;
        return (
            <TrainerCreator addTrainer={addTrainer}/>
        );
    }
}

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {
        addTrainer: (trainer) => {
            dispatch(addTrainer(trainer));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TrainerCreatorPage);