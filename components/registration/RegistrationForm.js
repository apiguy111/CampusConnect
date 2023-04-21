import { View, Text, Pressable, ScrollView } from "react-native";
import React from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import { TextInput } from "react-native";
import { StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";

const RegistrationForm = () => {
  const programOptions = [
    {
      label: "Computer Science and Engineering",
      value: "Computer Science and Engineering",
    },
    { label: "Mechanical Engineering", value: "Mechanical Engineering" },
    {
      label: "Electronics and Communication Engineering",
      value: "Electronics and Communication Engineering",
    },
    { label: "Electrical Engineering", value: "Electrical Engineering" },
    { label: "Civil Engineering", value: "Civil Engineering" },
  ];

  const year = [
    {
      label: "1st Year",
      value: "1st Year",
    },
    { label: "2nd Year", value: "2nd Year" },
    {
      label: "3rd Year",
      value: "3rd Year",
    },
    { label: "4th Year", value: "4th Year" },
  ];

  const registrationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.string()
      .matches(/^\d+$/, "Phone number must be a number")
      .required("Phone number is required"),
    program: Yup.string()
      .oneOf(programOptions.map((option) => option.value))
      .required("Program is required"),
    interest: Yup.string()
      .required("Interest is required")
      .max(150, "Interest should be at most 150 characters"),
    experience: Yup.string().max(
      150,
      "Experience should be at most 150 characters"
    ),
    whyJoin: Yup.string()
      .required("Reason for joining is required")
      .max(150, "Why join should be at most 150 characters"),
  });

  return (
    <ScrollView style={styles.wrapper}>
      <Formik
        initialValues={{
          name: "",
          email: "",
          phone: "",
          program: "",
          interest: "",
          experience: "",
          whyJoin: "",
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
              <View style={[styles.inputField]}>
                <TextInput
                  placeholderTextColor="#A7A7A7"
                  placeholder="Full Name"
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
                  onChangeText={handleChange("phone")}
                  keyboardType="numeric"
                  onBlur={handleBlur("phone")}
                  value={values.phone}
                />
              </View>

              <View style={[styles.inputField, { height: 50 }]}>
                <Picker
                  selectedValue={values.program}
                  onValueChange={handleChange("program")}
                  onBlur={handleBlur("program")}
                  style={{
                    color: values.program ? "#000" : "#A7A7A7",
                    bottom: 13,
                    right: 16,
                  }}
                  prompt="Select a program"
                >
                  <Picker.Item
                    label="Select a program"
                    value={null}
                    style={{ fontSize: 14 }}
                    enabled={false}
                  />
                  {programOptions.map((option) => (
                    <Picker.Item
                      key={option.value}
                      label={option.label}
                      value={option.value}
                      style={{ fontSize: 14 }}
                    />
                  ))}
                </Picker>
              </View>

              <View style={[styles.inputField, { height: 50 }]}>
                <Picker
                  selectedValue={values.year}
                  onValueChange={handleChange("year")}
                  onBlur={handleBlur("year")}
                  style={{
                    color: values.year ? "#000" : "#A7A7A7",
                    bottom: 13,
                    right: 16,
                  }}
                  prompt="Select a year"
                >
                  <Picker.Item
                    label="Select a year"
                    value={null}
                    style={{ fontSize: 14 }}
                    enabled={false}
                  />
                  {year.map((option) => (
                    <Picker.Item
                      key={option.value}
                      label={option.label}
                      value={option.value}
                      style={{ fontSize: 14 }}
                    />
                  ))}
                </Picker>
              </View>

              <View style={[styles.inputField]}>
                <TextInput
                  placeholderTextColor="#A7A7A7"
                  placeholder="Interests"
                  autoCapitalize="none"
                  autoCorrect={false}
                  textContentType="interest"
                  onChangeText={handleChange("interest")}
                  onBlur={handleBlur("interest")}
                  value={values.interest}
                />
              </View>

              <View style={[styles.inputField]}>
                <TextInput
                  placeholderTextColor="#A7A7A7"
                  placeholder="Previous Experience"
                  autoCapitalize="none"
                  autoCorrect={false}
                  onChangeText={handleChange("experience")}
                  onBlur={handleBlur("experience")}
                  value={values.experience}
                />
              </View>

              <View style={[styles.inputField]}>
                <TextInput
                  placeholderTextColor="#A7A7A7"
                  placeholder="Why You want to join"
                  autoCapitalize="none"
                  onChangeText={handleChange("whyJoin")}
                  onBlur={handleBlur("whyJoin")}
                  value={values.whyJoin}
                />
              </View>

              <Pressable
                titleSize={20}
                style={styles.button(isValid, values.program, values.year)}
                onPress={handleSubmit}
                disabled={!isValid}
              >
                <Text
                  style={styles.buttonText(
                    isValid,
                    values.program,
                    values.year
                  )}
                >
                  Register
                </Text>
              </Pressable>
            </>
          );
        }}
      </Formik>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 40,
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
    marginBottom: 14,
    borderWidth: 0.2,
    width: 330,
    left: 15,
  },

  button: (isValid, program, year) => ({
    backgroundColor:
      isValid && program !== "" && year !== null && year !== undefined
        ? "#0096F6"
        : "#9ACAF7",
    alignItems: "center",
    justifyContent: "center",
    minHeight: 42,
    borderRadius: 20,
    width: 330,
    left: 15,
    marginTop: 5,
  }),

  buttonText: (isValid, program, year) => ({
    color:
      isValid && program !== "" && year !== null && year !== undefined
        ? "#000"
        : "#A3A3A3",
    fontWeight: "400",
    fontSize: 16,
  }),
});

export default RegistrationForm;
