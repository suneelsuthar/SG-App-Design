import React from "react";
import { TextInput, View, StyleSheet,TouchableOpacity} from "react-native";
import { Feather } from '@expo/vector-icons';
import Text from '../customText/index'

const SearchInput = (props) => {
  let { onChangeText, autoFocus, value, placeholder,active } = props;
  return (
(active ?
    <View style={styles._row}>

      <TouchableOpacity style={styles._active_checkbox} onPress={()=>onChangeText(value)}>
      <Feather name="check" size={24} color="white" />     
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
        borderRadius:10,
        height:30,
        width:30,
        backgroundColor:"#8366FF",
        marginRight:10,
        justifyContent:"center",
        alignItems:"center",
        borderWidth:3,
        borderColor:"#8366FF"
    },
    _checkbox:{
        borderRadius:10,
        height:30,
        width:30,
        backgroundColor:"white",
        marginRight:10,
        justifyContent:"center",
        alignItems:"center",
        borderWidth:3,
        borderColor:"#F4F6F9"
    },
    _row:{
        flexDirection:"row",
        alignItems:"center",
        marginVertical:10
    },
});
export default SearchInput;
