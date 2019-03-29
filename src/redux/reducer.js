const initialState = {
    user: null,
    listing_id: null,
    listing_type: null 
}

const UPDATE_LISTING_ID = "UPDATE_LISTING_ID"
const GET_LISTING_TYPE = 'GET_LISTING_TYPE'
const GET_USER = 'GET_USER'

function reducer(state = initialState, action){

    switch(action.type){

    case GET_USER:
    return  {...state, user: action.payload}    

    case UPDATE_LISTING_ID:
    return {...state, listing_id: action.payload}
    
    case GET_LISTING_TYPE:
    return {...state, listing_type: action.payload}

    default:
    return state; 

    }

}

export function getUser(user){
    return {
        type: GET_USER,
        payload: user
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

export default reducer; 