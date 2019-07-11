import React, { Component } from "react";
import "./DisplaySelection.css";
import { NavLink } from 'react-router-dom'
class DisplaySelection extends Component {

    render() {
        return (
            <div className="task-item__sort">
                <NavLink className="button_home" activeClassName='activeSelector' to='/search'>Поиск</NavLink>
                <NavLink className="button_favourites" activeClassName="activeSelector" to='/favourites'>favourites</NavLink>
            </div >
        );
    }
}

export default DisplaySelection;