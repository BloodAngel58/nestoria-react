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

        for (let i = 1; i <= 5; i++) {
            arrNumberPage.push(i)
        }
        console.log(arrNumberPage)
        return arrNumberPage.map(n => {
            return <NavLink key={n}
                className="pagination-number-page"
                activeClassName="pagination-number-page__active"
                to={`/search/${n}`}
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
