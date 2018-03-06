import {
    GET_PRODUCTS,
    GET_PRODUCTS_SUCCESS,
    ADD_PRODUCT,
    EDIT_PRODUCT,
    NEW_PROD,
    PAGINATION
} from "../actionTypes/product";
export default (prevstate = {
    product: [],
    pageOfItems: [],
    addItem: {},
    editItem: {},
    curpage: 1,
    prodPerPage: 10
}, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return {
                ...prevstate
            }
        case GET_PRODUCTS_SUCCESS:
            return {
                ...prevstate,
                product: action.product
            }
        case ADD_PRODUCT:
            return {
                addItem: { ...prevstate.addItem, ...action.item }
            }
        case EDIT_PRODUCT:
            return {
                editItem: action.item
            }
        case NEW_PROD:
            return {
                editItem: { ...prevstate.editItem, ...action.editItem }
            }
        case PAGINATION:
            return {
                ...prevstate,
                curpage: action.curpage
            }
        default:
            return prevstate
    }
}