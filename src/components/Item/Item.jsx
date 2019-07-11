import React from "react";
import "../Item/Item.css";
import { Link } from 'react-router-dom'

class Item extends React.Component {
    render() {
        const {

            img_url,
            title,
            keywords,
            summary,
            price_formatted,
        } = this.props.tasks;

        const {
            id,
            openModalWindow,
            deleteItemFavourits,
            displayFavourits
        } = this.props;
        this.props.tasks.id = id;
        return (
            <React.Fragment>
                {displayFavourits ?
                    <div className="loaded-itemList__search"
                        onClick={() => openModalWindow(this.props.tasks.id, 1)}>
                        <div className="loaded-img__item ">
                            <img src={img_url} alt="alt.png" />
                        </div>
                        <div className="loaded-text__content">
                            <h2>{title}</h2>
                            <h3>{keywords}</h3>
                            <div>{summary}</div>
                            <h5>{price_formatted}</h5>
                        </div>
                        <div className="more-detaile__button">
                            <Link className="button_favourites__item" to={`/favourites/item/${id}`}>Подробнее</Link>
                            <button
                                className="single-todo__destroy-button"
                                onClick={() => deleteItemFavourits(this.props.tasks.id)}
                            >Удалить</button>
                        </div>
                    </div >
                    :
                    <div className="loaded-itemList__search"
                        onClick={() => openModalWindow(this.props.tasks.id, 0)}>
                        <div className="loaded-img__item ">
                            <img src={img_url} alt="alt.png" />
                        </div>
                        <div className="loaded-text__content">
                            <h2>{title}</h2>
                            <h3>{keywords}</h3>
                            <div>{summary}</div>
                            <h5>{price_formatted}</h5>
                        </div>
                        <Link className="button_search__item" to={`/search/item/${id}`}>Подробнее</Link>
                    </div >
                }
            </React.Fragment>
        )
            ;
    }
}
export { Item };