export const ITEMS = 'ITEMS';
export const FILTER_BY_CHECKBOX = 'FILTER_BY_CHECKBOX';

let fields = [];
export let initialData;

export const itemsReducer = (state = [], action) => {
    switch (action.type) {
        case ITEMS: {
            initialData = action.payload;
            return action.payload
        }
        case FILTER_BY_CHECKBOX: {
            const item = action.payload.item.toLowerCase().replace(' ', '_')
            if (action.payload.checked) {
                fields = [...fields, item];
            } else {
                fields = fields.filter(field => field !== item);
            }

            if (!fields.length) {
                return initialData;
            }

            const hasCategory = action.payload.categories.filter(c => fields.includes(c.toLowerCase().replace(' ', '_')));
            const hasBrand = action.payload.brands.filter(b => fields.includes(b.toLowerCase()));

            return initialData.filter(item => {
                if (fields.includes(item.category) && fields.includes(item.brand)) {
                    return true;
                } else if (fields.includes(item.brand) && !hasCategory.length) {
                    return true
                } else if (fields.includes(item.category) && !hasBrand.length) {
                    return true
                }
                return false;
            })

        }
        default:
            return state;
    }
}