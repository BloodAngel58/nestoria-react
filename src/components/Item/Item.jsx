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
            lister_url
        } = this.props.tasks;

        const {
            openModalWindow,
            deleteItemFavourits,
            displayFavourits
        } = this.props;

        return (
            <div>
                {displayFavourits ?
                    <div className="loaded-itemList__search"
                        id={lister_url}
                        onClick={() => openModalWindow(this.props.tasks.img_url, 1)}>
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
                            <button ><Link to='/favourites/item'>favourites ITEM</Link></button>
                            <button
                                className="single-todo__destroy-button"
                                onClick={() => deleteItemFavourits(this.props.tasks.lister_url)}
                            >Удалить</button>
                        </div>
                    </div >
                    :
                    <div className="loaded-itemList__search"
                        id={lister_url}
                        onClick={() => openModalWindow(this.props.tasks.img_url, 0)}>
                        <div className="loaded-img__item ">
                            <img src={img_url} alt="alt.png" />
                        </div>
                        <div className="loaded-text__content">
                            <h2>{title}</h2>
                            <h3>{keywords}</h3>
                            <div>{summary}</div>
                            <h5>{price_formatted}</h5>
                        </div>
                        <button className="more-detaile__button"><Link to='/search/item'>ITEM</Link></button>
                    </div >}
            </div>
        );
    }
}
export { Item };