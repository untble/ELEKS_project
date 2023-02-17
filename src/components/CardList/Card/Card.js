import styles from './Card.css'

function Card ({title, price, images, rating, brand, category}) {
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
                <div className="product__rating"><span>{rating}</span></div>
                <span className="product__price">{`$${price}`}</span>
            </div>
            <div className="product__info">
                <h3 className="product__name">{title}</h3>
                <span className="product__description">
                    {category} | {brand}
                </span>
            </div>
            <div className="product__buttons">
                <button className="button button_secondary button_medium">
                    <span className="wishlist">Wishlist</span>
                </button>
                <button className="button button_primary button_medium">
                    <span className="addToCart">Add to cart</span>
                </button>
            </div>
        </div>
    </div>
    )
}

export default Card;