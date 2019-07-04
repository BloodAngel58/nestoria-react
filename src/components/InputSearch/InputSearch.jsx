import React from "react";
import "./InputSearch.css";

class Input extends React.Component {
    state = {
        city: null
    };
    receiveData = e => {
        this.setState({ city: e.target.value });
    };
    onBtnClickHandler = e => {
        e.preventDefault();
        const { city } = this.state;
        if (city) {
            this.props.searchText(city);
        } else alert("Все поля должны быть заполнены");
    };
    render() {
        return (
            <div className="container">
                <h2>Просто рабочий заголовок</h2>
                <div className="input-task">
                    <input
                        id="input-text__city"
                        className="data-input__text"
                        type="text"
                        placeholder="New Task"
                        onChange={this.receiveData}
                    />
                    <button
                        className="data-input__search"
                        onClick={this.onBtnClickHandler}
                    >Жмякни </button>
                </div>
            </div>
        );
    }
}
export default Input;