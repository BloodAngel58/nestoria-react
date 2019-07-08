import React from "react";
import "../Item/Item.css";

class Item extends React.Component {
    render() {
        const { img_url, title, keywords, summary, price_formatted, lister_url } = this.props.tasks;
        const { openModalWindow, deleteItemFavourits, displayFavourits } = this.props;

        return (
            <div>
                {displayFavourits ? <div className="loaded-itemList__search" id={lister_url} >
                    <div className="loaded-img__item ">
                        <img src={img_url} alt="alt.png" onClick={() => openModalWindow(this.props.tasks.img_url)} />
                    </div>
                    <div className="loaded-text__content">
                        <h2>{title}</h2>
                        <h3>{keywords}</h3>
                        <div>{summary}</div>
                        <h5>{price_formatted}</h5>
                    </div>
                    <div className="more-detaile__button">
                        <button >More information</button>
                        <input
                            type="button"
                            className="single-todo__destroy-button"
                            value="Удалить"
                            onClick={() => deleteItemFavourits(this.props.tasks.img_url)}
                        />
                    </div>

                </div > :
                    <div className="loaded-itemList__search" id={lister_url} onClick={() => openModalWindow(this.props.tasks.img_url)}>
                        <div className="loaded-img__item ">
                            <img src={img_url} alt="alt.png" />
                        </div>
                        <div className="loaded-text__content">
                            <h2>{title}</h2>
                            <h3>{keywords}</h3>
                            <div>{summary}</div>
                            <h5>{price_formatted}</h5>
                        </div>
                        <button className="more-detaile__button">More information</button>
                    </div >}
            </div>

        );
    }
}
export { Item };
// { displayFavourits ? <p>Уууиии</p> : <p>NAAAAIN</p> }
// {/* {this.props.deleteItemFavourits ? <input
//                     type="button"
//                     className="single-todo__destroy-button"
//                     value=" x "
//                     onClick={() => this.props.deleteItemFavourits(img_url)}
//                 /> : null} */}