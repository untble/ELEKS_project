import Card from './Card/Card';
import './CardList.css'
import {useSelector} from "react-redux";

const CardList = () => {
    const items = useSelector(state => state.items);
    console.log(items);
    return (
        <div className="product-list">
            {items?.map((item) => (
                <Card
                    key={item.id}
                    {...item}
                />))}
        </div>
    )
}

export default CardList;