import {useDispatch, useSelector} from "react-redux";
import {FILTER_BY_CHECKBOX, initialData} from "../../../store/itemsReducer";

const Filter = ({ filter, title, field }) => {
    const dispatch = useDispatch();
    const categories = useSelector(state => state.categories);
    const brands = useSelector(state => state.brands);

    const getCount = item => {
        return initialData?.filter(i => i[`${field}`] === item.toLowerCase().replace(' ', '_')).length;
    }

    const handleFiltering = (event, item) => {
        console.log('item', item)
        dispatch({
            type: FILTER_BY_CHECKBOX,
            payload: {
                item,
                checked: event.target.checked,
                categories,
                brands
            }
        });
    }
    return (
        <div className="filter__item">
            <h5 className="filter__item-title">{title}</h5>
            {filter.map((item) => (
                <div className="filter__item-group">
                    <input type="checkbox"
                           className="filter__item-checkbox"
                           id={item}
                           onClick={(event) => handleFiltering(event, item)} />
                    <label className="filter__item-label" htmlFor={item}>{item}</label>
                    <span className="filter__item-count">{getCount(item)}</span>
                </div>
            ))}

        </div>
    );
}

export default Filter;