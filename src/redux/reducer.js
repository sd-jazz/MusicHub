const initialState = {
    listing_id: null,
    listing_type: null, 
    searched_listing: null
}

const UPDATE_LISTING_ID = "UPDATE_LISTING_ID"
const GET_LISTING_TYPE = 'GET_LISTING_TYPE'
const GET_SEARCHED_LISTING = "GET_SEARCHED_LISTING"

function reducer(state = initialState, action){

    switch(action.type){

    case UPDATE_LISTING_ID:
    return {...state, listing_id: action.payload}
    
    case GET_LISTING_TYPE:
    return {...state, listing_type: action.payload}

    case GET_SEARCHED_LISTING:
    return {...state, searched_listing: action.payload}

    default:
    return state; 

    }

}

export function update_listing_id( listing_id ){
    
    return {
        type: UPDATE_LISTING_ID,
        payload: listing_id 
    }
}
export function get_listing_type( listing_type ){
    
    return {
        type: GET_LISTING_TYPE,
        payload: listing_type 
    }
}

export function get_searched_listing (searched_listing){

    return {
        type: GET_SEARCHED_LISTING,
        payload: searched_listing
    }
}

export default reducer; 