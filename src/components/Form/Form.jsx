import "../Form/Form"
import React from "react";
import Input from "../InputSearch/InputSearch";
import ItemsList from "../ItemsList/ItemsList";
import ModalWindow from "../ModalWindow/ModalWindow"
import DisplaySelection from "../DisplaySelection/DisplaySelection"
import { connect } from "react-redux";
import {
    getDownloadData,
    setFavourits,
    setCyty
} from "../../redux/actions/catalogActions";
const url =
    "https://cors-anywhere.herokuapp.com/https://api.nestoria.co.uk/api?encoding=json&pretty=1&action=search_listings&country=uk&listing_type=buy&place_name=";

class Form extends React.Component {
    state = {
        page: 1,
        isModalOpen: false,
        itemModal: null,
        displaySelectionInt: 0
    }

    openModalWindow = (key) => {
        this.setState({
            isModalOpen: true,
            itemModal: this.props.posts.catalogList.find(item => item.img_url === key)
        });
    }
    displaySelection = (number) => {
        console.log(number)
        this.setState({ displaySelectionInt: number })
    }

    closeModal = () => {
        this.setState({ isModalOpen: false, itemModal: null });
    }
    addFavourits = () => {
        this.props.setFavourits(this.state.itemModal)
    }
    searchText = city => {
        const updateUrl = url + city;
        this.props.setCyty(city);
        this.props.getDownloadData(updateUrl)
    };
    render() {
        const modal = this.state.isModalOpen ? (
            <ModalWindow itemModal={this.state.itemModal} closeModal={this.closeModal} addFavourits={this.addFavourits} />
        ) : null;
        const favourites = this.props.posts.itemsFavourites.length ? (
            <ItemsList className={this.state.displaySelectionInt ? "" : "video-display"} data={this.props.posts.itemsFavourites} > <h1>Избранное</h1></ItemsList>
        ) : null;
        return (
            <React.Fragment>
                {modal}
                <Input searchText={this.searchText} />
                <DisplaySelection displaySelection={this.displaySelection} />
                {favourites}
                <ItemsList className={this.state.displaySelectionInt ? "video-display" : ""} data={this.props.posts.catalogList} openModalWindow={this.openModalWindow} />
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        posts: state.data
    };
};

const mapDispatchToProps = dispatch => {
    return {
        setCyty: text => dispatch(setCyty(text)),
        getDownloadData: url => dispatch(getDownloadData(url)),
        setFavourits: data => dispatch(setFavourits(data))
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Form);