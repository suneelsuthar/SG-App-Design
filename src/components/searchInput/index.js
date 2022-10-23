import React from "react";
import { TextInput, View, StyleSheet } from "react-native";
const SearchInput = (props) => {
  let { onChangeText, autoFocus, value, placeholder,onFocus,onBlur } = props;
  return (
    <View style={styles.searchSection}>
      {props.icon}
      <TextInput
        style={styles.input}
        autoFocus={autoFocus}
        placeholder={placeholder}
        onFocus={()=>onFocus()}
        onBlur={()=>onBlur()}
        onChangeText={onChangeText}
        underlineColorAndroid="transparent"
        value={value}
        placeholderTextColor="white"
      />

      {value && value.length > 0 ? props.closeIcon : null}
    </View>
  );
};

const styles = StyleSheet.create({
  searchSection: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,

  },

  input: {
    flex: 1,
    paddingVertical: 10,
    paddingLeft: 40,
    fontWeight: "500",
    fontSize: 15,
    lineHeight: 20,
    fontStyle: "normal",
    color: "#FFFFFF",
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    borderRadius: 50,
    fontFamily:"Montserrat-Medium"
  },
});
export default SearchInput;
