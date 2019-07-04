import React from "react";
import "../Item/Item.css";

class Item extends React.Component {
    render() {
        const { img_url, title, keywords, summary, price_formatted, lister_url } = this.props.tasks;
        const { moreInformation, openModalWindow } = this.props;

        return (
            <div className="loaded-itemList__search" id={lister_url} onClick={() => openModalWindow(this.props.tasks)}>
                <div className="loaded-img__item ">
                    <img src={img_url} alt="alt.png" />
                </div>
                <div className="loaded-text__content">
                    <h2>{title}</h2>
                    <h3>{keywords}</h3>
                    <div>{summary}</div>
                    <h5>{price_formatted}</h5>
                </div>
                <button onClick={() => moreInformation(lister_url)} className="more-detaile__button">More information</button>
            </div >
        );
    }
}
export { Item };