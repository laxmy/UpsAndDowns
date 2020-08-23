import React,{ useEffect, useState } from 'react'
import { View, Text,StyleSheet} from 'react-native'
import { useDispatch , useSelector } from 'react-redux'

import TrendChart from '../components/trendChart'
import TimeRangeSelect from '../components/timeRangeButton'
import { getKeyStats } from '../store/actions/keyStats'
import StockListItem from '../components/stockListItem'


const StockDetail = props =>{

    let { stockItem} = props.route.params

    let chartData = dummmyDataFor5Days.map(item => item.close)

    const dispatch = useDispatch()
    const keyStats  = useSelector(state => state.keyStats)
    console.log(keyStats[stockItem.symbol])


    const [isLoading, setIsLoading ] = useState(false)
    const [timeRangeSelected, setTimeRange] = useState('1d')

    const fetchStats =  async () => {
      try {
        await dispatch(getKeyStats(stockItem.symbol))
      } 
      catch (err) {
        console.log(err.message);
      }
    }

    const fetchHistoricalData = async () =>{
        try{
            await dispatch()
        }
        catch(err){
            
        }
    }
    useEffect(()=>{
      setIsLoading(true)
      fetchStats()
      setIsLoading(false)
    },[dispatch])
    

    return (
        <View style={styles.screen}> 
            <View style={styles.headerSection}>
            <Text style={styles.header}>{stockItem.companyName} </Text> 
            <Text style={styles.subHeader}>Today's Earnings </Text> 
            <Text style={styles.mostImp}>{stockItem.previousClose} </Text> 
            </View> 
            
            
            <TrendChart data={chartData}/> 
          
            <TimeRangeSelect  />

            <Text>KEY STATS</Text> 

            <View style={styles.stats}>   
                <View style={styles.statsColumn}>
                    <Text>TICKER</Text>
                    <Text> {stockItem.symbol} </Text>
                </View>
                <View style={styles.statsColumn}>
                    <Text>MARKET CAP</Text>
                    <Text>{keyStats[stockItem.symbol].marketcap} </Text>
                </View>
                <View style={styles.statsColumn}>
                    <Text>VOLUME</Text>
                    <Text>{keyStats[stockItem.symbol].avg10Volume} </Text>
                </View>
            </View>
            <View style={styles.stats}>   
                <View style={styles.statsColumn}>
                    <Text>P E RATIO </Text>
                    <Text> {keyStats[stockItem.symbol].peRatio}  </Text>
                </View>
                <View style={styles.statsColumn}>
                    <Text>DAY RANGE</Text>
                    <Text> {keyStats[stockItem.symbol].day50MovingAvg} </Text>
                    <View style={styles.statsColumn}>
                    <Text>52 WK RANGE</Text>
                    <Text> {keyStats[stockItem.symbol].week52low} </Text>
                </View>
                </View>
            </View>
        </View>
    )
}

export default StockDetail

const dummmyDataFor5Days = [{"date":"2020-07-30","open":38.25,"close":37.25,"high":38.55,"low":36.59,"volume":10113770,"uOpen":37.45,"uClose":36.85,"uHigh":37.67,"uLow":37.1,"uVolume":10282607,"change":0,"changePercent":0,"label":"Jul 30","changeOverTime":0},
{"date":"2020-07-31","open":38.98,"close":37.7,"high":37.67,"low":37.67,"volume":19397020,"uOpen":37.54,"uClose":37.3,"uHigh":38.48,"uLow":37.58,"uVolume":19389200,"change":-0.32,"changePercent":-0.9077,"label":"Jul 31","changeOverTime":-0.00908},
{"date":"2020-08-03","open":36.61,"close":36.84,"high":37.77,"low":36,"volume":15828884,"uOpen":37.61,"uClose":36.8,"uHigh":37.31,"uLow":36.8,"uVolume":15510164,"change":-0.01,"changePercent":-0.0276,"label":"Aug 3","changeOverTime":-0.009418},
{"date":"2020-08-04","open":36.54,"close":37.63,"high":37.52,"low":37.4,"volume":10960498,"uOpen":36.43,"uClose":37.91,"uHigh":36.64,"uLow":36.14,"uVolume":10827522,"change":-0.04,"changePercent":-0.1118,"label":"Aug 4","changeOverTime":-0.010108},
{"date":"2020-08-05","open":37.69,"close":37.89,"high":37.58,"low":37.59,"volume":10545270,"uOpen":36.59,"uClose":37.08,"uHigh":38.77,"uLow":37.27,"uVolume":10457689,"change":0.45,"changePercent":1.2575,"label":"Aug 5","changeOverTime":0.001981}]

const styles = StyleSheet.create({
    screen:{
        flexDirection:'column',
        alignItems: 'stretch',
        justifyContent:'center',
        marginHorizontal: '0.5%'
    },
    headerSection:{
        flexDirection: 'column'
    },
    stats:{
        flexDirection:'row',
        alignItems: 'center',
        justifyContent:'space-evenly',
        height: 100,
        marginTop: '0.2%'
    },
    statsCol:{
        flex:2,
        flexDirection: 'column',
        alignItems: 'stretch',
        justifyContent:'center',
    },
    header:{
        fontSize: 18
    },
    subHeader:{
        fontSize: 14
    },
    mostImp:{
        fontSize: 20
    }
    
})