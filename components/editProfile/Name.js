import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import { TextInput } from "react-native";
import Social from "./Social";

const Name = () => {
  return (
    <View>
      <Bio />
      <Social />
    </View>
  );
};

const Bio = () => {
  const schema = Yup.object().shape({
    name: Yup.string()
      .trim()
      .required("Name is required")
      .min(2, "Name must be at least 2 characters")
      .max(30, "Name must be at most 30 characters")
      .matches(/^[A-Za-z\s]+$/, "Name must contain only letters and spaces"),
    bio: Yup.string()
      .min(2, "Bio must be at least 10 characters")
      .max(100, "Bio must be less than 100 characters")
      .required("Bio is required"),
  });

  const [bioCharCount, setBioCharCount] = useState(0);

  const handleBioChange = (text) => {
    const newCount = text.length > 100 ? 100 : text.length;
    setBioCharCount(newCount);
  };

  return (
    <View style={styles.wrapper}>
      <Formik
        initialValues={{ name: "", bio: "" }}
        onSubmit={(values) => {
          onLogin(values.name, values.bio);
        }}
        validationSchema={schema}
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
            <View>
              <Text style={styles.label}>Name</Text>
              <View
                style={[
                  styles.inputField,
                  {
                    borderColor:
                      values.name &&
                      (values.name.length < 2 || values.name.length > 30)
                        ? "red"
                        : "#ccc",
                  },
                ]}
              >
                <TextInput
                  placeholderTextColor="#A7A7A7"
                  placeholder="Enter your name"
                  autoCapitalize="words"
                  onChangeText={handleChange("name")}
                  onBlur={handleBlur("name")}
                  value={values.name}
                />
              </View>
            </View>
            <View>
              <Text style={styles.label}>Bio</Text>
              <View
                style={[
                  styles.inputField,
                  {
                    height: 118,
                    borderColor: "#ccc",
                  },
                  styles.passwordWrapper,
                ]}
              >
                <TextInput
                  placeholderTextColor="#A7A7A7"
                  placeholder="Write something about yourself..."
                  autoCapitalize="words"
                  multiline={true}
                  onChangeText={(text) => {
                    handleChange("bio")(text);
                    handleBioChange(text);
                  }}
                  onBlur={handleBlur("bio")}
                  value={values.bio}
                  style={styles.bio}
                  maxLength={100}
                />
                <Text style={styles.bioCharCount}>{bioCharCount}/100</Text>
              </View>
            </View>
          </>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  inputField: {
    borderRadius: 12,
    padding: 12,
    backgroundColor: "#FAFAFA",
    marginBottom: 10,
    borderWidth: 1,
    width: "93%",
    left: 15,
  },

  wrapper: {
    marginTop: 20,
  },

  passwordWrapper: {
    marginTop: 6,
    marginBottom: 20,
  },

  label: {
    fontSize: 16,
    fontWeight: "600",
    opacity: 0.7,
    left: 15,
    marginBottom: 5,
  },

  bioCharCount: {
    position: "absolute",
    bottom: 7,
    right: 10,
    color: "#A7A7A7",
    fontSize: 12,
  },

  bio: {
    fontSize: 14,
    fontWeight: "400",
    opacity: 0.7,
    left: 5,
    marginBottom: 15,
    lineHeight: 19,
    letterSpacing: 0.7,
  },
});

export default Name;
