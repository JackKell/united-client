import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import { withStyles, createStyleSheet } from 'material-ui/styles';

import SkillBuffSelectField from './SkillBuffSelectField';

const styleSheet = createStyleSheet('TrainerInfoStep', theme => ({
    selectField: {
        marginBottom: "1em",
        marginTop: "1em"
    }
}));

class TrainerBackgroundMaker extends Component {
    render() {
        const {classes, trainer, handleBuffSkill} = this.props;
        return (
            <Grid item xs={12}>
                <h3>Background</h3>
                <SkillBuffSelectField
                    className={classes.selectField}
                    trainer={trainer}
                    placeholder="Adept Skill"
                    handleChange={handleBuffSkill}
                    buff="adeptSkill"
                    buffAmount={4}
                    value={trainer.background.adeptSkill}
                />
                <SkillBuffSelectField
                    className={classes.selectField}
                    trainer={trainer}
                    placeholder="Novice Skill"
                    handleChange={handleBuffSkill}
                    buff="noviceSkill"
                    buffAmount={3}
                    value={trainer.background.noviceSkill}
                />
                <SkillBuffSelectField
                    className={classes.selectField}
                    trainer={trainer}
                    placeholder="Pathetic Skill 1"
                    handleChange={handleBuffSkill}
                    buff="patheticSkill1"
                    buffAmount={1}
                    value={trainer.background.patheticSkill1}
                />
                <SkillBuffSelectField
                    className={classes.selectField}
                    trainer={trainer}
                    placeholder="Pathetic Skill 2"
                    handleChange={handleBuffSkill}
                    buff="patheticSkill2"
                    buffAmount={1}
                    value={trainer.background.patheticSkill2}
                />
                <SkillBuffSelectField
                    className={classes.selectField}
                    trainer={trainer}
                    placeholder="Pathetic Skill 3"
                    handleChange={handleBuffSkill}
                    buff="patheticSkill3"
                    buffAmount={1}
                    value={trainer.background.patheticSkill3}
                />
            </Grid>
        );
    }
}

TrainerBackgroundMaker.propTypes = {
    trainer: PropTypes.object.isRequired,
    handleBuffSkill: PropTypes.func.isRequired
};

TrainerBackgroundMaker.defaultProps = {};

export default withStyles(styleSheet)(TrainerBackgroundMaker);
