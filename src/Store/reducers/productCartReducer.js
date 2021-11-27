// import { useReducer } from "react";
import { UPDATE_PRODUCT_CART } from "../constants";

const initState = []

const productCartReducer = (state = initState, action) => {
    switch(action.type) {
        case UPDATE_PRODUCT_CART:
            return [
                ...state,
                action.productInfo
            ]
        default:
            return state;
    }
}

export default productCartReducer;