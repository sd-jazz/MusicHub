const initialState = {
    user: {
            user_id: null,
            auth0_id: '',
            profile_name: '',
            email: '',
            picture: ''
    },
    listing_id: null,
    listing_type: null, 
    searched_listings: [],
    room_name: ''
}
const UPDATE_LISTING_ID = "UPDATE_LISTING_ID"
const GET_LISTING_TYPE = 'GET_LISTING_TYPE'
const GET_USER = 'GET_USER'
const GET_SEARCHED_LISTINGS = 'GET_SEARCHED_LISTINGS'
const GET_ROOM_NAME = 'GET_ROOM_NAME'
function reducer(state = initialState, action){
    switch(action.type){
    case GET_USER:
    return  {...state, user: action.payload}    
    case UPDATE_LISTING_ID:
    return {...state, listing_id: action.payload}
    
    case GET_LISTING_TYPE:
    return {...state, listing_type: action.payload}
    
    case GET_SEARCHED_LISTINGS: 
    return {...state, searched_listings: action.payload}
    
    case GET_ROOM_NAME: 
    return {...state, room_name: action.payload}
    

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
export function get_room_name( room_name ){
    return {
        type: GET_ROOM_NAME,
        payload: room_name
    }
}

export function get_searched_listings( searched_listings ) {
    console.log("searched_listings_reducer", searched_listings)
    return { 
        type: GET_SEARCHED_LISTINGS,
        payload: searched_listings 
    }
}
export default reducer; 
