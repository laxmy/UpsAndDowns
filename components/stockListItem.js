import React from 'react'
import { Text, View, StyleSheet} from 'react-native'
import  CardComponent  from '../components/cards'
import * as Constants from '../constants'


const StockListItem = props =>{
    let { stock , navigateToStockDetail} = props
    console.log(stock.symbol)
    return (
            <CardComponent onPress={navigateToStockDetail} >           
                <View style={styles.itemContainer}>
                    <View style={styles.section}>
                        <Text style ={{...styles.content,color:Constants.PrimaryColor}}> {stock.symbol}</Text>
                        <Text style ={{...styles.content,color:'grey'}}  numberOfLines={1} ellipsizeMode={'tail'}> {stock.companyName}</Text>
                    </View>
                    <View style={styles.section}>
                        <Text style ={{...styles.content,color:'black'}}> {stock.change}</Text>
                        <Text style ={{...styles.content,color:'grey'}}> {stock.changePercent}</Text>
                    </View>
                    <View style={styles.section}>
                        <Text style ={{...styles.content,color:'black'}}> {stock.latestPrice}</Text>
                        <Text style ={{...styles.content,color:'grey'}}> {stock.latestTime.toString()}</Text>
                    </View>                  
                </View>
            </CardComponent>
    )
}

export default StockListItem

const styles = StyleSheet.create({
    itemContainer:{
        flex:1,
        height: 70,
        flexDirection:'row',
        alignItems:'center',
        marginBottom: 10,
        justifyContent:'space-around',
    },
    section:{
        width: '30%',
        height: 100,
        flexDirection: 'column',
        justifyContent:'center'
    },
    content:{
        fontFamily:'Nunito-Bold'
    }
   
})