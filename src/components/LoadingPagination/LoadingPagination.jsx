import React from "react";
import ".././LoadingPagination/LoadingPagination.css"
class LoadingPagination extends React.Component {

    render() {

        return (
            <div className="container-more__data">
                <button className="more-data__button" onClick={this.props.uploadingData}>Загрузить еще</button>
            </div >
        );
    }
}
export default LoadingPagination;
