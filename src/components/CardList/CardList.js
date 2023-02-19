import Card from './Card/Card';
import './CardList.css'

const CardList = ({filteredProducts}) => {
    return (
        <div className="product-list">
            {filteredProducts?.map((product) => (
                <Card
                    key={product.id}
                    {...product}
                />))}
        </div>
    )
}

export default CardList;