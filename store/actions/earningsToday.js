

import axios from 'axios'
import { iexCloudUrl,apiKey } from '../../config'

export const GET_EARNINGSTODAY = 'GET_EARNINGSTODAY'


// a function is to be returned that makes a  call to the api and dispatches an action into redux store
export const getEarningsToday = (symbol) => { 
    return async dispatch => {
        try{
           //let response = await axios.get(`${iexCloudUrl}/stock/market/collection/list?collectionName=mostactive&token=${apiKey}`)
           //let response = await getMostActiveAsync()
           console.log(symbol)
           let response = await axios.get('https://sandbox.iexapis.com/stable/stock/market/today-earnings?token=Tsk_756f25f00c264637bcbc747049821db1')
           if(!response.status ==='OK')
            {

            }
            dispatch({type: GET_EARNINGSTODAY, symbol: symbol, payload:response.data})
        }
        catch(err)
        {
            console.log(err)
        }
    }
}
