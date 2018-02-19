import * as Constants from '../constants'
import Data from '../products.json'

export const getProducts = () => {
    return {
        type: Constants.GET_PRODUCTS_SUCCESS,
        payload: Data
    }
}

export const setProductFilter = (filter) => {
    return {
        type: Constants.SET_PRODUCT_FILTER,
        filter
    }
}