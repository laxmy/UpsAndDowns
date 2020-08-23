
import { GET_EARNINGSTODAY } from '../actions/earningsToday'

const initialState ={
    earningsToday:{}
}

export default (state = initialState, action) =>{
    switch(action.type)
    {
        case GET_EARNINGSTODAY:
            {
                return{...state, earningsToday: {...state.earningsToday,[action.symbol]: action.payload }}
            } 
        default:
            return state
    }
}

