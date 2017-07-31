import React, { Component } from 'react';
import { string } from 'prop-types';

// NOTE: this is component is a simple reference
// its not really meant to be used in application

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
    name: string
};

Hello.defaultProps = {
    name: "World"
};

export default Hello;