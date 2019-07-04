import "../Form/Form"
import React from "react";
import Input from "../InputSearch/InputSearch";
import ItemsList from "../ItemsList/ItemsList";
import ModalWindow from "../ModalWindow/ModalWindow"
import { connect } from "react-redux";
import {
    getDownloadData,
    setFavorits,
    setCyty
} from "../../redux/actions/catalogActions";
const url =
    "https://cors-anywhere.herokuapp.com/https://api.nestoria.co.uk/api?encoding=json&pretty=1&action=search_listings&country=uk&listing_type=buy&place_name=";

class Form extends React.Component {
    state = {
        page: 1,
        isModalOpen: false,
        objInformation: null
    }
    moreInformation = key => {
        console.log(key)
    }
    openModalWindow = (obj) => {
        this.setState({ isModalOpen: true });
        this.setState({ objInformation: obj })
    }

    closeModal = () => {
        this.setState({ isModalOpen: false });
        this.setState({ objInformation: null })
    }
    addFavorits = () => {
        console.log("addFavorits")
        this.props.setFavorits(this.state.objInformation)
        console.log(this.state.objInformation)
    }
    searchText = city => {
        const udateUrl = url + city;
        this.props.setCyty(city);
        this.props.getDownloadData(udateUrl)
    };
    render() {
        const arrCatalog = this.props.posts.catalogList
        const modal = this.state.isModalOpen ? (
            <ModalWindow obj={this.state.objInformation} closeModal={this.closeModal} addFavorits={this.addFavorits} />
        ) : null;
        return (
            <React.Fragment>
                {modal}
                <Input searchText={this.searchText} />
                <ItemsList data={arrCatalog} moreInformation={this.moreInformation} openModalWindow={this.openModalWindow} />
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
        setFavorits: data => dispatch(setFavorits(data))
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Form);