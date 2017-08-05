import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Card, { CardContent } from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import Grid from 'material-ui/Grid';
import Add from 'material-ui-icons/Add';
import { withStyles, createStyleSheet } from 'material-ui/styles';

const styleSheet = createStyleSheet('EdgeCard', theme => ({
}));

class EdgeCard extends Component {
    render() {
        const { edge, children } = this.props;
        return (
            <Card>
                <CardContent>
                    <h4>{edge.name}</h4>
                    <h6>Prerequisites: {edge.prerequisites}</h6>
                    <p>{edge.effect}</p>
                </CardContent>
                {children}
            </Card>
        );
    }
}

EdgeCard.propTypes = {
    edge: PropTypes.object.isRequired,
    children: PropTypes.element
};

EdgeCard.defaultProps = {};

export default withStyles(styleSheet)(EdgeCard);
