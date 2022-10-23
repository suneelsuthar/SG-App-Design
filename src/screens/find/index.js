import React, { useState } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Alert,
  Modal,
  ActivityIndicator,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Feather from "@expo/vector-icons/Feather";
import AntDesign from "@expo/vector-icons/AntDesign";
import {
  Card,
  LoadingCard,
  SearchInput,
  CheckBox,
  RangeSlider,
  Radio,
} from "../../components";
import { dummyTagsData, relatedData, productData } from "./data";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import Slider from "@react-native-community/slider";
import { Switch } from "react-native-paper";
import Text from "./../../components/customText";

const FindScreen = (props) => {
  const [searchValue, setSearchValue] = useState("");
  const [loading, setloading] = useState(false);
  const [filterloading, setfilterloading] = useState(false);
  const [showData, setshowData] = useState(false);
  const [modal, setmodal] = useState(false);
  const [stafPic, setstatPic] = useState(false);
  const [newItem, setnewItem] = useState(false);
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const [selected, setselected] = useState("Not selected");
  const [activeField, setActiveField] = useState(false);
  const [types, settpes] = useState(["Illustration", "Image"]);

  let handelSearch = (text) => {
    setActiveField(false)
    setSearchValue(text);
  };
  let searchItem = () => {
    Keyboard.dismiss();
    setActiveField(true)
    setloading(true);
    setshowData(false)
    setTimeout(() => {
      setloading(false);
      setshowData(true);
    }, 3000);
  };

  let showResult = () => {
    setfilterloading(true);
    setTimeout(() => {
      setfilterloading(false);
      setmodal(false);
      // props.navigation.navigate("DetailScreen")
    }, 2000);
  };

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <SearchInput
            placeholder={loading ? "Loading results.." : "Search"}
            icon={
              <Feather
                style={styles.icon}
                name="search"
                size={22}
                color="white"
              />
            }
            onChangeText={handelSearch}
            onBlur={() => setActiveField(true)}
            onFocus={() => setActiveField(false)}
            value={searchValue}
            closeIcon={
              <TouchableOpacity
                style={styles.closeIcon}
                activeOpacity={0.6}
                onPress={() => {setloading(false),setSearchValue(""),setshowData(false)}}
              >
                <AntDesign name="closesquare" size={22} color="white" />
              </TouchableOpacity>
            }
          />
          {showData && (
            <TouchableOpacity onPress={() => setmodal(true)}>
              <Image
                source={require("./../../assets/filter.png")}
                style={styles._filter}
              />
            </TouchableOpacity>
          )}
        </View>

        {searchValue.length > 0 && !activeField ? (
          <View style={styles.relatedDataContainer}>
            {relatedData &&
              relatedData.map((item, i) => {
                return (
                  <TouchableOpacity
                    key={i}
                    onPress={() => searchItem()}
                    activeOpacity={0.6}
                    style={styles.relatedListContainer}
                  >
                    <Feather name="search" size={22} color="#6C7B8A" />
                    <Text style={styles.relatedItemName}>{item.name}</Text>
                  </TouchableOpacity>
                );
              })}
          </View>
        ) : null}

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ opacity: searchValue === "" ? 1 : 0.8 }}
        >
          {!showData ? (
            <View style={styles.bodyContainer}>
              {loading ? (
                <LoadingCard />
              ) : (
                <View style={{ flex: 1 }}>
                  <Text style={styles.title}>Top Searches</Text>
                  <View style={styles.row}>
                    {dummyTagsData &&
                      dummyTagsData.map((item, i) => {
                        return (
                          <TouchableOpacity
                            style={[
                              styles.button,
                              { backgroundColor: item.bg, marginVertical: 5 },
                            ]}
                            activeOpacity={0.8}
                            key={i}
                            onPress={()=>{  setSearchValue(item.name),searchItem()}}
                          >
                            <Text
                              style={[
                                styles.buttonText,
                                { color: item.text ? item.text : "white" },
                              ]}
                            >
                              {item.name}
                            </Text>
                          </TouchableOpacity>
                        );
                      })}
                  </View>
                </View>
              )}
            </View>
          ) : (
            <View style={styles._cardContainer}>
              {productData.map((val, i) => {
                return (
                  <Card
                    key={i}
                    data={val}
                    onPress={() =>
                      props.navigation.navigate("DetailScreen", { data: val })
                    }
                  />
                );
              })}
            </View>
          )}
        </ScrollView>
        <View>
          {loading
            ? null
            : activeField && (
                <TouchableOpacity style={styles.signInButton}>
                  <Text style={styles.signInText}>Sign In</Text>
                </TouchableOpacity>
              )}
        </View>
        {/* <<<<<<< FILTER MODAL>>>>>>>>> */}

        <Modal
          animationType="fade"
          transparent={true}
          visible={modal}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setmodal(!modal);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles._modal_inner_view}>
              <View style={styles.modalView}>
                <View style={styles._modal_body}>
                  <Text style={styles._modal_heading}>refine search</Text>
                  <CheckBox
                    active={stafPic}
                    value="Staff picks"
                    onChangeText={() => setstatPic(!stafPic)}
                  />
                  <CheckBox
                    active={newItem}
                    value="New items"
                    onChangeText={() => setnewItem(!stafPic)}
                  />
                  <View style={styles._slider_view}>
                    <RangeSlider />
                  </View>
                  <Text style={styles._label}>Type</Text>
                  <View style={styles._row}>
                    <View style={styles._inner_row}>
                      {types.map((val, i) => {
                        return (
                          <View key={i} style={styles._chip}>
                            <Text style={styles._chip_text}>{val}</Text>
                            <TouchableOpacity>
                              <Entypo name="cross" size={15} color="white" />
                            </TouchableOpacity>
                          </View>
                        );
                      })}
                    </View>
                    <TouchableOpacity>
                      <Ionicons name="add-circle" size={34} color="#8366FF" />
                    </TouchableOpacity>
                  </View>
                  <View
                    style={[styles._row, { justifyContent: "space-between" }]}
                  >
                    <Text style={styles._label}>Width (px)</Text>
                    <Text style={[styles._label, { color: "grey" }]}>
                      3840 PX
                    </Text>
                  </View>

                  {/* slider */}
                  <Slider
                    // style={{ width: 200, height: 40 }}
                    style={{ width: "100%",height:50 }}
                    minimumValue={0}
                    maximumValue={10}
                    minimumTrackTintColor="#F4F6F9"
                    maximumTrackTintColor="#8366FF"
                    thumbTintColor="#8366FF"
                  />

                  <View
                    style={[styles._row, { justifyContent: "space-between" }]}
                  >
                    <Text style={[styles._label, { flex: 1 }]}>
                      Display black and white images
                    </Text>
                    <Switch
                      color="#8366FF"
                      value={isSwitchOn}
                      onValueChange={onToggleSwitch}
                    />
                  </View>
                  <View
                    style={[
                      styles._row,
                      { justifyContent: "space-between", marginTop: 30 },
                    ]}
                  >
                    <Radio
                      active={selected}
                      value="Not selected"
                      onChangeText={() => setselected("Not selected")}
                    />
                    <Radio
                      active={selected}
                      value="Selected"
                      onChangeText={() => setselected("Selected")}
                    />
                  </View>
                </View>
                <View style={styles._modal_footer}>
                  {filterloading && (
                    <ActivityIndicator
                      size="large"
                      style={styles._loader}
                      color="#8366FF"
                    />
                  )}

                  <TouchableOpacity
                    style={styles._close_view}
                    onPress={() => setmodal(false)}
                    activeOpacity={1}
                  >
                    <Image
                      source={require("./../../assets/close_btn.png")}
                      style={styles._close_icon}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[
                      styles.signInButton,
                      { borderRadius: 15, paddingVertical: 15 },
                    ]}
                    onPress={() => showResult()}
                  >
                    <Text style={styles.signInText}>SHOW RESULTS</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2F2F3E",
  },
  icon: {
    position: "absolute",
    paddingHorizontal: 10,
  },
  closeIcon: {
    position: "absolute",
    right: 10,
  },
  headerContainer: {
    paddingHorizontal: 10,
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
  },
  bodyContainer: {
    flex: 1,
    marginTop: 15,
    paddingHorizontal: 15,
  },
  _cardContainer: {
    flex: 1,
    marginTop: 15,
    paddingHorizontal: 5,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
  },
  title: {
    color: "#FFFFFF",
    fontSize: 30,
    marginVertical: 5,
    fontFamily: "Montserrat-Bold",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },

  button: {
    paddingVertical: 10,
    borderRadius: 50,
    marginRight: 10,
    marginVertical: 8,
    paddingRight: 20,
    paddingLeft: 15,
  },
  buttonText: {
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 14,
    lineHeight: 20,
    color: "white",
    marginRight: 15,
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

  relatedListContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomColor: "grey",
    borderBottomWidth: 0.5,
    paddingVertical: 15,
    paddingHorizontal: "7%",
  },

  relatedItemName: {
    color: "#121217",
    fontWeight: "500",
    lineHeight: 20,
    fontStyle: "normal",
    marginLeft: 20,
  },

  signInButton: {
    backgroundColor: "#6952CC",
    paddingVertical: 20,
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  signInText: {
    color: "#FFFFFF",
    fontSize: 14,
  },
  _filter: {
    height: 45,
    width: 45,
    marginLeft: 5,
  },
  // modal css
  centeredView: {
    flex: 1,
    padding: 10,
    paddingRight: 0,
    backgroundColor: "#140f2680",
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    height: "100%",
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  _modal_inner_view: {
    width: 250,
    alignSelf: "flex-end",
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    // overflow:"hidden"
  },
  _modal_body: {
    flex: 2,
  },
  _modal_footer: {
    flex: 1,
    justifyContent: "flex-end",
  },
  _close_icon: {
    height: 30,
    width: 30,
  },
  _close_view: {
    position: "absolute",
    left: -40,
    height: 60,
    width: 60,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    top: 80,
  },
  _loader: {
    marginVertical: 30,
  },
  _modal_heading: {
    textTransform: "uppercase",
    color: "#6C7B8A",
    marginVertical: 20,
  },
  _chip: {
    backgroundColor: "rgba(20, 15, 38, 0.5)",
    borderRadius: 100,
    padding: 5,
    paddingHorizontal: 10,
    marginRight: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  _chip_text: {
    fontSize: 12,
    color: "white",
  },
  _row: {
    flexDirection: "row",
    alignItems: "center",
  },
  _inner_row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  _label: {
    marginTop: 30,
    fontFamily: "Montserrat-SemiBold",
  },
  _slider_view: {
    marginTop: 20,
  },
});

export default FindScreen;
