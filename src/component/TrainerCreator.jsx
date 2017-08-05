import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import MobileStepper from 'material-ui/MobileStepper';
import Paper from 'material-ui/Paper';
import { withStyles, createStyleSheet } from 'material-ui/styles';

import TrainerInfoStep from './TrainerInfoStep';
import TrainerBackgroundMaker from './TrainerBackgroundMaker';
import TrainerEdgeSelect from './TrainerEdgeSelect';
import TrainerFeatureSelect from './TrainerFeatureSelect';
import StatAssigner from "./StatAssigner";
import FinalizeTrainer from "./FinalizeTrainer";
import TrainerPartyBuilder from "./TrainerPartyBuilder";
import TrainerInventorySetup from "./TrainerInventorySetup";

const styleSheet = createStyleSheet('TrainerCreator', theme => ({
    root: {
        flexGrow: 1,
        marginTop: 30,
    },
    paper: {
        padding: 16,
        color: theme.palette.text.primary,
        height: "100%",
    },
    currentStep: {
        color: theme.palette.text.primary,
    },
    stepper: {
        backgroundColor: "white",
        textColor: "black",
    },
    selectField: {
        marginBottom: "1em",
        marginTop: "1em"
    }
}));

// TODO: Remove these dummy constants
const edges = [
    {id: 1, name: "Apricorn Balls",
        prerequisites:"Novice Survival or Adept Technology Education",
        effect: "As an Extended Action, you may craft Apricorns into their corresponding Poké Ball. Use of this Feature requires access to a Poké Ball Tool Box."},
    {id: 2, name: "Beast Master",
        prerequisites:"Novice Intimidate",
        effect: "You may use Intimidate instead of Command to make Pokemon at 0 or 1 Loyalty obey your commands. You may also use Intimidate instead of Command to determine the limits and Bonus Experience from Training."},
    {id: 3, name: "Groomer",
        prerequisites: "Novice Pokémon Education",
        effect: "You know how to effectively groom your Pokémon with access to a Groomer’s Kit. You may groom up to 6 Pokémon in one hour. Grooming Pokémon may count as an hour of Training, and you  may apply Experience Training, teach Poke-Edges, and apply any Features that could be applied during Training. If you apply Experience Training from Grooming, use your General Education or Pokémon Education Rank to determine Bonus Experience gained during Training. A Pokémon that has been Groomed also gains a +1d6 Bonus to the Introduction Roll of a Contest for the rest of the day."},
    {id: 4, name: "Athletic Initiative",
        prerequisites: "Adept Athletics",
        effect: "You learn the Move Agility."},
    {id: 5, name: "Basic Psionics",
        prerequisites: "Elemental Connection (Psychic)",
        effect: "You learn the Move Confusion."},
    {id: 6, name: "Smooth",
        prerequisites: "Expert Charm or Expert Focus",
        effect: "You gain +4 Evasion against Moves with the Social keyword, and gain a +2 Bonus on Save Checks against Rage and Infatuation."},
    {id: 7, name: "Acrobat",
        prerequisites: "Novice Acrobatics",
        effect: "Increase your Jump and Long Jump Capabilities by +1 each."},
    {id: 8, name: "Wallrunner",
        prerequisites:"Expert Acrobatics",
        effect: "You may run on vertical surfaces both vertically and horizontally for up to your Acrobatics Rank in meters before jumping off."},

];
const features = [];
const baseStats = {
    hp: 10,
    attack: 5,
    defense: 5,
    specialAttack: 5,
    specialDefense: 5,
    speed: 5,
};
const maxInitialStatInc = 5;
const newTrainer = {
    level: 1,
    statPoints: 10,
    featurePoints: 4,
    edgePoints: 4,
    name: "",
    age: "",
    gender: "",
    height: "",
    weight: "",
    background: {
        adeptSkill: null,
        noviceSkill: null,
        patheticSkill1: null,
        patheticSkill2: null,
        patheticSkill3: null,
    },
    description: "",
    skills: {
        acrobatics: 2,
        athletics: 2,
        combat: 2,
        intimidate: 2,
        stealth: 2,
        survival: 2,
        generalEducation: 2,
        occultEducation: 2,
        pokemonEducation: 2,
        technologyEducation: 2,
        guile: 2,
        perception: 2,
        charm: 2,
        command: 2,
        focus: 2,
        intuition: 2,
    },
    features: [],
    edges: [],
    stats: {
        hp: 10,
        attack: 5,
        defense: 5,
        specialAttack: 5,
        specialDefense: 5,
        speed: 5,
    }
};

class TrainerCreator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stepIndex: 0,
            totalSteps: 8,
            trainer: newTrainer,
        };
    }

    handleChangeStat = (stat, delta) => {
        const oldStatPoints = this.state.trainer.statPoints;
        const oldStats = {...this.state.trainer.stats};
        const newStatPoints = oldStatPoints - delta;
        const newStatValue = oldStats[stat] + delta;
        const baseStatValue = baseStats[stat];

        // Check if there are enough stat points left to spend
        if (oldStatPoints < 0) return;
        // Check if there are already to many points allocated to that stat
        if (newStatValue - baseStatValue > maxInitialStatInc) return;
        // Check if the stat would be reduced past its base stat
        if (newStatValue < baseStatValue) return;

        this.setState((prevState, props) => ({
            trainer: {
                ...prevState.trainer,
                statPoints: newStatPoints,
                stats: {
                    ...prevState.trainer.stats,
                    [stat]: newStatValue
                }
            }
        }));
    };

    handleNext = () => {
        this.setState((prevState, props) => ({
            stepIndex: prevState.stepIndex + 1
        }));
    };

    handleBack = () => {
        this.setState((prevState, props) => ({
            stepIndex: prevState.stepIndex - 1
        }));
    };

    handleSetTrait = (trait, value) => {
        this.setState((prevState, props) => ({
            trainer: {
                ...prevState.trainer,
                [trait]: value
            }
        }));
    };

    handleBuffSkill = (buff, buffAmount, skill) => {
        let background = null;
        let skills = null;

        if (skill === null) {
            background = {
                ...this.state.trainer.background,
                [buff]: null
            };
            skills = {
                ...this.state.trainer.skills,
                [this.state.trainer.background[buff]]: 2
            };
        } else {
            background = {
                ...this.state.trainer.background,
                [buff]: skill
            };
            skills = {
                ...this.state.trainer.skills,
                [this.state.trainer.background[buff]]: 2,
                [skill]: buffAmount
            };
        }

        this.setState((prevState, props) => ({
            trainer: {
                ...prevState.trainer,
                skills,
                background
            }
        }));
    };

    handleSaveTrainer = () => {
        this.props.addTrainer(this.state.trainer);

        this.setState((prevState, props) => ({
            trainer: newTrainer,
            stepIndex: 0
        }));
    };

    renderStepContent = () => {
        const {stepIndex, trainer} = this.state;
        switch(stepIndex) {
            case 0: return <TrainerInfoStep trainer={trainer} handleChangeTrait={this.handleSetTrait}/>;
            case 1: return <TrainerBackgroundMaker trainer={trainer} handleBuffSkill={this.handleBuffSkill}/>;
            case 2: return <TrainerEdgeSelect trainer={trainer} edges={edges}/>;
            case 3: return <TrainerFeatureSelect trainer={trainer} features={features}/>;
            case 4: return <StatAssigner trainer={trainer} handleChangeStat={this.handleChangeStat}/>;
            case 5: return <TrainerPartyBuilder/>;
            case 6: return <TrainerInventorySetup/>;
            case 7: return <FinalizeTrainer handleSaveTrainer={this.handleSaveTrainer}/>;
            default: return <h1>Something is wrong</h1>;
        }
    };

    render() {
        const {classes} = this.props;

        return (
            <div className={classes.root}>
                <Grid container spacing={8}>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>
                            <h1>Trainer Creation Page</h1>
                        </Paper>
                    </Grid>
                    <Grid item xs={4}>
                        <Paper className={classes.paper}>
                            <h3>Character Overview</h3>
                            {JSON.stringify(this.state.trainer, null, '\t')}
                        </Paper>
                    </Grid>
                    <Grid item xs={8}>
                        <Paper className={classes.paper}>
                            {this.renderStepContent()}
                        </Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper>
                            <MobileStepper
                                className={classes.stepper}
                                type="dots"
                                steps={this.state.totalSteps}
                                position="bottom"
                                activeStep={this.state.stepIndex}
                                onBack={this.handleBack}
                                onNext={this.handleNext}
                                disableBack={this.state.stepIndex === 0}
                                disableNext={this.state.stepIndex === this.state.totalSteps - 1}/>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

TrainerCreator.propTypes = {
    addTrainer: PropTypes.func.isRequired,
    classes: PropTypes.object,
};

TrainerCreator.defaultProps = {
};

export default withStyles(styleSheet)(TrainerCreator);

