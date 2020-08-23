import { GET_KEY_STATS } from '../actions/keyStats'

const initialState ={
    keyStats:{}
}

export default (state = initialState, action) =>{
    switch(action.type)
    {
        case GET_KEY_STATS:
            {
                return {...state.keyStats,[action.symbol]: action.payload }
            } 
        default:
            return state
    }
}
