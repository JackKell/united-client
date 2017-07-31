import React, { Component } from 'react';
import { Container, Row, Col} from 'react-grid-system';
import { Link, Switch, Route } from 'react-router-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
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
                <Container>
                    <Link to="/battle-sim">Battle Sim</Link><br/>
                    <Link to="/trainer-creator">Trainer Creator</Link><br/>
                    <Link to="/character-bank">Character Bank</Link><br/>
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
                </Container>
            </MuiThemeProvider>
        );
    }
}

export default App;
