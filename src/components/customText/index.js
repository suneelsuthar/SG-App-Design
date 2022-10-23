import React from "react";
import {StyleSheet,Text } from "react-native";
const CustomText = ({style,children}) => {
  return (
    <Text style={[style,
        {fontFamily: style?.fontFamily ? style.fontFamily : "Montserrat-Medium"}
    ]}>{children}</Text>
  );
};

const styles = StyleSheet.create({
  searchSection: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,

  },

});
export default CustomText;
