import './Search.css'
function Search({value, onChange, filteredProducts}) {

    return (
        <div className="search">
            <div className="search__results">
                <span className="search__results-text">{filteredProducts.length} results found</span>
                <button className="button button_icon button_primary favorites">
                    <img src="images/icons/heart-white.svg" alt="Add favorites"/>
                </button>
            </div>
            <form className="search__form">
                <input
                    type="text"
                    name="search"
                    placeholder="Search"
                    value={value}
                    onChange={onChange}
                    className="search__form-input"
                />
                <img className="search__form-image" src="images/icons/search.svg" alt="Search"/>
            </form>
        </div>
    );
}

export default Search;