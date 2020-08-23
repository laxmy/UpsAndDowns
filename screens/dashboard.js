import React,{useEffect, useState} from 'react'
import { View, Text ,Button, SafeAreaView, FlatList, StyleSheet} from 'react-native'
import { useDispatch , useSelector } from 'react-redux'

import { getMostActive } from '../store/actions/active'
import StockListItem from '../components/stockListItem'

import * as Constants from '../constants'
import StylisedText from '../components/stylisedText'

const sliderWidth = 300;
const slideWidth = 250;
const horizontalMargin = 20;
const itemWidth = slideWidth + horizontalMargin * 2;

const Dashboard = props => {
  const dispatch = useDispatch()
  const { mostActive } = useSelector(state => state.mostActive)
  const [isLoading, setIsLoading ] = useState(false)
  const fetchData =  async () => {
    try {
      await dispatch(getMostActive())
    } 
    catch (err) {
      console.log(err.message);
    }
  }
  useEffect(()=>{
    setIsLoading(true)
    fetchData()
    setIsLoading(false)
  },[dispatch])
  
  const renderSlide = ({item, index}) => {
    return (
       <StockListItem stock ={item} navigateToStockDetail={()=> props.navigation.navigate('Detail',{stockItem: item})} />
    );
}


    return isLoading?(
        <View>
            <Text> Dashboard </Text>
            <Button title='Move on' onPress={()=> props.navigation.navigate('Detail')}></Button>
        </View>):(
          <SafeAreaView style={styles.screen}>
            <StylisedText textType='sectionHeader'>MOST ACTIVES</StylisedText>
             <FlatList 
             data={mostActive}
             keyExtractor={(item, index) => item.symbol}
             renderItem={renderSlide}/>
          </SafeAreaView>
         
        )
}

export default Dashboard    

const styles = StyleSheet.create({
  screen:{
    flex: 1,
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'stretch'
  }
})