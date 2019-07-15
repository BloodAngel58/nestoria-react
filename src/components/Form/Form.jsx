import "../Form/Form.css"
import React from "react";
import Input from "../InputSearch/InputSearch";
import ItemsList from "../ItemsList/ItemsList";
import ModalWindow from "../ModalWindow/ModalWindow"
import DisplaySelection from "../DisplaySelection/DisplaySelection"
import { connect } from "react-redux";
import { Route, Redirect, Switch } from "react-router-dom";
import LoadingPagination from "../LoadingPagination/LoadingPagination"
import PagePagination from "../PagePagination/PagePagination"
import {
    getDownloadData,
    setFavourits,
    setCyty,
    deleteFavourits,
    setModalOpened,
    setModalItem,
    setPages
} from "../../redux/actions/catalogActions";
import { getIdItem } from "../../OtherFunctions/OtherFunctions"
const url =
    "https://cors-anywhere.herokuapp.com/https://api.nestoria.co.uk/api?encoding=json&pretty=1&action=search_listings&country=uk&listing_type=buy&place_name=";
class Form extends React.Component {

    openModalWindow = (key, displaySelectionInt) => {

        this.props.setModalOpened(true);
        switch (displaySelectionInt) {

            case 0: {
                this.props.setModalItem(this.props.posts.catalogList.find(item => getIdItem(item) === key))
                break;
            }

            case 1: {
                this.props.setModalItem(this.props.posts.itemsFavourites.find(item => getIdItem(item) === key))
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
        this.props.setModalOpened(false);
        this.props.setModalItem(null)
    }

    addFavourits = () => {
        this.props.setFavourits(this.props.posts.itemModal)
    }

    searchText = city => {
        const type = 'start';
        const pageNumber = "&page=" + this.props.posts.pages;
        const updateUrl = url + city + pageNumber;
        this.props.setCyty(city);
        this.props.getDownloadData(updateUrl, type)
    };

    uploadingData = () => {
        let numberPage = this.props.posts.pages;
        if (numberPage < this.props.posts.NumberPages) {
            numberPage++;
            this.props.setPages(numberPage);
            const pageNumber = "&page=" + numberPage;
            const type = 'LOADING_PAGINATION'
            const updateUrl = url + this.props.posts.city + pageNumber;
            this.props.getDownloadData(updateUrl, type)
        }
    }

    uploadingPage = (page) => {
        if (page < this.props.posts.NumberPages) {
            this.props.setPages(page);
            const pageNumber = "&page=" + page;
            const type = 'PAGINAL_PAGINATION'
            const updateUrl = url + this.props.posts.city + pageNumber;
            this.props.getDownloadData(updateUrl, type)
        }
    }


    render() {

        return (
            <React.Fragment>
                {this.props.posts.itemModal ? null
                    : <React.Fragment>
                        <Input searchText={this.searchText} />
                        <DisplaySelection displaySelection={this.displaySelection} />
                        {this.props.posts.city ?
                            <PagePagination
                                page={this.props.posts.pages}
                                maxNumberPages={this.props.posts.NumberPages}
                                uploadingPage={this.uploadingPage}
                            />
                            : null}
                    </React.Fragment>
                }
                <Switch>
                    <Route exact path='/search/:number' component={() =>
                        <ItemsList data={this.props.posts.catalogList}
                            openModalWindow={this.openModalWindow} />} />

                    <Route exact path='/search/item/:number' component={() =>
                        this.props.posts.isModalOpen ? <ModalWindow
                            displaySelectionInt={0}
                            itemModal={this.props.posts.itemModal}
                            closeModal={this.closeModal}
                            addFavourits={this.addFavourits} /> : <Redirect to='/search' />} />

                    <Route exact path='/favourites' component={() =>
                        <ItemsList
                            displayFavourits={1}
                            deleteItemFavourits={this.deleteItemFavourits}
                            openModalWindow={this.openModalWindow}
                            data={this.props.posts.itemsFavourites} />} />

                    <Route exact path='/favourites/item/:number' component={() =>
                        this.props.posts.isModalOpen ? <ModalWindow
                            displaySelectionInt={1}
                            itemModal={this.props.posts.itemModal}
                            closeModal={this.closeModal}
                        /> : <Redirect to='/favourites' />} />
                </Switch>
                {this.props.posts.itemModal ? null
                    : <React.Fragment>
                        {this.props.posts.city ? <LoadingPagination
                            uploadingData={this.uploadingData}
                            page={this.props.posts.pages}
                            maxNumberPages={this.props.posts.NumberPages}
                        /> : null}
                    </React.Fragment>
                }
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
        getDownloadData: (url, type) => dispatch(getDownloadData(url, type)),
        setFavourits: data => dispatch(setFavourits(data)),
        deleteFavourits: id => dispatch(deleteFavourits(id)),
        setModalOpened: flag => dispatch(setModalOpened(flag)),
        setModalItem: item => dispatch(setModalItem(item)),
        setPages: page => dispatch(setPages(page))
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Form);