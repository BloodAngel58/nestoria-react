import "../ModalWindow/ModalWindow.css"
import React from "react";

class ModalWindow extends React.Component {

    render() {
        console.log(this.props.itemModal)
        const { img_url, title, keywords, summary, price_formatted, lister_url } = this.props.itemModal;
        const { closeModal, addFavourits } = this.props
        return (
            <div className="modal" id={lister_url}>
                <div className="modal-todo__item">
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
                        <button className="hide-modal__button" onClick={closeModal}>Закрыть окно</button>
                        <button className="add-favorit__button" onClick={() => addFavourits(this.props.img_url)}>Добавить в избранное</button>
                    </div>

                </div>
            </div >
        );
    }
}
export default ModalWindow;