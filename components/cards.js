import React from 'react'
import { Card } from 'react-native-paper'
import {StyleSheet} from 'react-native'

const CardComponent= props =>{
    return(
        <Card style={styles.card} {...props}>
            <Card.Content>
            { props.children }
            </Card.Content>
        </Card>
    ) 
}

export default CardComponent

const styles = StyleSheet.create({
    card:{
      flex: 1,
      marginHorizontal: '2%',
      marginVertical: '0.5%',
      backgroundColor: 'white'
    }
})