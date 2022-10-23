import React from "react";
import { TextInput, View, StyleSheet ,Image} from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import Text from '../customText'

const CardItem = ({data,onPress}) => {
  return (
    <Card style={styles._card} onPress={()=>onPress()}>
    <Card.Cover source={ data.image }  style={styles._image} />

    <Card.Content style={{position:"relative"}}>
        <View style={styles._circle}>
            <Image source={ data.profile } />
        </View>
      <Text style={styles._name}>{data.name}</Text>
      <Text style={styles._title}>{data.title}</Text>
      <Text style={styles._desc}>{data.description}</Text>
    </Card.Content>
   
  </Card>
  );
};

const styles = StyleSheet.create({
    _card: {
    marginTop: 10,
    padding:5,
    width:"47%",
    
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
    fontFamily:"Montserrat-Bold",
    // fontWeight:"bold"
  },
  _title:{
    color:"#6C7B8A",
    // fontSize:18
  },
  _desc:{
    fontSize:13,
    paddingBottom:10,
    flex:1,
    fontFamily:"Montserrat-Bold",
    color:"#3B3B4D"

  }

  
});
export default CardItem;
