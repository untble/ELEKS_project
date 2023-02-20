import {Box} from "@mui/material";

const Filter = ({
   fields,
   title,
   handleFieldChange,
   selectedFields,
   filteredProducts,
   isAllowedToShowCount,
    products
}) => {
    console.log('isAllowedToShowCount', isAllowedToShowCount);
    const refactoredField = (field) => field.toLowerCase().replace(' ', '_');
    const numberOfFoundMatches = (items, field) =>
        items.filter(i => i[title.toLowerCase()] === refactoredField(field)).length;

    return (
        <div className="filter__item">
            <h5 className="filter__item-title">{title}</h5>
            {fields.map((field) => (
                <Box className="filter__item-group">
                    <input type="checkbox"
                           className="filter__item-checkbox"
                           value={field}
                           name={refactoredField(field)}
                           id={field}
                           checked={selectedFields.includes(refactoredField(field))}
                           onChange={handleFieldChange}
                    />
                    <label className="filter__item-label" htmlFor={field}>{field}</label>
                    <span>
                        {isAllowedToShowCount ? numberOfFoundMatches(filteredProducts, field) : numberOfFoundMatches(products, field)}
                    </span>
                </Box>
            ))}
        </div>
    );
}

export default Filter;