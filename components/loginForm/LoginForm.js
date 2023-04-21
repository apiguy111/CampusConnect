import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import React from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import { TextInput } from "react-native";
import Validator from "email-validator";
import { TouchableOpacity } from "react-native";

const LoginForm = () => {
  const LoginFormSchema = Yup.object().shape({
    email: Yup.string().email().required("An email is required"),
    password: Yup.string()
      .required()
      .min(8, "Your password has to have at least 8 characters"),
  });

  return (
    <View style={styles.wrapper}>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => {
          onLogin(values.email, values.password);
        }}
        validationSchema={LoginFormSchema}
        validateOnMount={true}
      >
        {({
          handleBlur,
          handleChange,
          handleSubmit,
          values,
          errors,
          isValid,
        }) => (
          <>
            <View
              style={[
                styles.inputField,
                {
                  borderColor:
                    values.email.length < 1 || Validator.validate(values.email)
                      ? "#ccc"
                      : "red",
                },
              ]}
            >
              <TextInput
                placeholderTextColor="#444"
                placeholder="Phone number, username or email"
                autoCapitalize="none"
                keyboardType="email-address"
                textContentType="emailAddress"
                autoFocus={true}
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
              />
            </View>

            <View
              style={[
                styles.inputField,
                {
                  borderColor:
                    1 > values.password.length || values.password.length >= 8
                      ? "#ccc"
                      : "red",
                },
                styles.passwordWrapper,
              ]}
            >
              <TextInput
                placeholderTextColor="#444"
                placeholder="Password"
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry={true}
                textContentType="password"
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
              />
            </View>
            <View style={{ alignItems: "flex-end", marginBottom: 30 }}>
              <Text style={{ color: "#6BB0F5" }}>Forgot password</Text>
            </View>
            <Pressable
              titleSize={20}
              style={styles.button(isValid)}
              onPress={handleSubmit}
            >
              <Text style={styles.buttonText}>Log In</Text>
            </Pressable>

            <View style={styles.underline} />
            <Text style={styles.text}>Or</Text>
            <View style={styles.secondUnderline} />
            <View style={styles.container}>
              <View style={styles.socialIcons}>
                <TouchableOpacity>
                  <Image
                    source={require("../../assets/google.png")}
                    style={styles.icon}
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image
                    source={require("../../assets/facebook.png")}
                    style={[styles.icon, { borderRadius: 20 }]}
                  />
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.signupContainer}>
              <Text>Don't have an account?</Text>
              <TouchableOpacity onPress={() => navigation.push("SignupScreen")}>
                <Text style={{ color: "#6BB0F5" }}> Sign up</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 90,
  },

  inputField: {
    borderRadius: 12,
    padding: 12,
    backgroundColor: "#FAFAFA",
    marginBottom: 10,
    borderWidth: 1,
  },

  passwordWrapper: {
    marginTop: 6,
  },

  button: (isValid) => ({
    backgroundColor: isValid ? "#0096F6" : "#9ACAF7",
    alignItems: "center",
    justifyContent: "center",
    minHeight: 42,
    borderRadius: 20,
  }),

  buttonText: {
    fontWeight: "600",
    color: "#fff",
    fontSize: 20,
  },

  underline: {
    position: "absolute",
    left: "13.21%",
    right: "53.78%",
    top: 280,
    bottom: 35,
    backgroundColor: "#979292",
    borderRadius: 10,
    height: 3,
  },

  secondUnderline: {
    position: "absolute",
    left: "53.78%",
    right: "13.21%",
    top: 280,
    bottom: 35,
    backgroundColor: "#979292",
    borderRadius: 10,
    height: 3,
  },

  text: {
    position: "absolute",
    width: 17,
    height: 17,
    left: 159.32,
    top: 275,
    fontWeight: "700",
    fontSize: 14,
    lineHeight: 17,
    textAlign: "center",
    letterSpacing: -0.333333,
    color: "#000000",
  },

  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  socialIcons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "50%",
    marginTop: 240,
    left: 11,
  },
  icon: {
    width: 40,
    height: 40,
    marginRight: 20,
  },

  signupContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    marginTop: 250,
  },
});

export default LoginForm;
