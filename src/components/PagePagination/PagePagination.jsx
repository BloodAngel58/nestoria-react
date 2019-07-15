import React from "react";
import ".././PagePagination/PagePagination.css"
import { NavLink } from 'react-router-dom'
class PagePagination extends React.Component {
    renderNumberPage = () => {
        const {
            page,
            maxNumberPages,
            uploadingPage
        } = this.props;

        let arrNumberPage = []

        if (maxNumberPages <= 5) {
            for (let i = 1; i <= maxNumberPages; i++) {
                arrNumberPage.push(i)
            }
        } else
            if (maxNumberPages > 5) {
                if (page === 1 || page < 3) {
                    for (let i = 1; i <= 5; i++) {
                        arrNumberPage.push(i)
                    }
                }
                if (page >= 3 && page <= maxNumberPages - 2) {
                    for (let i = page - 2; i <= page + 2; i++) {
                        arrNumberPage.push(i)
                    }
                }
                if (page === maxNumberPages || page === (maxNumberPages - 1)) {
                    for (let i = maxNumberPages - 4; i <= maxNumberPages; i++) {
                        arrNumberPage.push(i)
                    }
                }
            }

        return arrNumberPage.map(n => {
            return <NavLink key={n}
                className="pagination-number-page"
                activeClassName="pagination-number-page__active"
                onClick={() => uploadingPage(n)}
                to={`/search/${n}`}
            >
                {n}
            </NavLink>
        });

    };

    render() {
        return (
            <div className="container-pagination">
                <NavLink className="pagination-front-page__button"
                    onClick={() => this.props.uploadingPage(1)}
                    to="/search/1"

                >
                    Первая
                </NavLink>
                {
                    this.renderNumberPage()
                }
                <NavLink className="pagination-last-page__button"
                    onClick={() => this.props.uploadingPage(this.props.maxNumberPages)}
                    to={`/search/${this.props.maxNumberPages}`}
                >
                    Последняя
                 </NavLink>
            </div >
        );
    }
}
export default PagePagination;
