import React, { Component } from "react";
import "../ItemsList/ItemsList.css";
import { Item } from "../Item/Item.jsx";
import { getIdItem } from "../../OtherFunctions/OtherFunctions"

class ItemList extends Component {
    renderNews = tasks => {
        const {
            openModalWindow,
            displayFavourits,
            deleteItemFavourits
        } = this.props;

        if (tasks.length !== 0) {
            return tasks.map(function (item) {
                return <Item
                    id={getIdItem(item.lister_url)}
                    key={getIdItem(item.lister_url)}
                    deleteItemFavourits={deleteItemFavourits}
                    displayFavourits={displayFavourits}
                    tasks={item}
                    openModalWindow={openModalWindow} />;
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