import './Search.css'
import {Button, Stack} from "@mui/material";
import Pagination from '@mui/material/Pagination';
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
            <Stack spacing={2}>
                <Pagination count={10} />
                <Pagination count={10} color="primary" />
                <Pagination count={10} color="secondary" />
                <Pagination count={10} disabled />
            </Stack>
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