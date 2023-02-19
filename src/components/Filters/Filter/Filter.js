import {Box} from "@mui/material";

const Filter = ({ fields, title, handleFieldChange, selectedFields }) => {
    return (
        <div className="filter__item">
            <h5 className="filter__item-title">{title}</h5>
            {fields.map((field) => (
                <Box className="filter__item-group">
                    <input type="checkbox"
                           className="filter__item-checkbox"
                           value={field}
                           name={field.toLowerCase().replace(' ', '_')}
                           id={field}
                           checked={selectedFields.includes(field.toLowerCase().replace(' ', '_'))}
                           onChange={handleFieldChange}
                    />
                    <label className="filter__item-label" htmlFor={field}>{field}</label>
                </Box>
            ))}
        </div>
    );
}

export default Filter;