import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Hello extends Component {
    render() {
        return (
            <div>
                <h1>Hello, {this.props.name}</h1>
            </div>
        );
    }
}

Hello.propTypes = {
    name: PropTypes.string
};

Hello.defaultProps = {
    name: "World"
};

export default Hello;