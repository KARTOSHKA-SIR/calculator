import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class addtodo extends Component{
  render(){
    return(
        <View style={styles.calcKey}>
            <TouchableOpacity onPress={()=>{this.props.onClick()}}>
                <Text style={styles.textDisplay}>{this.props.displayKey}</Text>
            </TouchableOpacity>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  textDisplay:{
    color:"white",
    textAlign:"center",
    fontSize:30,         
  },
  calcKey:{   
    backgroundColor:"#000000",
    flex:.2
  },
    
  
    
});