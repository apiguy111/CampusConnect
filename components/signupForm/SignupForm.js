import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import { TextInput } from "react-native";
import { TouchableOpacity } from "react-native";
import { app, database } from "../../firebaseConfig";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";

const SignupForm = ({ navigation }) => {
  let auth = getAuth();
  const collectionRef = collection(database, "users");

  const handleSignup = async (name, email, phone, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      await addDoc(collectionRef, {
        name: name,
        email: email,
        phone: phone,
        uid: user.uid,
      });

      console.log("User successfully saved to database");
    } catch (error) {
      console.error("Error saving user to database", error);
    }
  };

  const signupFormSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Name must be at least 2 characters")
      .max(30)
      .required("Name is required"),
    email: Yup.string().email().required("Email is required"),
    phone: Yup.string()
      .matches(/^[0-9]+$/, "Phone number must be digits only")
      .min(10, "Phone number must be at least 10 digits")
      .max(15, "Phone number cannot be more than 15 digits")
      .required("Phone number is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm password is required"),
  });

  return (
    <View style={styles.wrapper}>
      <Formik
        initialValues={{
          name: "",
          email: "",
          phone: "",
          password: "",
          confirmPassword: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={signupFormSchema}
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
            <View style={[styles.inputField]}>
              <TextInput
                placeholderTextColor="#A7A7A7"
                placeholder="Name"
                autoCapitalize="none"
                autoFocus={true}
                onChangeText={handleChange("name")}
                onBlur={handleBlur("name")}
                value={values.name}
              />
            </View>

            <View style={[styles.inputField]}>
              <TextInput
                placeholderTextColor="#A7A7A7"
                placeholder="Email"
                autoCapitalize="none"
                keyboardType="email-address"
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
              />
            </View>

            <View style={[styles.inputField]}>
              <TextInput
                placeholderTextColor="#A7A7A7"
                placeholder="Phone number"
                autoCapitalize="none"
                keyboardType="numeric"
                onChangeText={handleChange("phone")}
                onBlur={handleBlur("phone")}
                value={values.phone}
              />
            </View>

            <View style={[styles.inputField]}>
              <TextInput
                placeholderTextColor="#A7A7A7"
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

            <View style={[styles.inputField]}>
              <TextInput
                placeholderTextColor="#A7A7A7"
                placeholder="Confirm password"
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry={true}
                textContentType="password"
                onChangeText={handleChange("confirmPassword")}
                onBlur={handleBlur("confirmPassword")}
                value={values.confirmPassword}
              />
            </View>

            <Pressable
              titleSize={20}
              style={styles.button(isValid)}
              onPress={handleSignup}
            >
              <Text style={styles.buttonText}>Sign up</Text>
            </Pressable>

            <View style={styles.underline} />
            <Text style={styles.text}>Or</Text>
            <View style={styles.secondUnderline} />

            <View style={styles.signupContainer}>
              <Text>Already have an account?</Text>
              <TouchableOpacity onPress={() => navigation.push("LogInScreen")}>
                <Text style={{ color: "#6BB0F5" }}> Log in</Text>
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
    borderRadius: 8,
    padding: 12,
    backgroundColor: "#FAFAFA",
    marginBottom: 14,
    borderWidth: 0.2,
  },

  button: (isValid) => ({
    backgroundColor: isValid ? "#0096F6" : "#9ACAF7",
    alignItems: "center",
    justifyContent: "center",
    minHeight: 42,
    borderRadius: 20,
    marginTop: 10,
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
    marginBottom: 80,
    bottom: 35,
    backgroundColor: "#979292",
    borderRadius: 10,
    height: 3,
  },

  secondUnderline: {
    position: "absolute",
    left: "53.78%",
    right: "13.21%",
    marginBottom: 80,
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
    top: 427,
    fontWeight: "700",
    fontSize: 14,
    lineHeight: 17,
    textAlign: "center",
    letterSpacing: -0.333333,
    color: "#000000",
  },

  signupContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    marginTop: 150,
  },
});

export default SignupForm;
