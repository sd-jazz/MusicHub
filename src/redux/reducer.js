const initialState = {
    listing_id: null 
}

const UPDATE_LISTING_ID = "UPDATE_LISTING_ID"

function reducer(state = initialState, action){

    switch(action.type){

    case UPDATE_LISTING_ID:
    return {...state, listing_id: action.payload}

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

export default reducer; 