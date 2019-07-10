import React, { Component } from "react";
import "./DisplaySelection.css";
import { Link } from 'react-router-dom'
class DisplaySelection extends Component {

    render() {
        return (
            <div className="task-item__sort">
                <Link className="button_home" to='/search'>Поиск</Link>
                <Link className="button_favourites" to='/favourites'>favourites</Link>
            </div >
        );
    }
}

export default DisplaySelection;