import { getIdItem } from "../../OtherFunctions/OtherFunctions"
export const initialState = {
    catalogList: [],
    itemsFavourites: [],
    city: null,
    NumberPages: null,
    pages: 1,
    isModalOpen: false,
    itemModal: null
}

export const formReducer = (state = initialState, action) => {
    switch (action.type) {

        case 'LOADING_PAGINATION': {
            return {
                ...state, catalogList: [...state.catalogList, ...action.payload]
            };
        }

        case 'GET_PAGES': {
            return {
                ...state, pages: action.payload
            };
        }
        case 'GET_CATALOG': {
            return {
                ...state, catalogList: action.payload
            };
        }

        case 'SET_CATALOG_FAVOURITES': {
            return {
                ...state, itemsFavourites: [...state.itemsFavourites, action.payload]
            };
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
        case 'SET_PAGES': {
            return {
                ...state, pages: action.payload
            };
        }

        case 'DELL_FAVOURITES': {
            return {
                ...state,
                itemsFavourites: state.itemsFavourites.filter(item => getIdItem(item) !== action.payload)
            };
        }
        default:
            return state;
    }
}
