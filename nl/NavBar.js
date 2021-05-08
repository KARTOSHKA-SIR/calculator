import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class navbar extends Component{
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
    fontSize:30,
    color:"white",
    textAlign:"center",
             
  },
  calcKey:{   
    backgroundColor:"#000000",
    flex:.2
  },
    
 
    
});