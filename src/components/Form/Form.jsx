import "../Form/Form.css"
import React from "react";
import Input from "../InputSearch/InputSearch";
import ItemsList from "../ItemsList/ItemsList";
import ModalWindow from "../ModalWindow/ModalWindow"
import DisplaySelection from "../DisplaySelection/DisplaySelection"
import { connect } from "react-redux";
import { Route, Redirect, Switch } from 'react-router-dom';
import {
    getDownloadData,
    setFavourits,
    setCyty,
    deleteFavourits
} from "../../redux/actions/catalogActions";
const url =
    "https://cors-anywhere.herokuapp.com/https://api.nestoria.co.uk/api?encoding=json&pretty=1&action=search_listings&country=uk&listing_type=buy&place_name=";

class Form extends React.Component {
    state = {
        page: 1,
        isModalOpen: false,
        itemModal: null,
        displayFavourits: true
    }

    openModalWindow = (key, displaySelectionInt) => {
        switch (displaySelectionInt) {
            case 0: {
                this.setState({
                    isModalOpen: true,
                    itemModal: this.props.posts.catalogList.find(item => item.img_url === key)
                });
                break;
            }
            case 1: {
                this.setState({
                    isModalOpen: true,
                    itemModal: this.props.posts.itemsFavourites.find(item => item.img_url === key)
                });
                break;
            }
            default:
                break;
        }
    }
    deleteItemFavourits = id => {
        this.props.deleteFavourits(id);
    };

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

        return (

            <div>
                <Input searchText={this.searchText} />
                <DisplaySelection displaySelection={this.displaySelection} />
                <Switch>
                    <Route exact path='/search' component={() => <ItemsList data={this.props.posts.catalogList}
                        openModalWindow={this.openModalWindow} />} />
                    <Route exact path='/search/item' component={() => this.state.itemModal ? <ModalWindow
                        displaySelectionInt={0}
                        itemModal={this.state.itemModal}
                        closeModal={this.closeModal}
                        addFavourits={this.addFavourits} /> : <Redirect to='/search' />} />

                    <Route path='/favourites' component={() => <ItemsList
                        displayFavourits={1}
                        deleteItemFavourits={this.deleteItemFavourits}
                        openModalWindow={this.openModalWindow}
                        data={this.props.posts.itemsFavourites} />} />
                    <Route exact path='/favourites/item' component={() => this.state.itemModal ? <ModalWindow
                        displaySelectionInt={1}
                        itemModal={this.state.itemModal}
                        closeModal={this.closeModal}
                        addFavourits={this.addFavourits} /> : <Redirect to='/favourites' />} />
                </Switch>
            </div>
        );


        // return (
        //     <React.Fragment>
        //         {this.state.isModalOpen ?
        //             <ModalWindow
        //                 displaySelectionInt={this.state.displaySelectionInt}
        //                 itemModal={this.state.itemModal}
        //                 closeModal={this.closeModal}
        //                 addFavourits={this.addFavourits} />
        //             : null
        //         }
        //         <Input searchText={this.searchText} />
        //         <DisplaySelection displaySelection={this.displaySelection} />
        //         {this.state.displaySelectionInt ?
        //             <ItemsList
        //                 displayFavourits={this.state.displayFavourits}
        //                 deleteItemFavourits={this.deleteItemFavourits}
        //                 openModalWindow={this.openModalWindow}
        //                 data={this.props.posts.itemsFavourites} />
        //             : <ItemsList
        //                 data={this.props.posts.catalogList}
        //                 openModalWindow={this.openModalWindow} />
        //         }
        //     </React.Fragment>
        // );
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
        setFavourits: data => dispatch(setFavourits(data)),
        deleteFavourits: id => dispatch(deleteFavourits(id))
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Form);