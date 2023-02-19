import './Card.css';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import {makeStyles} from "@mui/styles";
import {Button} from "@mui/material";

const useStyles = makeStyles({
    starIcon: {
        fontSize: '1.2rem',
        marginLeft: '3px'
    },
    button: {
        width: '100%',
        display: 'flex',
        alignItems: 'center'
    },
    wishlistBtn: {
        background: '#EDEDED',
        color: 'black',
        fontWeight: 'bold',
    },
    addToCartBtn: {
        background: '#6F64F8',
        color: '#FFFFFF',
        '&:hover': {
            background: "#624DC2",
        }
    },
    icon: {
        marginRight: '5px'
    },
    addToCardIcon: {
        opacity: '75%'
    }
});

function Card({title, price, images, rating, brand, category}) {
    const styles = useStyles();
    return (
        <div className="product-wrapper">
            <div className="product">
                <div className="product__image">
                    <img
                        src={images[0]}
                        alt={title}
                    />
                </div>
                <div className="product__rating-price">
                    <div className="product__rating">
                        <span>{rating}</span>
                        <StarOutlineIcon className={styles.starIcon} />
                    </div>
                    <span className="product__price">{`$${price}`}</span>
                </div>
                <div className="product__info">
                    <h3 className="product__name">{title}</h3>
                    <span className="product__description">
                    {category} | {brand}
                </span>
                </div>
                <div className="product__buttons">
                    <Button className={`${styles.wishlistBtn} ${styles.button}`}>
                        <FavoriteBorderIcon className={styles.icon} />
                        <span className="wishlist">Wishlist</span>
                    </Button>
                    <Button className={`${styles.addToCartBtn} ${styles.button}`}>
                        <ShoppingBagIcon className={`${styles.icon} ${styles.addToCardIcon}`} />
                        <span className="addToCart">Add to cart</span>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Card;