import {
    GET_PRODUCTS,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_FAILURE,
    ADD_PRODUCT,
    EDIT_PRODUCT,
    DELETE_PRODUCT,
    ADD_PRODUCT_SUCCESS,
    EDIT_PRODUCT_SUCCESS,
    NEW_PROD,
    PAGINATION
} from "../actionTypes/product"
export function getproducts() {
    return {
        type: GET_PRODUCTS
    }
}
export function getproductssuccess(product) {
    return {
        type: GET_PRODUCTS_SUCCESS,
        product
    }
}
export function getproductsfailure(error) {
    return {
        type: GET_PRODUCTS_FAILURE,
        error
    }
}
export function addproduct(item) {
    console.log(item)
    return {
        type: ADD_PRODUCT,
        item
    }
}
export function addproductsuccess(addItem) {
    return {
        type: ADD_PRODUCT_SUCCESS,
        addItem
    }
}
export function editproduct(item) {
    return {
        type: EDIT_PRODUCT,
        item
    }
}
export function editproductsuccess(item) {
    return {
        type: EDIT_PRODUCT_SUCCESS,
        item
    }
}
export function newprod(editItem) {
    return {
        type: NEW_PROD,
        editItem
    }
}
export function deleteproduct(item) {
    console.log(item)
    return {
        type: DELETE_PRODUCT,
        item
    }
}
export function pagination(curpage) {
    return {
        type: PAGINATION,
        curpage
    }
}