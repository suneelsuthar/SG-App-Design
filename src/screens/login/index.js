//rnfes
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useState, useEffect } from "react";
import FirebaseAuthService from "../../firebaseServices/FirebaseAuthService";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedInUser, setLoggedInUse] = useState(null);

  const navigation = useNavigation();
  //firebase Listener
  FirebaseAuthService.subscribeToAuthChange(setLoggedInUse);

  const unsubscribe = FirebaseAuthService.subscribeToAuthChange(setLoggedInUse);

  useEffect(() => {
    if (loggedInUser) {
      navigation.replace("Main");
    }
    return unsubscribe;
  }, [loggedInUser]);

  const handleSignUp = () => {
    FirebaseAuthService.registerUser(email, password)
      .then((userCrendetials) => {
        const user = userCrendetials.user;
      })
      .catch((error) => alert(error));
  };

  const handleSignIn = () => {
    FirebaseAuthService.signInUser(email, password)
      .then((userCrendetials) => {
        const user = userCrendetials.user;
        // console.log(user);
      })
      .catch((error) => alert(error));
  };
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button]} onPress={handleSignIn}>
          <Text style={[styles.buttonText]}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.buttonOutline]}
          onPress={handleSignUp}
        >
          <Text style={[styles.buttonOutlineText]}>Register</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.replace("Main");
        }}
        style={{ marginTop: 20 }}
      >
        <Text style={{ textDecorationLine: "underline" }}>Skip for now</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: { width: "80%" },
  input: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  buttonContainer: {
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  button: {
    width: "100%",
    backgroundColor: "#0782F9",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
  buttonOutline: {
    backgroundColor: "white",
    marginTop: 5,
    borderColor: "#0782F9",
    borderWidth: 2,
  },
  buttonOutlineText: {
    color: "#0782F9",
    fontWeight: "700",
    fontSize: 16,
  },
});
