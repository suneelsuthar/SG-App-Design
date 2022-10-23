import React, { useEffect, useRef } from "react";
import { View, Animated, Text, Dimensions, StyleSheet, ScrollView, FlatList } from "react-native";
import SkeletonLoader from "expo-skeleton-loader";
import { LinearGradient } from 'expo-linear-gradient';

const { width, height } = Dimensions.get("window");
let MaxWidth = Dimensions.get("window").width * 0.4;

const LoadingCard = ({
  size = 100,
  style,
}) => {

  return (

    <View style={styles.container}>
      <FlatList style={{ margin: 1}}
        scrollEnabled
        nestedScrollEnabled
        data={[{ height: 100, value: 1 }, { height: 120, value: 2 }, { height: 50, value: 3 }, { height: 120, value: 4 },{ height: 50, value: 3 }, { height: 120, value: 4 }]}
        numColumns={2}
        keyExtractor={(item, index) => item.height}
        contentContainerStyle={{
          justifyContent:"space-between",
          flexDirection:"row",
          flexWrap:"wrap",
          opacity:0.4
        }}
        renderItem={(item) => <SkeletonLoader  boneColor="grey">
          <SkeletonLoader.Container
            style={[{width: width / 2.2, margin: 3 }]}
          >
            <SkeletonLoader.Item
              style={{ width: "100%", height: item.item.height, backgroundColor: "white", borderRadius: 20 }}

            />
            <SkeletonLoader.Container style={{ padding: 10 }}>
              <SkeletonLoader.Item
                style={{ width: "100%", height: 15, marginBottom: 5, backgroundColor: "white", borderRadius: 100 }}
              />

              <SkeletonLoader.Container style={{ flexDirection: "row" }}>

                <SkeletonLoader.Item
                  style={{ width: 25, height: 15, marginBottom: 5, backgroundColor: "white", borderRadius: 100 }}
                />

                <SkeletonLoader.Item
                  style={{ width: 40, height: 15, marginBottom: 5, backgroundColor: "white", borderRadius: 100, marginLeft: 10 }}
                />
              </SkeletonLoader.Container>
              
              

            </SkeletonLoader.Container>

            <SkeletonLoader.Container style={{ padding: 10,paddingTop:0 }}>
              <SkeletonLoader.Item
                style={{ width: "55%", height: 15, marginBottom: 5, backgroundColor: "white", borderRadius: 100 }}
              />

              <SkeletonLoader.Container style={{ flexDirection: "row" }}>

                <SkeletonLoader.Item
                  style={{ width: 25, height: 15, marginBottom: 5, backgroundColor: "white", borderRadius: 100 }}
                />

                <SkeletonLoader.Item
                  style={{ width: 30, height: 15, marginBottom: 5, backgroundColor: "white", borderRadius: 100, marginLeft: 10 }}
                />

<SkeletonLoader.Item
                  style={{ width: 30, height: 30, marginBottom: 5, backgroundColor: "white", borderRadius: 100, marginLeft: 10,position:"absolute",right:0,top:-20 }}
                />
              </SkeletonLoader.Container>
            </SkeletonLoader.Container>


          </SkeletonLoader.Container>
        </SkeletonLoader>
        }
      />

    </View>

  );
};

const styles = StyleSheet.create({
  

  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    flex: 1,
  },


  box: {
    backgroundColor: "white",
    width: "40%",
    margin: 1,
    marginTop: -40,
    borderWidth: 2,
  },
  
});

export default LoadingCard;
