import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  Pressable,
  FlatList,
  TouchableOpacity,
  Linking,
  Alert,
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

const AddProjectSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  link: Yup.string().url().required("Required"),
});

const Project = () => {
  return (
    <View>
      <Text style={[styles.signUp, { fontSize: 20 }]}>Add project's</Text>
      <AddProject />
    </View>
  );
};

const AddProject = () => {
  const [projects, setProjects] = useState([]);

  const handleAddProject = (values, actions) => {
    const newProject = { name: values.name, link: values.link };
    setProjects([...projects, newProject]);
    actions.resetForm();
  };

  const handleDeleteProject = (index) => {
    const newProjects = [...projects];
    newProjects.splice(index, 1);
    setProjects(newProjects);
  };

  const renderProjects = ({ item, index }) => {
    const handlePress = () => {
      Linking.openURL(item.link);
    };

    const handleLongPress = () => {
      Alert.alert(
        "Delete Project",
        `Are you sure you want to delete ${item.name}?`,
        [
          { text: "Cancel", onPress: () => {}, style: "cancel" },
          {
            text: "Delete",
            onPress: () => handleDeleteProject(index),
            style: "destructive",
          },
        ]
      );
    };

    return (
      <TouchableOpacity
        onPress={handlePress}
        onLongPress={handleLongPress}
        style={styles.outputContainer}
        activeOpacity={0.8}
      >
        <Text style={styles.outputText}>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.wrapper}>
      <Formik
        initialValues={{
          name: "",
          link: "",
        }}
        onSubmit={(values, actions) => handleAddProject(values, actions)}
        validationSchema={AddProjectSchema}
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
                placeholder="Name Of Project"
                autoCapitalize="none"
                autoFocus={true}
                onChangeText={handleChange("name")}
                onBlur={handleBlur("name")}
                value={values.name}
                style={{ paddingLeft: 10 }}
              />
            </View>

            <View style={[styles.inputField, { marginTop: -5 }]}>
              <TextInput
                placeholderTextColor="#A7A7A7"
                placeholder="Project's Link"
                autoCapitalize="none"
                onChangeText={handleChange("link")}
                onBlur={handleBlur("link")}
                value={values.link}
                style={{ paddingLeft: 10 }}
              />
            </View>

            <Pressable
              titleSize={20}
              style={styles.button(isValid)}
              onPress={handleSubmit}
            >
              <Text style={styles.buttonText}>Add</Text>
            </Pressable>
          </>
        )}
      </Formik>

      <FlatList
        data={projects}
        renderItem={renderProjects}
        keyExtractor={(item, index) => index.toString()}
        style={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  signUp: {
    flexDirection: "row",
    left: 20,
    top: 12,
    fontWeight: "400",
    fontSize: 28,
    letterSpacing: -0.333333,
    color: "#000000",
  },

  wrapper: {
    marginTop: 40,
    width: "90%",
    left: 20,
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
    borderRadius: 30,
    marginBottom: 20,
  }),

  buttonText: {
    fontWeight: "600",
    color: "#fff",
    fontSize: 16,
    letterSpacing: 0.5,
  },

  list: {
    fontSize: 20,
  },

  outputContainer: {
    height: 60,
    marginTop: 5,
    backgroundColor: "#D9D9D9",
    borderRadius: 8,
  },

  outputText: {
    fontSize: 15,
    marginBottom: 10,
    left: 20,
    marginTop: 18,
    fontWeight: "500",
  },
});

export default Project;
