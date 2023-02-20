import Card from './Card/Card';
import './CardList.css'

const CardList = ({filteredProducts, handleWishlist}) => {
    return (
        <div className="product-list">
            {filteredProducts?.map((product) => (
                <Card
                    key={product.id}
                    handleWishlist={handleWishlist}
                    {...product}
                />))}
        </div>
    )
}

export default CardList;