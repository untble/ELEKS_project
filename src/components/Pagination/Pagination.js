import styles from './Pagination.css'
function Pagination() {
    return (
        <div className="pagination">
            <div className="pagination__previous">
                <a className="pagination__item-link" href="/previous">
                    <img src="images/icons/chevron-left.svg" alt="Previous"/>
                </a>
            </div>
            <div className="pagination__items">
                <a className="pagination__item-link" href="/page/1">1</a>
                <a className="pagination__item-link" href="/page/2">2</a>
                <a className="pagination__item-link" href="/page/3">3</a>
                <a className="pagination__item-link" href="/page/4">4</a>
                <a className="pagination__item-link" href="/page/5">5</a>
                <span className="pagination__item-current">6</span>
                <a className="pagination__item-link" href="/page/7">7</a>
                <a className="pagination__item-link" href="/page/8">8</a>
                <a className="pagination__item-link" href="/page/9">9</a>
                <a className="pagination__item-link" href="/page/10">10</a>
            </div>
            <div className="pagination__next">
                <a className="pagination__item-link" href="/next">
                    <img src="images/icons/chevron-right.svg" alt="Next"/>
                </a>
            </div>
        </div>
    );
}

export default Pagination;