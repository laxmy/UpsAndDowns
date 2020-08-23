import React from 'react'
import { View, Text} from 'react-native'
import { LineChart, Path, Grid , YAxis} from 'react-native-svg-charts'
//import { Circle, G, Line, Rect,Text } from 'react-native-svg'
import { Line } from 'react-native-svg'

import * as Constants from '../constants'

const TrendChart = props =>{
  const { data } = props
  
    const Shadow = ({ line }) => (
        <Path
            key={'shadow'}
            y={2}
            d={line}
            fill={'none'}
            strokeWidth={4}
            stroke={Constants.PrimaryColor}
        />
    )
    const HorizontalLine = (({ y }) => (
        <Line
            key={ 'zero-axis' }
            x1={ '0%' }
            x2={ '100%' }
            y1={ y(data[0]) }
            y2={ y(data[0]) }
            stroke={ 'grey' }
            strokeDasharray={ [ 4, 8 ] }
            strokeWidth={ 2 }
        />
    ))

   
    const contentInset = { top: 20, bottom: 20 }
    //let data = dummmyDataFor5Days.map(item => item.close)
    return (
            <View style={{ height: 200, flexDirection: 'row' }}>
                <YAxis
                    data={data}
                    contentInset={contentInset}
                    svg={{
                        fill: 'grey',
                        fontSize: 10,
                    }}
                    numberOfTicks={6}
                    formatLabel={(value) => `${value}`}
                />
                <LineChart
                    style={{ flex: 1, marginLeft: 16 }}
                    data={data}
                    svg={{ stroke: Constants.PrimaryColor}}
                    contentInset={contentInset}
                >
                   
                    <HorizontalLine />
                </LineChart>
        </View>
    )
}

export default TrendChart