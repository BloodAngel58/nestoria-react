import * as _str from "../constants/ActionsType";

export const getCatalog = data => {
    return {
        type: _str.GET_CATALOG,
        payload: data
    };
};

export const setFavorits = data => {
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
                const arr = res.response.listings;
                dispatch(getCatalog(arr))
            }
            )
            .catch(error => console.log(error));
    }
};
