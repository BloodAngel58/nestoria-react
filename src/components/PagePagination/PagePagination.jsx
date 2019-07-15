import React from "react";
import ".././PagePagination/PagePagination.css"
import { NavLink } from 'react-router-dom'
class PagePagination extends React.Component {
    renderNumberPage = () => {
        const {
            page,
            maxNumberPages
        } = this.props;

        let arrNumberPage = []

        for (let i = 1; i <= page + 2; i++) {
            arrNumberPage.push(i)
        }
        arrNumberPage.map(n => {
            return <NavLink
                className="pagination-number-page"
                activeClassName="pagination-number-page__active"
            >
                {n}
            </NavLink>
        });

    };

    render() {

        return (
            <div className="container-pagination">
                <button className="pagination-front-page__button"> Первая</button>
                {this.renderNumberPage()}
                <button className="pagination-last-page__button" > Последняя </button>
            </div >
        );
    }
}
export default PagePagination;
