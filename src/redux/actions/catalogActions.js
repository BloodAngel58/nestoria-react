import * as _str from "../constants/ActionsType";

export const setModalOpened = flag => {
    return {
        type: _str.SET_MODAL_OPENED,
        payload: flag
    };
};
export const setModalItem = item => {
    return {
        type: _str.SET_ITEM_MODAL,
        payload: item
    };
};

export const getCatalog = data => {
    return {
        type: _str.GET_CATALOG,
        payload: data
    };
};

export const setNumberPages = number => {
    return {
        type: _str.SET_NUMBER__PAGES,
        payload: number
    };
};

export const setFavourits = data => {
    return {
        type: _str.SET_CATALOG_FAVOURITES,
        payload: data
    };
};
export const setCyty = text => {
    return {
        type: _str.SET_CITY,
        payload: text
    };
};

export const deleteFavourits = id => {
    return {
        type: _str.DELL_FAVOURITES,
        payload: id
    };
}
export const getDownloadData = (url) => {
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
                dispatch(setNumberPages(res.response.total_pages > 100 ? 100 : res.response.total_pages))
                dispatch(getCatalog(res.response.listings))
            }
            )
            .catch(error => console.log(error));
    }
};
