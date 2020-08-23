import React from 'react'
import { Text ,StyleSheet } from 'react-native'
import * as Constants from '../constants'

const StylisedText =(props) =>{
    const { textType }  = props
    let styleType = Styles.sectionHeader
    switch(textType)
    {
        case 'sectionHeader': 
            styleType = Styles.sectionHeader
            break
        case 'content': 
            styleType = Styles.content
            break
        default: styleType = Styles.content
    }
  return(
  <Text style ={styleType}>
      {props.children}
  </Text>
  )
}

export default StylisedText


const Styles = StyleSheet.create({
    sectionHeader:{
        fontFamily:'Nunito-Light',
        fontSize: 18,
        color: Constants.PrimaryColor,
        backgroundColor: Constants.BackgroundColor,
        margin:'0.4%',
        alignSelf:'center'
    },
    content:{
        fontFamily:'Nunito-Light',
        fontSize: 14
    }
})