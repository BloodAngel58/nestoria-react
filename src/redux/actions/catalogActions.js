import { ReduxActionsType } from "../constants/ActionsType";

export const paginationType = (page, type) => {
    return {
        type: ReduxActionsType[type],
        payload: page
    };
};

export const setPages = pages => {
    return {
        type: ReduxActionsType.SET_PAGES,
        payload: pages
    };
};
export const setModalOpened = flag => {
    return {
        type: ReduxActionsType.SET_MODAL_OPENED,
        payload: flag
    };
};
export const setModalItem = item => {
    return {
        type: ReduxActionsType.SET_ITEM_MODAL,
        payload: item
    };
};

export const getCatalog = data => {
    return {
        type: ReduxActionsType.GET_CATALOG,
        payload: data
    };
};

export const setNumberPages = number => {
    return {
        type: ReduxActionsType.SET_NUMBER__PAGES,
        payload: number
    };
};

export const setFavourits = data => (dispatch, getState) => {
    const state = getState()
    if (!state.data.itemsFavourites.includes(data)) {
        return dispatch({
            type: ReduxActionsType.SET_CATALOG_FAVOURITES,
            payload: data
        })

    };
}
export const setCyty = text => {
    return {
        type: ReduxActionsType.SET_CITY,
        payload: text
    };
};

export const deleteFavourits = id => {
    return {
        type: ReduxActionsType.DELL_FAVOURITES,
        payload: id
    };
}
export const getDownloadData = (url, type) => {
    return (dispatch) => {
        return fetch(url, {
            method: "GET",
            headers: "Access-Control-Allow-Origin",
            headers: {
                "content-type": "application/json"
            },
            mode: "cors"
        })
            .then(res => res.json())
            .then(res => {
                if (type === "start") {
                    dispatch(getCatalog(res.response.listings, type));
                }
                if (type === "LOADING_PAGINATION" || type === "PAGINAL_PAGINATION") {
                    dispatch(paginationType(res.response.listings, type));
                }
                dispatch(setNumberPages(res.response.total_pages > 100 ? 100 : res.response.total_pages))

            }
            )
            .catch(error => console.log(error));
    }
};
