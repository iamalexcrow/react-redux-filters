import data from '../data/data.json'
import { paginate } from '../utils/helpers';

const GET_INITIAL_DATA = "GET_INITIAL_DATA";
const UPDATE_FILTERS = "UPDATE_FILTERS";
const CLEAR_FILTERS = "CLEAR_FILTERS";
const FILTER_PRODUCTS = "FILTER_PRODUCTS";
const SHOW_MORE = "SHOW_MORE";
const SHOW_MODAL = "SHOW_MODAL";
const HIDE_MODAL = "HIDE_MODAL";

const SHOW_INFO_MODAL = "SHOW_INFO_MODAL";
const HIDE_INFO_MODAL = "HIDE_INFO_MODAL";


let initialState = {
    all_products: data.hairstyles,
    filtered_products: paginate(data.hairstyles),
    page: 1,
    isModalOpen: false,

    isInfoModalOpen: false,
    item: '',

    filters: {
        text: '',
        gender: 'Показать все',
        type: 'Показать все',
        price: 0,
        min_price: 0,
        max_price: 0
    }
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_INITIAL_DATA: {
            // let prices = action.payload.map((p) => p.price)
            let prices = state.all_products.map((p) => p.price)
            let maxPrice = Math.max(...prices);
            let minPrice = Math.min(...prices);
            return {
                ...state,
                filters: {
                    ...state.filters,
                    max_price: maxPrice,
                    minPrice: minPrice,
                    price: maxPrice
                }
            }
        }
        case UPDATE_FILTERS: {
            const { name, value } = action.payload;
            return { ...state, filters: { ...state.filters, [name]: value } }
        }
        case CLEAR_FILTERS: {
            console.log('hey');
            return {
                ...state,
                filters: {
                    ...state.filters,
                    text: '',
                    gender: 'Показать все',
                    type: 'Показать все',
                    price: state.filters.max_price,
                }
            }
        }

        case FILTER_PRODUCTS: {
            const text = state.filters.text;
            const gender = state.filters.gender;
            const type = state.filters.type;
            const price = state.filters.price

            let tempProducts = [...state.all_products];
            console.log(tempProducts);
            //filtering
            //text
            if (text) {
                tempProducts = tempProducts.filter((product) => {
                    return product.name.toLowerCase().startsWith(text)
                })
            }
            //gender
            if (gender !== "Показать все") {
                tempProducts = tempProducts.filter(product => product.gender === gender)
            }
            //type
            if (type !== "Показать все") {
                tempProducts = tempProducts.filter(product => product.type === type)
            }

            //price
            tempProducts = tempProducts.filter((product) => product.price <= price)

            return { ...state, filtered_products: paginate(tempProducts) }
        }
        case SHOW_MORE: {
            return {
                ...state,
                page: state.page + 1
            }
        }
        case SHOW_MODAL: {
            return {
                ...state, isModalOpen: true
            }
        }
        case HIDE_MODAL: {
            return {
                ...state, isModalOpen: false
            }
        }
        case SHOW_INFO_MODAL: {
            console.log(action.payload);
            return {
                ...state, isInfoModalOpen: true, item: action.payload
            }
        }
        case HIDE_INFO_MODAL: {
            console.log(action.payload);
            return {
                ...state, isInfoModalOpen: false
            }
        }
        default: return state;
    }
}

export const initApp = (payload) => ({ type: GET_INITIAL_DATA, payload });

export const updateFilters = (e) => {
    let name = e.target.name
    let value = e.target.value
    console.log(name, value);
    if (name === 'price') {
        value = Number(value);
    }
    return (dispatch) => {
        dispatch({ type: UPDATE_FILTERS, payload: { name, value } });
        dispatch({ type: FILTER_PRODUCTS })
    }
}

export const clearFilters = () => {
    return (dispatch) => {
        dispatch({ type: CLEAR_FILTERS })
        dispatch({ type: FILTER_PRODUCTS })
    }
}
export const filterProducts = () => ({ type: FILTER_PRODUCTS })
export const showMore = () => ({ type: SHOW_MORE })
export const showModal = () => ({ type: SHOW_MODAL });
export const hideModal = () => ({ type: HIDE_MODAL });
export const showInfoModal = (payload) => ({ type: SHOW_INFO_MODAL, payload })
export const hideInfoModal = () => ({ type: HIDE_INFO_MODAL });

export default reducer;