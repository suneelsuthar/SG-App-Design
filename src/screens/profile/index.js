import { useState, useEffect } from "react";
import FirebaseAuthService from "../../firebaseServices/FirebaseAuthService";
import { useNavigation } from "@react-navigation/native";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

const ProfileScreen = () => {
  const [loggedInUser, setLoggedInUse] = useState(null);
  const [user, setUser] = useState({});

  const navigation = useNavigation();
  //firebase Listener
  FirebaseAuthService.subscribeToAuthChange(setLoggedInUse);

  const unsubscribe = FirebaseAuthService.subscribeToAuthChange(setLoggedInUse);

  useEffect(() => {
    if (loggedInUser) {
      setUser(loggedInUser);
    }
    return unsubscribe;
  }, [loggedInUser]);
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.name}>Profile</Text>
      </View>

      <View style={styles.body}>
        {user && user.email ? (
          <Text style={styles.name}>Welcome {user.email}</Text>
        ) : (
          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.7}
            onPress={() => navigation.replace("Login")}
          >
            <Text style={styles.buttonText}>Sign In</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#2F2F3E",
  },
  headerContainer: {
    paddingHorizontal: 10,
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10,
  },

  name: {
    color: "white",
    fontSize: 16,
  },

  body: {
    alignItems: "center",
    marginTop: 200,
  },

  button: {
    backgroundColor: "rgba(20, 15, 38, 0.5)",
    paddingHorizontal: 20,
    paddingVertical: 15,
    width: 200,
    borderRadius: 30,
  },
  buttonText: {
    color: "#FFFFFF",
    lineHeight: 20,
    fontStyle: "normal",
    fontFamily: "Montserrat-Medium",
  },
});

export default ProfileScreen;
