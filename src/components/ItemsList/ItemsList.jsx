import React, { Component } from "react";
import "../ItemsList/ItemsList.css";
import { Item } from "../Item/Item.jsx";


class ItemList extends Component {
    renderNews = tasks => {
        const { moreInformation, openModalWindow } = this.props;
        if (tasks.length !== 0) {
            return tasks.map(function (item) {
                return <Item key={item.lister_url} tasks={item} openModalWindow={openModalWindow} moreInformation={moreInformation} />;
            });
        }
        return <p>К сожалению данных нет</p>;
    };

    render() {
        const { data } = this.props;
        return <div className="single-todo__item">{this.renderNews(data)}</div>;
    }
}
export default ItemList;