import React, { Component } from "react";
import { Item } from "../Item/Item.jsx";


class ItemFavorits extends Component {
    renderNews = tasks => {
        if (tasks.length !== 0) {
            return tasks.map(function (item) {
                return <Item key={item.lister_url} tasks={item} />;
            });
        }
        return <p>Вам ничего не понравилось</p>;
    };

    render() {
        const { data } = this.props;
        return <div className="single-todo__item">{this.renderNews(data)}</div>;

    }
}
export default ItemFavorits;