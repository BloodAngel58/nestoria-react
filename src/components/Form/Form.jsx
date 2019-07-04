import "../Form/Form"
import React from "react";
import Input from "../InputSearch/InputSearch";
import ItemsList from "../ItemsList/ItemsList";
import { connect } from "react-redux";
import {
    getCatalog,
    getDownloadData,
    //  setFavorits,
    setCyty
} from "../../redux/actions/catalogActions";
const url =
    "https://cors-anywhere.herokuapp.com/https://api.nestoria.co.uk/api?encoding=json&pretty=1&action=search_listings&country=uk&listing_type=buy&place_name=";

class Form extends React.Component {
    state = {
        page: 1
    }
    moreInformation = key => {
        console.log(key)
    }

    searchText = city => {
        const udateUrl = url + city;
        this.props.setCyty(city);
        this.props.getDownloadData(udateUrl)
    };
    render() {
        const arrCatalog = this.props.posts.catalogList
        return (
            <React.Fragment>
                <Input searchText={this.searchText} />
                <ItemsList data={arrCatalog} moreInformation={this.moreInformation} />
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
        // setFavorits: data => dispatch(setFavorits(data))
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Form);