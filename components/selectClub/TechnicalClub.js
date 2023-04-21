import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import { Picker } from "@react-native-picker/picker";

const TechnicalClub = () => {
  const technicalClubs = [
    {
      label: "Programming Club",
      value: "Programming Club",
    },
    { label: "Robotics Club", value: "Robotics Club" },
    {
      label: "Electronics Club",
      value: "Electronics Club",
    },
    {
      label: "Artificial Intelligence Club",
      value: "Artificial Intelligence Club",
    },
    {
      label: "Cybersecurity Club",
      value: "Cybersecurity Club",
    },
    {
      label: "Web Development Club",
      value: "Web Development Club",
    },
    {
      label: "Mobile Development Club",
      value: "Mobile Development Club",
    },
    {
      label: "Networking Club",
      value: "Networking Club",
    },
  ];

  const registrationSchema = Yup.object().shape({
    club: Yup.string()
      .oneOf(technicalClubs.map((option) => option.value))
      .required("Club is required"),
  });

  return (
    <View style={styles.wrapper}>
      <Formik
        initialValues={{
          club: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={registrationSchema}
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
              <View style={[styles.inputField, { height: 50 }]}>
                <Picker
                  selectedValue={values.club}
                  onValueChange={handleChange("club")}
                  onBlur={handleBlur("club")}
                  style={{
                    color: values.club ? "#000" : "#A7A7A7",
                    bottom: 13,
                    right: 16,
                  }}
                  prompt="Select a club"
                >
                  <Picker.Item
                    label="Select a club"
                    value={null}
                    style={{ fontSize: 14 }}
                    enabled={false}
                  />
                  {technicalClubs.map((option) => (
                    <Picker.Item
                      key={option.value}
                      label={option.label}
                      value={option.value}
                      style={{ fontSize: 14 }}
                    />
                  ))}
                </Picker>
              </View>

              <Pressable
                titleSize={20}
                style={styles.button(isValid, values.club)}
                onPress={handleSubmit}
                disabled={!isValid}
              >
                <Text style={styles.buttonText(isValid, values.program)}>
                  Next
                </Text>
              </Pressable>
            </>
          );
        }}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 40,
  },

  inputField: {
    borderRadius: 8,
    padding: 12,
    backgroundColor: "#FAFAFA",
    marginBottom: 14,
    borderWidth: 0.2,
    width: 330,
    left: 15,
  },

  button: (isValid, program) => ({
    backgroundColor: isValid && program !== "" ? "#0096F6" : "#9ACAF7",
    alignItems: "center",
    justifyContent: "center",
    minHeight: 42,
    borderRadius: 20,
    width: 330,
    left: 15,
    marginTop: 5,
  }),

  buttonText: (isValid, program) => ({
    color: isValid && program !== "" ? "#000" : "#A3A3A3",
    fontWeight: "400",
    fontSize: 16,
  }),
});

export default TechnicalClub;
