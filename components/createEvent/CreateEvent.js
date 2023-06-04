import { View, Text, ScrollView, Button, Platform } from "react-native";
import React from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import { TextInput, useState } from "react-native";
import { StyleSheet } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

const CreateEvent = () => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const [text, setText] = useState("Empty");

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "android");
    setDate(currentDate);

    let tempDate = new Date(currentDate);
    let fDate =
      tempDate.getDate.getHours() + " | Minutes: " + tempDate.getMinutes();
    let fTime =
      "Hours: " + tempDate.getHours() + " | Minutes: " + tempDate.getMinutes();
    setText(fDate + "\n" + fTime);

    console.log(fDate + " (" + fTime + ")");
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const eventSchema = Yup.object().shape({
    eventName: Yup.string().required("Event Name is required"),
    eventDate: Yup.date().required("Event Date is required"),
    eventTime: Yup.string().required("Event Time is required"),
    eventLocation: Yup.string().required("Event Location is required"),
    eventDescription: Yup.string().required("Event Description is required"),
    eventCategory: Yup.string().required("Event Category is required"),
    eventDuration: Yup.number().positive(
      "Event Duration must be a positive number"
    ),
    eventOrganizer: Yup.string().required("Event Organizer is required"),
    eventCapacity: Yup.number().positive(
      "Event Capacity must be a positive number"
    ),
    registrationDeadline: Yup.date().required(
      "Registration Deadline is required"
    ),
    eventRequirements: Yup.string(),
    eventAgenda: Yup.string(),
    contactInformation: Yup.string().required(
      "Contact Information is required"
    ),
    eventFee: Yup.number().min(0, "Event Fee must be a non-negative number"),
    resources: Yup.string(),
  });

  return (
    <ScrollView style={styles.wrapper}>
      <Formik
        initialValues={{
          eventName: "",
          eventLocation: "",
          eventDescription: "",
          eventCategory: "",
          eventOrganizer: "",
          eventCapacity: "",
          eventRequirements: "",
          eventAgenda: "",
          contactInformation: "",
          eventFee: "",
          resources: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={eventSchema}
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
                  placeholder="Event Name"
                  autoCapitalize="none"
                  autoFocus={true}
                  onChangeText={handleChange("eventName")}
                  onBlur={handleBlur("eventName")}
                  value={values.eventName}
                />
              </View>

              <View style={[styles.inputField]}>
                <TextInput
                  placeholderTextColor="#A7A7A7"
                  placeholder="Location"
                  autoCapitalize="none"
                  onChangeText={handleChange("eventLocation")}
                  onBlur={handleBlur("eventLocation")}
                  value={values.eventLocation}
                />
              </View>

              <View style={[styles.inputField]}>
                <TextInput
                  placeholderTextColor="#A7A7A7"
                  placeholder="Description"
                  autoCapitalize="none"
                  onChangeText={handleChange("eventDescription")}
                  onBlur={handleBlur("eventDescription")}
                  value={values.eventDescription}
                />
              </View>

              <View style={[styles.inputField]}>
                <TextInput
                  placeholderTextColor="#A7A7A7"
                  placeholder="category"
                  autoCapitalize="none"
                  autoCorrect={false}
                  onChangeText={handleChange("eventCategory")}
                  onBlur={handleBlur("eventCategory")}
                  value={values.eventCategory}
                />
              </View>

              <View style={[styles.inputField]}>
                <TextInput
                  placeholderTextColor="#A7A7A7"
                  placeholder="Organizer"
                  autoCapitalize="none"
                  autoCorrect={false}
                  onChangeText={handleChange("eventOrganizer")}
                  onBlur={handleBlur("eventOrganizer")}
                  value={values.eventOrganizer}
                />
              </View>

              <View style={[styles.inputField]}>
                <TextInput
                  placeholderTextColor="#A7A7A7"
                  placeholder="Capacity"
                  autoCapitalize="none"
                  keyboardType="numeric"
                  onChangeText={handleChange("eventCapacity")}
                  onBlur={handleBlur("eventCapacity")}
                  value={values.eventCapacity}
                />
              </View>

              <View style={[styles.inputField]}>
                <TextInput
                  placeholderTextColor="#A7A7A7"
                  placeholder="Requirements"
                  autoCapitalize="none"
                  onChangeText={handleChange("eventRequirements")}
                  onBlur={handleBlur("eventRequirements")}
                  value={values.eventRequirements}
                />
              </View>

              <View style={[styles.inputField]}>
                <TextInput
                  placeholderTextColor="#A7A7A7"
                  placeholder="Agenda"
                  autoCapitalize="none"
                  onChangeText={handleChange("eventAgenda")}
                  onBlur={handleBlur("eventAgenda")}
                  value={values.eventAgenda}
                />
              </View>

              <View style={[styles.inputField]}>
                <TextInput
                  placeholderTextColor="#A7A7A7"
                  placeholder="Contact Information"
                  autoCapitalize="none"
                  onChangeText={handleChange("contactInformation")}
                  onBlur={handleBlur("contactInformation")}
                  value={values.contactInformation}
                />
              </View>

              <View style={[styles.inputField]}>
                <TextInput
                  placeholderTextColor="#A7A7A7"
                  placeholder="Fee"
                  autoCapitalize="none"
                  keyboardType="numeric"
                  onChangeText={handleChange("eventFee")}
                  onBlur={handleBlur("eventFee")}
                  value={values.eventFee}
                />
              </View>

              <View style={[styles.inputField]}>
                <TextInput
                  placeholderTextColor="#A7A7A7"
                  placeholder="Resources"
                  autoCapitalize="none"
                  onChangeText={handleChange("resources")}
                  onBlur={handleBlur("resources")}
                  value={values.resources}
                />
              </View>
            </>
          );
        }}
      </Formik>

      <View>
        <Text>{text}</Text>
      </View>
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

export default CreateEvent;
