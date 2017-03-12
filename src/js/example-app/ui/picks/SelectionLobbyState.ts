import {PlayerSelections} from "../../player/playerSelections";
import HeroPortrait from "../data/HeroPortrait";
import Heroes from './../data/heroes';

export  default class SelectionLobbyState {
    selections : Array<PlayerSelections>;
    available : Array<HeroPortrait>;

    private clientId : string;

    constructor(clientId) {
        this.clientId = clientId;

        this.available = Heroes;
        this.selections = Array<PlayerSelections>();

        this.selections.push(new PlayerSelections(this.clientId));
        this.selections.push(new PlayerSelections('a_n_other'));
    }

    getClientId() {
        return this.clientId
    }
}