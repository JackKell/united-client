import React, {Component} from 'react';
import PropTypes from 'prop-types';
import CharacterBankPage from "../container/CharacterBankPage";

class CharacterBank extends Component {
    renderTrainers = () => {
        return this.props.trainers.map((trainer) => {
            return (
                <div>
                    <h3>{trainer.name}</h3>
                    <h4>Lvl: {trainer.level}</h4>
                    <h4>Stats</h4>
                    <h5>hp {trainer.stats.hp}</h5>
                    <h5>attack {trainer.stats.attack}</h5>
                    <h5>defense {trainer.stats.defense}</h5>
                    <h5>special attack {trainer.stats.specialAttack}</h5>
                    <h5>special defense {trainer.stats.specialDefense}</h5>
                    <h5>speed {trainer.stats.speed}</h5>
                    <hr/>
                </div>
            );
        })
    };

    render() {
        return (
            <div>
                <h1>Character Bank</h1>
                {this.renderTrainers()}
            </div>
        );
    }
}

CharacterBank.propTypes = {
    trainers: PropTypes.array.isRequired,
};

CharacterBank.defaultProps = {};

export default CharacterBank;
