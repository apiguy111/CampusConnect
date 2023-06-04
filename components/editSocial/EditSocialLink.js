import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import { StyleSheet } from "react-native";
import { TextInput } from "react-native";
import { Pressable } from "react-native";
import { Image } from "react-native";

const EditSocialLink = () => {
  const socialSchema = Yup.object().shape({
    instagram: Yup.string()
      .matches(/^[a-zA-Z0-9._]*$/, {
        message: "Invalid Instagram username",
        excludeEmptyString: true,
      })
      .max(30, "Username cannot exceed 30 characters")
      .nullable(),

    twitter: Yup.string()
      .matches(/^[A-Za-z0-9_]{1,15}$/, {
        message: "Please enter a valid Twitter username",
      })
      .nullable(),

    github: Yup.string()
      .nullable()
      .matches(/^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i, {
        message: "Invalid GitHub username",
      }),
  });

  return (
    <View style={styles.wrapper}>
      <Formik
        initialValues={{
          instagram: "",
          twitter: "",
          github: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={socialSchema}
        validateOnMount={true}
      >
        {({
          handleBlur,
          handleChange,
          handleSubmit,
          values,
          errors,
          isValid,
        }) => {
          return (
            <>
              <View>
                <Text style={styles.heading}>Instagram</Text>
                <View
                  style={[
                    styles.inputField,
                    { flexDirection: "row", alignItems: "center" },
                  ]}
                >
                  <Image
                    source={require("../../assets/instagram.png")}
                    style={styles.image}
                  />
                  <TextInput
                    placeholderTextColor="#A7A7A7"
                    placeholder="Enter your Instagram username"
                    autoCapitalize="none"
                    autoFocus={true}
                    onChangeText={handleChange("instagram")}
                    onBlur={handleBlur("instagram")}
                    value={values.instagram}
                    style={{ paddingLeft: 15 }}
                  />
                </View>
              </View>

              <View>
                <Text style={styles.heading}>Twitter</Text>
                <View
                  style={[
                    styles.inputField,
                    { flexDirection: "row", alignItems: "center" },
                  ]}
                >
                  <Image
                    source={require("../../assets/twitter.png")}
                    style={styles.image}
                  />
                  <TextInput
                    placeholderTextColor="#A7A7A7"
                    placeholder="Enter your Twitter username"
                    autoCapitalize="none"
                    onChangeText={handleChange("twitter")}
                    onBlur={handleBlur("twitter")}
                    value={values.twitter}
                    style={{ paddingLeft: 15 }}
                  />
                </View>
              </View>

              <View>
                <Text style={styles.heading}>GitHub</Text>
                <View
                  style={[
                    styles.inputField,
                    { flexDirection: "row", alignItems: "center" },
                  ]}
                >
                  <Image
                    source={require("../../assets/github.png")}
                    style={styles.image}
                  />
                  <TextInput
                    placeholderTextColor="#A7A7A7"
                    placeholder="Enter your Github username"
                    autoCapitalize="none"
                    onChangeText={handleChange("github")}
                    onBlur={handleBlur("github")}
                    value={values.github}
                    style={{ paddingLeft: 15 }}
                  />
                </View>
              </View>

              <TouchableOpacity activeOpacity={0.9}>
                <Pressable
                  titleSize={20}
                  style={styles.button}
                  onPress={handleSubmit}
                  disabled={!isValid}
                >
                  <Text style={styles.buttonText}>Save Changes</Text>
                </Pressable>
              </TouchableOpacity>
            </>
          );
        }}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 20,
  },

  placeholderText: {
    color: "#A7A7A7",
    fontSize: 16,
    fontWeight: "400",
  },

  inputField: {
    borderRadius: 8,
    padding: 12,
    backgroundColor: "#FAFAFA",
    marginBottom: 24,
    borderWidth: 0.2,
    width: 330,
    left: 15,
    flexDirection: "row",
  },

  button: {
    backgroundColor: "#0096F6",
    alignItems: "center",
    justifyContent: "center",
    minHeight: 42,
    borderRadius: 20,
    width: 330,
    left: 15,
    marginTop: 5,
  },

  buttonText: {
    color: "#000",
    fontWeight: "400",
    fontSize: 16,
  },

  heading: {
    left: 15,
    fontWeight: "400",
    fontSize: 14,
    letterSpacing: -0.333333,
    color: "#696767",
    marginBottom: 5,
  },

  image: {
    height: 17,
    width: 17,
    marginLeft: 5,
    opacity: 0.6,
  },
});

export default EditSocialLink;
