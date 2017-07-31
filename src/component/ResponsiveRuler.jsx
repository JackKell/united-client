import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Hidden from 'material-ui/Hidden';

class ResponsiveRuler extends Component {
    render() {
        return (
            <div>
                <Hidden lgDown>
                    <h1>xl</h1>
                </Hidden>
                <Hidden mdDown xlUp>
                    <h1>lg</h1>
                </Hidden>
                <Hidden smDown lgUp>
                    <h1>md</h1>
                </Hidden>
                <Hidden xsDown mdUp>
                    <h1>sm</h1>
                </Hidden>
                <Hidden smUp>
                    <h1>xs</h1>
                </Hidden>
            </div>
        );
    }
}

ResponsiveRuler.propTypes = {};

ResponsiveRuler.defaultProps = {};

export default ResponsiveRuler;
