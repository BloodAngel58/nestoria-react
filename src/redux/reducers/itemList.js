export const initialState = {
    catalogList: [],
    itemsFavourites: [],
    city: null,
    NumberPages: null,
    isModalOpen: false,
    itemModal: null
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
            } else return { state }
        }

        case 'SET_MODAL_OPENED': {
            return {
                ...state, isModalOpen: action.payload
            };
        }
        case 'SET_ITEM_MODAL': {
            return {
                ...state, itemModal: action.payload
            };
        }
        case 'SET_NUMBER__PAGES': {
            return {
                ...state, NumberPages: action.payload
            };
        }

        case 'SET_CITY': {
            return {
                ...state, city: action.payload
            };
        }

        case 'DELL_FAVOURITES': {
            return {
                ...state, itemsFavourites: state.itemsFavourites.filter(item => item.lister_url !== action.payload)
            };
        }
        default:
            return state;
    }
}
