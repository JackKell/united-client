import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import List, {
    ListItem,
    ListItemAvatar,
    ListItemIcon,
    ListItemSecondaryAction,
    ListItemText,
} from 'material-ui/List';
import Paper from 'material-ui/Paper';
import IconButton from 'material-ui/IconButton';
import Grid from 'material-ui/Grid';
import MobileStepper from 'material-ui/MobileStepper';
import TextField from 'material-ui/TextField';
import Add from 'material-ui-icons/Add';
import Delete from 'material-ui-icons/Delete';

import GenderSelectField from "./GenderSelectField";
import SkillBuffSelectField from "./SkillBuffSelectField";

const styleSheet = createStyleSheet('TrainerCreator', theme => ({
    root: {
        marginTop: 30,
        display: 'flex',
        flexWrap: 'wrap',
    },
    paper: {
        padding: "16px",
        color: theme.palette.text.primary,
    },
    stepper: {
        backgroundColor: "white",
        textColor: "black"
    },
    selectField: {
        marginBottom: "1em",
        marginTop: "1em"
    }
}));

const edges = [
    {name: "Edge", requirements:"Be close to edgy", effect: "Become edgy"},
];

function getEdgeList(edges) {
    return (edges.map(edge => {
        return (
                <ListItem key={edge.name} button>
                    <ListItemText
                        primary={edge.name}
                        secondary={"Requirement: " + edge.requirements}/>
                    <ListItemSecondaryAction>
                        <IconButton aria-label="Delete">
                            <Add />
                        </IconButton>
                        <IconButton aria-label="Delete">
                            <Delete />
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
            );
    }));
}

class TrainerCreator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeStep: 2,
            lastStep: 6,
            newTrainer: {
                level: 1,
                statPoints: 10,
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
            },
        };
    }

    handleNext = () => {
        this.setState({
            activeStep: this.state.activeStep + 1,
        });
    };

    handleBack = () => {
        this.setState({
            activeStep: this.state.activeStep - 1,
        });
    };

    handleChangeTrait = (trait, value) => {
        this.setState({
            newTrainer: {
                ...this.state.newTrainer,
                [trait]: value
            }
        })
    };

    handleBuffSkill = (buff, buffAmount, skill) => {
        let background = null;
        let skills = null;

        if (skill === null) {
            background = {
                ...this.state.newTrainer.background,
                [buff]: null
            };
            skills = {
                ...this.state.newTrainer.skills,
                [this.state.newTrainer.background[buff]]: 2
            };
        } else {
            background = {
                ...this.state.newTrainer.background,
                [buff]: skill
            };
            skills = {
                ...this.state.newTrainer.skills,
                [this.state.newTrainer.background[buff]]: 2,
                [skill]: buffAmount
            };
        }

        this.setState({
            ...this.state,
            newTrainer: {
                ...this.state.newTrainer,
                skills,
                background
            }
        })
    };

    renderStepContent = () => {
        const {classes} = this.props;
        switch(this.state.activeStep) {
            case 0:
                return (
                    <Grid item xs={12}>
                        <h4>Character Information</h4>
                        <TextField
                            label={"Name"}
                            margin="normal"
                            defaultValue={this.state.newTrainer.name}
                            onBlur={event => this.handleChangeTrait("name", event.target.value)}
                            fullWidth/>
                        <TextField
                            label={"Age"}
                            margin="normal"
                            defaultValue={this.state.newTrainer.age}
                            onBlur={event => this.handleChangeTrait("age", event.target.value)}
                            fullWidth/>
                        <TextField
                            label={"Weight"}
                            margin="normal"
                            defaultValue={this.state.newTrainer.weight}
                            onBlur={event => this.handleChangeTrait("weight", event.target.value)}
                            fullWidth/>
                        <TextField
                            multiline
                            label={"Description"}
                            margin="normal"
                            defaultValue={this.state.newTrainer.description}
                            onBlur={event => this.handleChangeTrait("description", event.target.value)}
                            fullWidth/>
                        <GenderSelectField
                            className={classes.selectField}
                            clearable={false}
                            showMenuBelow
                            floatingLabel
                            name="trainer-gender-select"
                            value={this.state.newTrainer.gender}
                            onChange={(option) => this.handleChangeTrait("gender", option.value)}/>
                    </Grid>
                );
            case 1:
                return (
                    <Grid item xs={12}>
                        <h4>Background</h4>
                        <SkillBuffSelectField
                            className={classes.selectField}
                            trainer={this.state.newTrainer}
                            placeholder="Adept Skill"
                            handleChange={this.handleBuffSkill}
                            buff="adeptSkill"
                            buffAmount={4}
                            value={this.state.newTrainer.background.adeptSkill}
                        />
                        <SkillBuffSelectField
                            className={classes.selectField}
                            trainer={this.state.newTrainer}
                            placeholder="Novice Skill"
                            handleChange={this.handleBuffSkill}
                            buff="noviceSkill"
                            buffAmount={3}
                            value={this.state.newTrainer.background.noviceSkill}
                        />
                        <SkillBuffSelectField
                            className={classes.selectField}
                            trainer={this.state.newTrainer}
                            placeholder="Pathetic Skill 1"
                            handleChange={this.handleBuffSkill}
                            buff="patheticSkill1"
                            buffAmount={1}
                            value={this.state.newTrainer.background.patheticSkill1}
                        />
                        <SkillBuffSelectField
                            className={classes.selectField}
                            trainer={this.state.newTrainer}
                            placeholder="Pathetic Skill 2"
                            handleChange={this.handleBuffSkill}
                            buff="patheticSkill2"
                            buffAmount={1}
                            value={this.state.newTrainer.background.patheticSkill2}
                        />
                        <SkillBuffSelectField
                            className={classes.selectField}
                            trainer={this.state.newTrainer}
                            placeholder="Pathetic Skill 3"
                            handleChange={this.handleBuffSkill}
                            buff="patheticSkill3"
                            buffAmount={1}
                            value={this.state.newTrainer.background.patheticSkill3}
                        />
                    </Grid>
                );
            case 2:
                return (
                    <Grid item xs={12}>
                        <h4>Edge Select</h4>
                        <div style={{maxHeight: 200, overflow: 'auto'}}>
                            <List>
                                <List>
                                    {getEdgeList(edges)}
                                    {/*{generate(*/}
                                        {/*<ListItem button>*/}
                                            {/*<ListItemText*/}
                                                {/*primary="Single-line item"*/}
                                                {/*secondary={"Secondary text"}*/}
                                            {/*/>*/}
                                        {/*</ListItem>,*/}
                                    {/*)}*/}
                                </List>
                            </List>
                        </div>
                    </Grid>
                );
            case 3:
                return (
                    <div></div>
                );
            case 4:
                return (
                    <div></div>
                );
            case 5:
                return (
                    <div></div>
                );
            case 6:
                return (
                    <div></div>
                );
            case 7:
                return (
                    <div></div>
                );
            default:
                return (
                    <div>
                        <h3>Something is wrong</h3>
                    </div>
                );
        }
    };

    render() {
        const {classes} = this.props;

        return (
            <Grid container gutter={24}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <h1>Trainer Creation Page</h1>
                    </Paper>
                </Grid>
                <Grid item xs={5}>
                    <Paper className={classes.paper}>
                        <h3>Character Overview</h3>
                        {JSON.stringify(this.state.newTrainer, null, '\t')}
                    </Paper>
                </Grid>
                <Grid item xs={7}>
                    <Paper className={classes.paper}>
                        <h3>Step {this.state.activeStep + 1}</h3>
                        <Grid container gutter={24}>
                            {this.renderStepContent()}
                        </Grid>
                        <MobileStepper
                            className={classes.stepper}
                            type="dots"
                            steps={this.state.lastStep}
                            position="static"
                            activeStep={this.state.activeStep}
                            onBack={this.handleBack}
                            onNext={this.handleNext}
                            disableBack={this.state.activeStep === 0}
                            disableNext={this.state.activeStep === this.state.lastStep - 1}/>
                    </Paper>
                </Grid>
            </Grid>
        );
    }
}

TrainerCreator.propTypes = {
    classes: PropTypes.object.isRequired,

};

TrainerCreator.defaultProps = {
};

export default withStyles(styleSheet)(TrainerCreator);

