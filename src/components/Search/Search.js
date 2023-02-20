import './Search.css'
import {Button} from "@mui/material";
function Search({value, onChange, filteredProducts}) {

    return (
        <div className="search">
            <div className="search__results">
                <span className="search__results-text">{filteredProducts.length} results found</span>
                <Button variant="contained" sx={{
                    background: '#6F64F8',
                    height: '40px',
                    borderRadius: '8px'
                }}>
                    <img src="images/icons/heart-white.svg" alt="Add favorites"/>
                </Button>
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