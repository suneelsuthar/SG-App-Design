import React from "react";
import { TextInput, View, StyleSheet ,Image,ImageBackground} from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import Text from '../customText/index'

const TabCard = ({image,subtitle,title,height}) => {
  return (
    <ImageBackground style={[styles._card,{height:height ? height:100}]} source={image}>
      <View style={{flex:1,justifyContent:"center"}}>
      <Text style={styles._name}>{title}</Text>
      <Text style={styles._title}>{subtitle}</Text>
      </View>
  </ImageBackground>
  );
};

const styles = StyleSheet.create({
    _card: {
    marginTop: 10,
    margin:5,
    width:250,
    borderRadius:5,
    overflow:"hidden",
    padding:20
    
  },
  _image:{
    margin:0,width:"100%",
    elevation:1,
    position:"relative",
    height:120,
  },
  _circle:{
    borderRadius:30,
    backgroundColor:"green",
    position:"absolute",
    right:30,
    marginTop:-20,
    borderWidth:10,
    borderColor:"white",
    height:35,
    width:35,
    justifyContent:"center",
    alignItems:"center",
    zIndex:10
   
  },
  profile:{
    // height:30,
    // width:30,
    borderRadius:100,
    // overflow:"hidden"
  },
  _name:{
    color:"#4C5FEF",
    // fontSize:20,
    marginTop:30,
    color:"white",
    fontSize:20,
    fontFamily:"Montserrat-Bold"
  },
  _title:{
    color:"#6C7B8A",
    color:"white",
    fontFamily:"Montserrat-SemiBold"


    // fontSize:18
  },
  _desc:{
    // fontSize:22,
    paddingBottom:10,
    flex:1
  }

  
});
export default TabCard;
