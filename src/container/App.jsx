import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {MuiThemeProvider} from 'material-ui';

import Hello from "../component/Hello";
import BattleSimPage from "../container/BattleSimPage";

injectTapEventPlugin();

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <Hello/>
                    <Switch>
                        <Route exact path={"/"} component={BattleSimPage}/>
                        <Route render={function () {
                            return <h1>No Page Found</h1>
                        }}/>
                    </Switch>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
