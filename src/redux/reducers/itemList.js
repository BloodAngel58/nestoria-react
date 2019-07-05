export const initialState = {
    catalogList: [],
    itemsFavourites: [],
    city: null
}

export const formReducer = (state = initialState, action) => {
    switch (action.type) {

        case 'GET_CATALOG': {
            return {
                ...state, catalogList: action.payload
            };
        }

        case 'SET_CATALOG_FAVOURITES': {
            if (!state.itemsFavourites.includes(action.payload)) {
                return {
                    ...state, itemsFavourites: [...state.itemsFavourites, action.payload]
                };
            } else return { ...state }
        }

        case 'SET_CITY':
            return {
                ...state, city: action.payload
            };

        default:
            return state;
    }
}
