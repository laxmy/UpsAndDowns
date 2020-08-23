
import axios from 'axios'
import { iexCloudUrl,apiKey } from '../../config'

export const GET_KEY_STATS = 'GET_KEY_STATS'

export const getKeyStats = (symbol) => { 
    return async dispatch => {
        try{
           //let response = await axios.get(`${iexCloudUrl}/stock/market/collection/list?collectionName=mostactive&token=${apiKey}`)
           //let response = await getMostActiveAsync()
           console.log(symbol)
           let response = await axios.get('https://sandbox.iexapis.com/stable/stock/aapl/stats?token=Tsk_756f25f00c264637bcbc747049821db1')
           if(!response.status ==='OK')
            {

            }
            dispatch({type: GET_KEY_STATS, symbol: symbol, payload:response.data})
        }
        catch(err)
        {
            console.log(err)
        }
    }
}
