import styles from './Search.css'
function Search() {
    return (
        <div className="search">
            <div className="search__results">
                <span className="search__results-text">7,618 results found</span>
                <button className="button button_icon button_primary favorites">
                    <img src="images/icons/heart-white.svg" alt="Add favorites"/>
                </button>
            </div>
            <form className="search__form">
                <input type="text" name="search" placeholder="Search" class="search__form-input"/>
                    <button type="submit" className="search__form-button"><img src="images/icons/search.svg" alt="Search"/></button>
            </form>
        </div>
    );
}

export default Search;