import React, {Component} from 'react';
import List from 'material-ui/List';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import {CardActions} from 'material-ui/Card';
import Button from 'material-ui/Button';

import EdgeCard from './EdgeCard';

const styleSheet = createStyleSheet('EdgeList', theme => ({
}));

class EdgeList extends Component {
    renderEdgeCards = () => {
        return this.props.edges.map(edge => {
            return (
                <EdgeCard key={edge.id} edge={edge}/>
            );
        });
    };

    render() {
        return (
            <List>
                {this.renderEdgeCards()}
            </List>
        );
    }
}

EdgeList.propTypes = {
    edges: PropTypes.array
};

EdgeList.defaultProps = {
    edges: []
};

export default withStyles(styleSheet)(EdgeList);
