import React, { Component } from "react";
//import "./DisplaySelection.css";

class DisplaySelection extends Component {
    receiveData = e => {
        const selectInd = e.target.options.selectedIndex;
        this.props.displaySelection(selectInd);

    };

    render() {
        return (
            <div className="task-item__sort">
                <select onChange={this.receiveData}>
                    <option value="itemList">Результат запроса</option>
                    <option value="itemsFavourites">Избранное</option>
                </select>
            </div>
        );
    }
}

export default DisplaySelection;