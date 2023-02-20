import React from "react";
import './Search.css'
import {AppBar, Box, Button, Dialog, IconButton, Slide, Toolbar, Typography} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import Card from "../CardList/Card/Card";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});


function Search({value, onChange, filteredProducts, handleWishlist}) {
    const [open, setOpen] = React.useState(false);
    const likedProducts = filteredProducts.filter(p => p.liked);

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className="search">
            <div className="search__results">
                <span className="search__results-text">{filteredProducts.length} results found</span>
                <Button variant="contained" sx={{
                    background: '#6F64F8',
                    height: '40px',
                    borderRadius: '8px'
                }}
                        onClick={() => setOpen(true)}>
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
            <Dialog
                fullScreen
                open={open}
                onClose={handleClose}
                TransitionComponent={Transition}
            >
                <AppBar sx={{position: 'relative', background: '#6F64F8'}}>
                    <Toolbar>
                        <IconButton
                            edge="start"
                            color="inherit"
                            onClick={handleClose}
                            aria-label="close"
                        >
                            <CloseIcon/>
                        </IconButton>
                        <Typography sx={{ml: 2, flex: 1}} variant="h6" component="div">
                            Your wishlist
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Box>
                    {likedProducts.map((product) => (
                        <Card
                            key={product.id}
                            handleWishlist={() => handleWishlist(product)}
                            {...product}
                        />
                    ))}
                </Box>
            </Dialog>
        </div>
    );
}

export default Search;