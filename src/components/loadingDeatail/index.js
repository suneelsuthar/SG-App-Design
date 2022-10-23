import React, { useEffect, useRef } from "react";
import { View, Animated, Text, Dimensions, StyleSheet, ScrollView, FlatList } from "react-native";
import SkeletonLoader from "expo-skeleton-loader";
import { LinearGradient } from 'expo-linear-gradient';

const { width, height } = Dimensions.get("window");
let MaxWidth = Dimensions.get("window").width * 0.4;

const LoadingDetails = ({
  size = 100,
  style,
}) => {

  return (

    <View style={styles.container}>
      <ScrollView>
      <SkeletonLoader boneColor="grey">
        <SkeletonLoader.Container
          style={[{ width: "100%", margin: 3 }]}
        >
          <SkeletonLoader.Container style={[styles._loader_container]}>
            <SkeletonLoader.Item style={styles._circle} />
            
            <SkeletonLoader.Container style={{flex:1}} >
            <SkeletonLoader.Item style={{ width: 140, height: 15, marginBottom: 5, backgroundColor: "white", borderRadius: 100 }} />
            <SkeletonLoader.Container style={{flexDirection:"row"}}>
              <SkeletonLoader.Item
                style={{ width: 25, height: 15, marginBottom: 5, backgroundColor: "white", borderRadius: 100 }}
              />

              <SkeletonLoader.Item
                style={{ width: 45, height: 15, marginBottom: 5, backgroundColor: "white", borderRadius: 100, marginLeft: 10 }}
              />
              </SkeletonLoader.Container>
              </SkeletonLoader.Container>

              <SkeletonLoader.Container style={{flexDirection:"row",flex:1,justifyContent:"flex-end"}}>
              <SkeletonLoader.Item
                style={{ width: 35, height: 15,  backgroundColor: "white", borderRadius: 100 }}
              />

              <SkeletonLoader.Item
                style={{ width: 30, height: 15,  backgroundColor: "white", borderRadius: 100, marginRight: 10,marginLeft:5 }}
              />
              </SkeletonLoader.Container>
          </SkeletonLoader.Container >
          <SkeletonLoader.Container style={{ padding: 10 }}>
            <SkeletonLoader.Item
              style={{ width: "80%", height: 15, marginBottom: 5, backgroundColor: "white", borderRadius: 100 }}
            />
            <SkeletonLoader.Container style={{ flexDirection: "row" }}>
              <SkeletonLoader.Item
                style={{ width: 125, height: 15, marginBottom: 5, backgroundColor: "white", borderRadius: 100 }}
              />
            </SkeletonLoader.Container>
          </SkeletonLoader.Container>

        {/*  cards place holders */}
            <SkeletonLoader.Container style={{ flexDirection: "row",justifyContent:"space-between",marginVertical:40 }}>
              <SkeletonLoader.Item style={styles._square}/>
              <SkeletonLoader.Item style={styles._square}/>
              <SkeletonLoader.Item style={styles._square}/>
              <SkeletonLoader.Item style={styles._square}/>
            </SkeletonLoader.Container>

            {/* middle section 1 */}
            <SkeletonLoader.Container style={{justifyContent:"center",alignItems:"center"}}>
            <SkeletonLoader.Item
                style={{ width: 125, height: 15, marginBottom: 5, backgroundColor: "white", borderRadius: 100 }}
              />
            <SkeletonLoader.Container style={{flexDirection:"row"}}>
              <SkeletonLoader.Item
                style={{ width: 25, height: 15, marginBottom: 5, backgroundColor: "white", borderRadius: 100 }}
              />
              <SkeletonLoader.Item
                style={{ width: 45, height: 15, marginBottom: 5, backgroundColor: "white", borderRadius: 100, marginLeft: 10 }}
              />
              </SkeletonLoader.Container>
</SkeletonLoader.Container>

  {/* middle section 2 */}
  <SkeletonLoader.Container style={{justifyContent:"center",alignItems:"center",marginVertical:20}}>
            <SkeletonLoader.Item
                style={{ width: "90%", height: 15, marginBottom: 5, backgroundColor: "white", borderRadius: 100 }}
              />
            <SkeletonLoader.Container style={{flexDirection:"row"}}>
              <SkeletonLoader.Item
                style={{ width: "60%", height: 15, marginBottom: 5, backgroundColor: "white", borderRadius: 100 }}
              />
            
              </SkeletonLoader.Container>
</SkeletonLoader.Container>

{/* BOTTOM CARDS */}
{/*  cards place holders */}
            <SkeletonLoader.Container style={{ flexDirection: "row",justifyContent:"space-between",marginVertical:40,flexWrap:"wrap" }}>
              <SkeletonLoader.Item style={styles._square_card}/>
              <SkeletonLoader.Item style={styles._square_card}/>
              <SkeletonLoader.Item style={styles._square_card}/>
              <SkeletonLoader.Item style={styles._square_card}/>
              <SkeletonLoader.Item style={styles._square_card}/>
              <SkeletonLoader.Item style={styles._square_card}/>

            </SkeletonLoader.Container>




          {/* <SkeletonLoader.Item
              style={{ width: "100%", backgroundColor: "white", borderRadius: 20 }}

            /> */}
         
          

        </SkeletonLoader.Container>
      </SkeletonLoader>
      </ScrollView>
    </View>

  );
};

const styles = StyleSheet.create({


  container: {
    padding:10,
    opacity:0.2
  },


  box: {
    backgroundColor: "white",
    width: "40%",
    margin: 1,
    marginTop: -40,
    borderWidth: 2,
  },
  _loader_container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent:"space-between"
  },
  _circle: {
    height: 60,
    width: 60,
    borderRadius: 30,
    marginRight:10
  },
  _square:{
    height:80,
    width:80,
    borderRadius:10
  },
  _square_card:{
   margin:5,
   width:"47%",
   height:150,
   borderRadius:10
  }

});

export default LoadingDetails;
