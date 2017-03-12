import * as React from 'react';
import SelectionLobbyState from "./SelectionLobbyState";
import PlayerSelections from "./PlayerSelections";
import AvailableSelections from "./AvailableSelections";
import {SelectionLobbyInterface} from "./SelectionLobbyInterface";


export default class SelectionLobby extends React.Component<SelectionLobbyInterface, SelectionLobbyState> {
    constructor(props,context) {
        super(props,context);

        this.state = new SelectionLobbyState(this.props.colyseus.client.id);
    }

    render () {
        return (
            <div id="selection-lobby">
                <PlayerSelections selections={this.getSelectionsForCurrent()}
                                  current_user={true} />

                <div id="main" className="panel">
                    <AvailableSelections heroes={this.state.available}/>
                </div>

                <PlayerSelections selections={this.getSelectionsForOther()}
                                  current_user={false} />
            </div>
        );
    }

    getSelectionsForCurrent() {
        return this.state.selections.find(
            s => s.getClientId() == this.state.getClientId()
        );
    }

    getSelectionsForOther() {
        return this.state.selections.find(
            s => s.getClientId() != this.state.getClientId()
        );
    }
}