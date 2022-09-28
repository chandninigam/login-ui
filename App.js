import { useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  StatusBar,
  TouchableOpacity,
} from "react-native";

import { FontAwesome5 as Icon } from "@expo/vector-icons";

export default function App() {
  useEffect(() => {
    StatusBar.setBarStyle("light-content");
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome Back!</Text>
      <Text style={styles.loginText}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Email"
        textContentType="emailAddress"
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Password"
        textContentType="password"
        autoCapitalize="none"
        secureTextEntry
      />
      <TouchableOpacity>
        <Text style={styles.forgetText}>Forget Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginBtnText}>Login</Text>
      </TouchableOpacity>
      <View style={styles.socialWrapper}>
        <TouchableOpacity style={styles.icon}>
          <Icon name="google" color="orange" size={24} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon}>
          <Icon name="facebook" color="orange" size={24} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon}>
          <Icon name="twitter" color="orange" size={24} />
        </TouchableOpacity>
      </View>
      <View style={styles.signUpWrapper}>
        <Text style={styles.signUpLabel}>Don't have an account?</Text>
        <TouchableOpacity>
          <Text style={styles.signUpText}>SignUp</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
  },
  welcomeText: {
    color: "white",
    marginTop: 80,
    textAlign: "center",
    fontSize: 30,
    fontWeight: "700",
  },
  loginText: {
    marginTop: 30,
    marginHorizontal: 16,
    color: "white",
    fontWeight: "700",
    fontSize: 24,
  },
  input: {
    backgroundColor: "lightgrey",
    height: 40,
    marginTop: 20,
    marginHorizontal: 16,
    padding: 4,
    paddingHorizontal: 8,
    borderRadius: 4,
  },
  forgetText: {
    color: "orange",
    marginHorizontal: 16,
    marginTop: 14,
    textAlign: "right",
  },
  loginBtn: {
    backgroundColor: "orange",
    padding: 8,
    margin: 16,
    borderRadius: 4,
  },
  loginBtnText: {
    color: "black",
    textAlign: "center",
    fontWeight: "600",
  },
  socialWrapper: {
    marginTop: 48,
    marginHorizontal: 16,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  icon: {
    marginHorizontal: 12,
    backgroundColor: "#333",
    padding: 8,
    borderRadius: 50,
  },
  signUpWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 24,
  },
  signUpLabel: {
    color: "grey",
  },
  signUpText: {
    color: "orange",
    marginLeft: 8,
  },
});
