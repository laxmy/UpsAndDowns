import React from 'react'
import { Text  , StyleSheet, View} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

import * as Constants from '../constants'

const TimeRangeButton = props =>{
    const { status } = props
    let bgColor = status ==='checked' ? Constants.PrimaryColor: Constants.InActiveColor
    return (
        <TouchableOpacity style={{...styles.button,backgroundColor: bgColor}} onPress={props.onPress}>
            <Text style={{color:'white'}}> {props.title}</Text>
        </TouchableOpacity>      
           )
}
const TimeRangeSelect = props => {
    const [checked, setChecked] = React.useState('1d');
  
    return (
      <View style ={styles.timeRangeSelect}>
        <TimeRangeButton
          value="1d"
          title ="1d"
          status={ checked === '1d' ? 'checked' : 'unchecked' }
          onPress={() => setChecked('1d')}
        />
        <TimeRangeButton
          value="1m"
          title ="1m"
          status={ checked === '1m' ? 'checked' : 'unchecked' }
          onPress={() => setChecked('1m')}
        />
         <TimeRangeButton
          value="1y"
          title ="1y"
          status={ checked === '1y' ? 'checked' : 'unchecked' }
          onPress={() => setChecked('1y')}
        />
      </View>
    );
  };

export default TimeRangeSelect

const styles = StyleSheet.create({
    timeRangeSelect:{
        flexDirection:'row',
        alignItems: 'center',
        justifyContent:'space-evenly'
    },
    button:{
        color: 'white',
        width: 30,
        height: 30,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

