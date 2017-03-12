import * as React from 'react';
import {PlayerSelectionsInterface} from "./PlayerSelectionsInterface";
import NullHeroPortrait from "../data/NullHeroPortrait";
import {AvailableSelectionsInterface} from "./AvailableSelectionsInterface";

//todo: pass class down that states what picks are available etc.
//todo: add className="inactive" when inactive.
export default class AvailableSelections extends React.Component<AvailableSelectionsInterface, any> {
    constructor(props,context) {
        super(props,context);
    }

    render () {
        let heroList = this.heroListJSX();

        return (
            <div>
                <h2 className="shimmer">{"It's your turn to pick"}</h2>
                <div id="heroes">
                    <ul>
                        {heroList}
                    </ul>
                </div>
            </div>
        );
    }

    heroListJSX() {
        return this.props.heroes.map((a, index) => (
            <li key={index}>
                <img src={a.url}/>
                <span>{a.name}</span>
            </li>
        ));
    }
}