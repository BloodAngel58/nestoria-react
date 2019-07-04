export const initialState = {
    catalogList: [],
    itemsFavourites: [],
    city: null

}
export const formReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_CATALOG': {
            return {
                // catalogList: [...state.catalogList, action.payload]
                ...state,
                catalogList: action.payload
            };
        }
        case 'SET_CATALOG_FAVOURITES': {
            return {
                ...state,
                itemsFavourites: action.payload
            };
        }
        case 'SET_CITY':
            return {
                ...state, city: action.payload
            };

        default:
            return state;
    }
}
