import React,{useEffect, useState} from 'react'
import { View, Text ,Button} from 'react-native'
import { useDispatch , useSelector } from 'react-redux'
import { getMostActive } from '../store/actions/active'
import Carousel from 'react-native-snap-carousel'

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
  },[dispatch])
  
  setIsLoading(false)
  console.log(mostActive)
  const slides = mostActive.map((entry, index) => {
    return (
        <View key={`entry-${index}`} style={styles.slide}>
            <Text style={styles.title}>{ entry.title }</Text>
        </View>
    );
});


    return isLoading ? (
        <View>
            <Text> Dashboard </Text>
            <Button title='Move on' onPress={()=> props.navigation.navigate('Detail')}></Button>
        </View>
    ):(
      <Carousel
      ref={(carousel) => { this._carousel = carousel; }}
      sliderWidth={sliderWidth}
      itemWidth={itemWidth}
      >
        { slides }
      </Carousel>
    )
}

export default Dashboard    