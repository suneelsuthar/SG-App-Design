import React, { useState,useEffect } from "react";
import {
  View,
  StyleSheet,
  
  ScrollView,
  TouchableOpacity,
  Image,
  Alert,
  Modal,
  Pressable,
  ActivityIndicator
} from "react-native";
import Feather from "@expo/vector-icons/Feather";
import AntDesign from "@expo/vector-icons/AntDesign";
import { LoadingDetails,TabCard } from "../../components";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { dummyTagsData } from "./data";
import Text from './../../components/customText'

const DetailScreen = ({navigation,route}) => {
  const [loading, setloading] = useState(true)
  const [activeTab,setactiveTab] = useState("All events")

useEffect(()=>{
  setTimeout(() => {
    setloading(false)
    // props.navigation.navigate("DetailScreen")
  }, 5000)
})

let data = route.params.data

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() =>navigation.goBack()} style={styles._icons}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={{color:"white",fontFamily:"Montserrat-SemiBold"}}>{data.name}</Text>
        <View style={styles._row}>
          <TouchableOpacity onPress={() => setmodal(true)} style={styles._icons}>
            <Feather name="message-square" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setmodal(true)} style={styles._icons}>
            <Feather name="share" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles._body_container}>

        {loading ?
          <LoadingDetails /> :
          <View style={styles._layer_1}>

            <View style={styles._row}>
              <View style={styles._left}>
                <TouchableOpacity style={styles._profile_circle}>
                  <Image source={data.profile} style={styles._avatar} />
                </TouchableOpacity>
                <View style={{ padding: 10 }}>
                  <Text style={styles._h2}>{data.name}</Text>
                  <Text style={styles._sub_title}>{data.title}</Text>
                </View>
              </View>

              <View style={styles._right}>
                <TouchableOpacity style={styles._calender_circle}>
                  <MaterialCommunityIcons name="calendar-blank-outline" size={24} color="white" />
                </TouchableOpacity>
              </View>
            </View>

            <Text style={styles._desc}>
              {data.details}
            </Text>

            <Text style={styles._label}>{data?.activities?.length} common activities</Text>

          <View style={[styles._row,{flexWrap:"wrap",marginVertical:10}]}>
            {data?.activities?.map((val,i)=>{
              return(
                <View style={styles._tag} key={i}>
                  <Text style={styles._tag_text}>{val.name}</Text>
                  </View>
              )
            })}
            </View>

            <Text style={[styles._h2,{marginVertical:20}]}>Next events</Text>

            <View style={styles._tab_header}>
              <TouchableOpacity onPress={()=>setactiveTab("All events")} style={[styles._tab,{borderBottomWidth:activeTab === "All events" ? 2:0}]}>
                <Text style={styles._tab_text}>
                All events
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>setactiveTab("Parties")} style={[styles._tab,{borderBottomWidth:activeTab === "Parties" ? 2:0}]}>
                <Text style={styles._tab_text}>
                Parties
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>setactiveTab("Concerts")} style={[styles._tab,{borderBottomWidth:activeTab === "Concerts" ? 2:0}]}>
                <Text style={styles._tab_text}>
                Concerts
                </Text>
              </TouchableOpacity>
              </View>
              {/* tabs content */}

              <View style={{flexDirection:"row"}}>
                {/* <<<<<<<<<<< FIRST TAB>>>>>>>>>>> */}
                {activeTab === "All events" &&
                    <ScrollView horizontal>
                <View style={styles._left_column}>
                <TabCard  height={300} image={require('./../../assets/card2.png')} title="Fyre Festival" subtitle="Zurich, Switzerland" />
                  </View>
                  <View style={styles._right_column}>
                    <TabCard height={150} image={require('./../../assets/card3.png')} title="Music Festival" subtitle="Berlin" />
                    <TabCard height={150} image={require('./../../assets/card1.png')} title="Rock Concert" subtitle="Stockholm" />
                  </View>
                    </ScrollView>}

                      {/* <<<<<<<<<<< FIRST TAB>>>>>>>>>>> */}
                {activeTab === "Parties" &&
                    <ScrollView horizontal>
                <View style={styles._left_column}>
                <TabCard  height={300} image={require('./../../assets/card2.png')} title="Fyre Festival" subtitle="Zurich, Switzerland" />
                  </View>
                  <View style={styles._right_column}>
                    <TabCard height={150} image={require('./../../assets/card1.png')} title="Rock Concert" subtitle="Stockholm" />
                    <TabCard height={150} image={require('./../../assets/card3.png')} title="Music Festival" subtitle="Berlin" />
                  </View>
                    </ScrollView>}

                      {/* <<<<<<<<<<< FIRST TAB>>>>>>>>>>> */}
                {activeTab === "Concerts" &&
                    <ScrollView horizontal>
                <View style={styles._left_column}>
                <TabCard  height={300} image={require('./../../assets/card2.png')} title="Fyre Festival" subtitle="Zurich, Switzerland" />
                  </View>
                  <View style={styles._right_column}>
                    <TabCard height={150} image={require('./../../assets/card3.png')} title="Music Festival" subtitle="Berlin" />
                    <TabCard height={150} image={require('./../../assets/card1.png')} title="Rock Concert" subtitle="Stockholm" />
                  </View>
                    </ScrollView>}


                </View>
                </View>




        }

      </View>

      {/* <<<<<<< FILTER MODAL>>>>>>>>> */}

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2F2F3E",
    padding: 10
  },

  headerContainer: {
    paddingHorizontal: 10,
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 30,
    marginBottom: 10
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },



  relatedDataContainer: {
    backgroundColor: "#FFFFFF",
    paddingVertical: 10,
    marginTop: 10,
    position: "absolute",
    top: "17%",
    width: "100%",
    zIndex: 1,
  },



  _loader: {
    marginVertical: 30
  },

  _row: {
    flexDirection: "row",
    alignItems: "center",
  },
  _icons: {
    margin: 5
  },
  _body_container: {
    flex: 1,
    backgroundColor: "white",
    borderRadius: 10
  },
  _layer_1: {
    flex: 1,
    padding: 10
  },
  _profile_circle: {
    borderWidth: 3,
    borderRadius: 100,
    borderColor: "#8366FF",
    height: 90,
    width: 90,
    justifyContent: "center",
    alignItems: "center"
  },
  _avatar: {
    height: 80,
    width: 80
  },
  _h2: {
    fontWeight: "Montserrat-Bold",
    fontSize:18
  },
  _sub_title: {
    color: "#6C7B8A"
  },
  _left: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  _calender_circle: {
    backgroundColor: "#8366FF",
    height: 40,
    width: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center"
  },
  _desc: {
    color: "#6C7B8A",
    marginVertical: 20
  },
  _label:{
    fontWeight: "Montserrat-Bold",
    color:"#6C7B8A",
  
  },
  _tag:{
    backgroundColor:"rgba(20, 15, 38, 0.5)",
    borderRadius:5,padding:5,
    paddingHorizontal:8,
    margin:3
  },
  _tag_text:{
    color:"white",
    fontSize:12
  },
  _tab_header:{
    flexDirection:"row",
    alignItems:"center"
  },
  _tab_text:{
    textTransform:"uppercase",
    fontSize:12,
    fontWeight: "Montserrat-SemiBold",


  },
  _tab:{
    marginHorizontal:10,
    paddingBottom:10,
    borderColor:"#4C5FEF"
  },
  _left_column:{
    flex:1,
  },
  _right_column:{
    flex:1,

  }


});

export default DetailScreen;
