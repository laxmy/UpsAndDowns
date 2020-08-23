
import { GET_MOSTACTIVE } from '../actions/active'

const initialState ={
    mostActive:[]
}

export default (state = initialState, action) =>{
    switch(action.type)
    {
        case GET_MOSTACTIVE:
            return{...state, mostActive: action.payload}
        default:
            return state
    }
}

