import * as types from '../constants';
export const addProductToCart = (data) => {
    return {
        type : types.UPDATE_PRODUCT_CART,
        productInfo: data
    }
}
