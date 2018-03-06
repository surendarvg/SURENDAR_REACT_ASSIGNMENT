import { getproductssuccess, getproductsfailure } from "../actionCreators/product";
import { GET_PRODUCTS, ADD_PRODUCT_SUCCESS, EDIT_PRODUCT_SUCCESS, DELETE_PRODUCT } from "../actionTypes/product";
import { put, takeLatest } from "redux-saga/effects";
function* getProducts() {
    let url = "http://localhost:4000/products";
    try {
        let product = yield fetch(url).then(r => r.json());
        ;
        yield put(getproductssuccess(product));
    }
    catch (error) {
        yield put(getproductssuccess(error));
    }
}
function* addproductsuccess(action) {
    console.log(action.addItem);
    try {
        let product = yield fetch("http://localhost:4000/products", {
            method: 'POST',
            headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
            body: JSON.stringify(action.addItem)
        }).then(r => r.json());
        yield put(getproductssuccess(product));
    }
    catch (error) {
        yield put(getproductsfailure(error));
    }
}
function* editproductsuccess(action) {
    console.log(action.item);
    try {
        let product = yield fetch(`http://localhost:4000/products/${action.item.id}`, {
            method: 'PUT',
            headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
            body: JSON.stringify(action.item)
        }).then(r => r.json());
        yield put(getproductssuccess(product));
    }
    catch (error) {
        yield put(getproductsfailure(error));
    }
}
function* deleteproduct(action) {
    try {
        let product = yield fetch(`http://localhost:4000/products/${action.item}`, {
            method: 'DELETE'
        }).then(r => r.json());
        yield put(getproductssuccess(product));
    }
    catch (error) {
        yield put(getproductsfailure(error));
    }
}
export function* getProductsWatcher() {
    yield [takeLatest(GET_PRODUCTS, getProducts),
    takeLatest(ADD_PRODUCT_SUCCESS, addproductsuccess),
    takeLatest(EDIT_PRODUCT_SUCCESS, editproductsuccess),
    takeLatest(DELETE_PRODUCT, deleteproduct)];
}

