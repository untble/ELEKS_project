export const ITEMS = 'ITEMS';
export const FILTER_BY_CHECKBOX = 'FILTER_BY_CHECKBOX';

let categories = [];
let initialData;

export const itemsReducer = (state = [], action) => {
    switch (action.type) {
        case ITEMS: {
            initialData = action.payload;
            return action.payload
        }
        case FILTER_BY_CHECKBOX: {
            const item = action.payload.item.toLowerCase().replace(' ', '_')
            if (action.payload.checked) {
                categories = [...categories, item];
            } else {
                categories = categories.filter(category => category !== item);
            }

            if (!categories.length) {
                return initialData;
            }

            return initialData.filter(item => {
                const tItem = action.payload.byBrand ? item.brand : item.category;
                if (categories.includes(item.category) && categories.includes(item.brand)) {
                    console.log('is called');
                    return true;
                } else if (categories.includes(tItem)) {
                    return true;
                }
                return false;
            });
            // return initialData.filter(item => categories.includes(item.category))
        }
        default:
            return state;
    }
}