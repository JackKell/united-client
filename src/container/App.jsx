import React, { Component } from 'react';
import { Container, Row, Col} from 'react-grid-system';
import { Link, Switch, Route } from 'react-router-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Grid from 'material-ui/Grid';
import AppBar from 'material-ui/AppBar'
import {createMuiTheme, MuiThemeProvider} from 'material-ui/styles';

import BattleSimPage from "../container/BattleSimPage";
import TrainerCreatorPage from "./TrainerCreatorPage";
import CharacterBankPage from "./CharacterBankPage";
import TrainerProfile from "./TrainerProfile";


injectTapEventPlugin();

const theme = createMuiTheme({});

class App extends Component {
    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <div>
                    <div style={{padding: "1em"}}>
                        <Link to="/battle-sim">Battle Sim</Link>
                        <text> | </text>
                        <Link to="/trainer-creator">Trainer Creator</Link>
                        <text> | </text>
                        <Link to="/character-bank">Character Bank</Link>
                        {/*<Link to="/item-generator">Item Generator</Link><br/>*/}
                        {/*<Link to="/pokemon-generator">Pokemon Generator</Link><br/>*/}
                        {/*<Link to="/trainer-generator">Trainer Generator</Link><br/>*/}
                        <Switch>
                            <Route exact path="/" component={TrainerCreatorPage}/>
                            <Route exact path="/battle-sim" component={BattleSimPage}/>
                            <Route exact path="/trainer-creator" component={TrainerCreatorPage}/>
                            <Route exact path="/character-bank" component={CharacterBankPage}/>
                            <Route path="/trainer/:id" component={TrainerProfile}/>
                            <Route render={function () {
                                return <h1>No Page Found (T_T)</h1>
                            }}/>
                        </Switch>
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
