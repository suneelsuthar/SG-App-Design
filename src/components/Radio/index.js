import React from "react";
import { TextInput, View, StyleSheet,TouchableOpacity } from "react-native";
import { Feather } from '@expo/vector-icons';
import Text from '../customText/index'

const Radio = (props) => {
  let { onChangeText,value,active } = props;
  return (
(active === value ?
    <View style={styles._row}>
      <TouchableOpacity style={[styles._active_checkbox]} onPress={()=>onChangeText(value)}>
    </TouchableOpacity>
    <Text style={styles._value}>{value}</Text>
    </View>
    :
    <View style={styles._row}>
    <TouchableOpacity style={styles._checkbox} onPress={()=>onChangeText(value)}>
    </TouchableOpacity>
    <Text  style={styles._value}>{value}</Text>
    </View>
    )
  );
};

const styles = StyleSheet.create({
    _active_checkbox:{
        borderRadius:30,
        height:25,
        width:25,
        marginRight:5,
        justifyContent:"center",
        alignItems:"center",
        borderWidth:6,
        borderColor:"#8366FF",
        backgroundColor:"white",
    },
    _checkbox:{
        borderRadius:30,
        height:25,
        width:25,
        backgroundColor:"white",
        marginRight:4,
        justifyContent:"center",
        alignItems:"center",
        borderWidth:3,
        borderColor:"#8366FF"
    },
    _row:{
        flexDirection:"row",
        alignItems:"center",
        marginVertical:10
    },
    _value:{
        // fontSize:15,
    }
});
export default Radio;
