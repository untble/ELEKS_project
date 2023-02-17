import {useDispatch, useSelector} from "react-redux";
import {FILTER_BY_CHECKBOX} from "../../../store/itemsReducer";

const Filter = ({ filter, title }) => {
    const dispatch = useDispatch();
    const capitalizedTitle = title.charAt(0).toUpperCase() + title.slice(1);
    const items = useSelector(state => state.items);

    const getCount = item => {
        const field = title === 'brands' ? 'brand' : 'category'
        return items.filter(i => i[`${field}`] === item.toLowerCase().replace(' ', '_')).length;
    }

    const handleFiltering = (event, item) => {
        dispatch({
            type: FILTER_BY_CHECKBOX,
            payload: {
                item,
                checked: event.target.checked,
                byBrand: title === 'brands'
            }
        });
    }
    return (
        <div className="filter__item">
            <h5 className="filter__item-title">{capitalizedTitle}</h5>
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