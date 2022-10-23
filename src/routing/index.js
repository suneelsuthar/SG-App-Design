import React from "react";
import { NavigationContainer, keyboard } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Feather from "@expo/vector-icons/Feather";
import Text from "../components/customText";
import { View } from "react-native";
import { Octicons } from "@expo/vector-icons";

// Screens
import {
  HomeScreen,
  FindScreen,
  InboxScreen,
  LoginScreen,
  ProfileScreen,
  CalendarScreen,
  DetailScreen,
} from "../screens";

const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();
const FindStack = createNativeStackNavigator();
const InboxStack = createNativeStackNavigator();
const CalendarStack = createNativeStackNavigator();
const ProfileStack = createNativeStackNavigator();
const MainStack = createNativeStackNavigator();

const HomeStackScreens = ({ navigation }) => (
  <HomeStack.Navigator>
    <HomeStack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        headerShown: false,
      }}
    />
  </HomeStack.Navigator>
);

const FindStackScreens = ({ navigation }) => (
  <FindStack.Navigator>
    <FindStack.Screen
      name="Find"
      component={FindScreen}
      options={{
        headerShown: false,
      }}
    />
  </FindStack.Navigator>
);

const InboxStackScreens = ({ navigation }) => (
  <InboxStack.Navigator>
    <InboxStack.Screen
      name="Inbox"
      component={InboxScreen}
      options={{
        headerShown: false,
      }}
    />
  </InboxStack.Navigator>
);

const CalendarStackScreens = ({ navigation }) => (
  <CalendarStack.Navigator>
    <CalendarStack.Screen
      name="Calendar"
      component={CalendarScreen}
      options={{
        headerShown: false,
      }}
    />
  </CalendarStack.Navigator>
);

const ProfileStackScreens = ({ navigation }) => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        headerShown: false,
      }}
    />
  </ProfileStack.Navigator>
);

const MainTabScreen = () => (
  <Tab.Navigator
    initialRouteName="Contribute"
    activeColor="#fff"
    screenOptions={{
      tabBarHideOnKeyboard: true,
    }}
  >
    <Tab.Screen
      name="HomeTab"
      component={HomeStackScreens}
      options={{
        headerShown: false,
        tabBarLabel: ({ color, focused }) =>
          focused ? (
            <Text
              style={{
                paddingBottom: 2,
                fontWeight: "500",
                fontStyle: "normal",
                fontSize: 12,
                color: "#8366FF",
                textAlign: "center",
              }}
            >
              Home
            </Text>
          ) : (
            <Text
              style={{
                paddingBottom: 2,
                fontWeight: "500",
                fontStyle: "normal",
                fontSize: 12,
                color: "#6C7B8A",
                textAlign: "center",
              }}
            >
              Home
            </Text>
          ),
        tabBarIcon: ({ color, focused }) => (
          <Feather
            size={22}
            name={focused ? "home" : "home"}
            color={focused ? "#8366FF" : "#2F2F3E"}
          />
        ),
      }}
    />
    <Tab.Screen
      name="FindTab"
      component={FindStackScreens}
      options={{
        headerShown: false,
        // tabBarHideOnKeyboard:true,
        tabBarLabel: ({ color, focused }) =>
          focused ? (
            <Text
              style={{
                paddingBottom: 2,
                fontWeight: "500",
                fontStyle: "normal",
                fontSize: 12,
                color: "#8366FF",
                textAlign: "center",
              }}
            >
              Find
            </Text>
          ) : (
            <Text
              style={{
                paddingBottom: 2,
                fontWeight: "500",
                fontStyle: "normal",
                fontSize: 12,
                color: "#6C7B8A",
                textAlign: "center",
              }}
            >
              Find
            </Text>
          ),
        tabBarIcon: ({ color, focused }) => (
          <Feather
            size={22}
            name={focused ? "search" : "search"}
            color={focused ? "#8366FF" : "#2F2F3E"}
          />
        ),
      }}
    />
    <Tab.Screen
      name="CalendarTab"
      component={CalendarStackScreens}
      options={{
        headerShown: false,
        tabBarLabel: ({ color, focused }) =>
          focused ? (
            <Text
              style={{
                paddingBottom: 2,
                fontWeight: "500",
                fontStyle: "normal",
                fontSize: 12,
                color: "#8366FF",
                textAlign: "center",
              }}
            >
              Calendar
            </Text>
          ) : (
            <Text
              style={{
                paddingBottom: 2,
                fontWeight: "500",
                fontStyle: "normal",
                fontSize: 12,
                color: "#6C7B8A",
                textAlign: "center",
              }}
            >
              Calendar
            </Text>
          ),
        tabBarIcon: ({ color, focused }) => (
          <Feather
            size={22}
            name={focused ? "calendar" : "calendar"}
            color={focused ? "#8366FF" : "#2F2F3E"}
          />
        ),
      }}
    />

    <Tab.Screen
      name="InboxTab"
      component={InboxStackScreens}
      options={{
        headerShown: false,
        tabBarLabel: ({ color, focused }) =>
          focused ? (
            <View>
              <View
                style={{
                  position: "absolute",
                  right: -5,
                  top: -30,
                  backgroundColor: "#CC383C",
                  width: 20,
                  height: 15,
                  borderRadius: 5,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    fontSize: 10,
                    color: "white",
                    fontFamily: "Montserrat-Bold",
                  }}
                >
                  10
                </Text>
              </View>

              <Text
                style={{
                  paddingBottom: 2,
                  fontWeight: "500",
                  fontStyle: "normal",
                  fontSize: 12,
                  color: "#8366FF",
                  textAlign: "center",
                }}
              >
                Inbox
              </Text>
            </View>
          ) : (
            <View>
              <View
                style={{
                  position: "absolute",
                  right: -5,
                  top: -30,
                  backgroundColor: "#CC383C",
                  width: 20,
                  height: 15,
                  borderRadius: 5,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    fontSize: 10,
                    color: "white",
                    fontFamily: "Montserrat-Bold",
                  }}
                >
                  10
                </Text>
              </View>
              <Text
                style={{
                  paddingBottom: 2,
                  fontWeight: "500",
                  fontStyle: "normal",
                  fontSize: 12,
                  color: "#6C7B8A",
                  textAlign: "center",
                }}
              >
                Inbox
              </Text>
            </View>
          ),
        tabBarIcon: ({ color, focused }) => (
          <Feather
            size={22}
            name={focused ? "inbox" : "inbox"}
            color={focused ? "#8366FF" : "#2F2F3E"}
          />
        ),
      }}
    />

    <Tab.Screen
      name="ProfileTab"
      component={ProfileStackScreens}
      options={{
        headerShown: false,
        tabBarLabel: ({ color, focused }) =>
          focused ? (
            <Text
              style={{
                paddingBottom: 2,
                fontWeight: "500",
                fontStyle: "normal",
                fontSize: 12,
                color: "#8366FF",
                textAlign: "center",
              }}
            >
              Profile
            </Text>
          ) : (
            <Text
              style={{
                paddingBottom: 2,
                fontWeight: "500",
                fontStyle: "normal",
                fontSize: 12,
                color: "#6C7B8A",
                textAlign: "center",
              }}
            >
              Profile
            </Text>
          ),
        tabBarIcon: ({ color, focused }) => (
          <Feather
            size={22}
            name={focused ? "user" : "user"}
            color={focused ? "#8366FF" : "#2F2F3E"}
          />
        ),
      }}
    />
  </Tab.Navigator>
);

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="Login">
        <MainStack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={LoginScreen}
        />

        <MainStack.Screen
          options={{ headerShown: false }}
          name="Main"
          component={MainTabScreen}
        />

        <FindStack.Screen
          name="DetailScreen"
          component={DetailScreen}
          options={{
            headerShown: false,
          }}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
