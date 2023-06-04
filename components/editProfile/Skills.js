import { View, Text } from "react-native";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";
import { Image } from "react-native";
import { Linking } from "react-native";
import { Button } from "react-native-elements";

const Skills = () => {
  return (
    <View>
      <SkillsContainer />
      <View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={[styles.label, { marginBottom: 15 }]}>Projects</Text>
          <TouchableOpacity activeOpacity={0.9}>
            <Image
              source={require("../../assets/editProfile.png")}
              style={[styles.image]}
            />
          </TouchableOpacity>
        </View>
        <ProjectContainer />
        <SaveButton />
      </View>
    </View>
  );
};

const skills = [
  "JavaScript",
  "React Native",
  "CSS",
  "HTML",
  "Node.js",
  "MongoDB",
  "Firebase",
  "Express-Node",
  "Middleware",
];

const SkillsContainer = () => {
  return (
    <View>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={styles.label}>Skills</Text>
        <TouchableOpacity activeOpacity={0.9}>
          <Image
            source={require("../../assets/editProfile.png")}
            style={[styles.image]}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <View style={styles.skillContainer}>
          {skills.map((skill, index) => (
            <View key={index} style={styles.skill}>
              <Text style={styles.skillText}>{skill}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

const projects = [
  {
    id: 1,
    name: "Hotel Management Application ",
    link: "https://project1.com",
  },
  {
    id: 2,
    name: "Bank Management Application",
    link: "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=785&q=80",
  },
  { id: 3, name: "Hotel Booking Application", link: "https://project3.com" },
  { id: 4, name: "Movie Booking Application", link: "https://project4.com" },
  { id: 5, name: "Calculator", link: "https://project5.com" },
];

const ProjectContainer = () => {
  const handleProjectClick = (link) => {
    Linking.openURL(link);
  };

  const renderProjects = () => {
    return projects.map((project) => (
      <TouchableOpacity
        key={project.id}
        onPress={() => handleProjectClick(project.link)}
        style={{
          flexDirection: "row",
          alignItems: "center",
          padding: 10,
          borderBottomWidth: 1,
          borderBottomColor: "#ddd",
          backgroundColor: "#fff",
        }}
        activeOpacity={0.9}
      >
        <Text style={{ flex: 1, color: "rgba(0, 0, 0, 0.45)", left: 5 }}>
          {project.name}
        </Text>
        <TouchableOpacity>
          <Image
            source={require("../../assets/rightArrow.png")}
            style={styles.image}
          />
        </TouchableOpacity>
      </TouchableOpacity>
    ));
  };

  return <View style={{ marginBottom: 30 }}>{renderProjects()}</View>;
};

const SaveButton = () => {
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    // Perform save action here
    setSaved(true);
  };

  return (
    <View style={styles.button}>
      {saved ? (
        <Text style={{ fontWeight: "bold" }}>Saved!</Text>
      ) : (
        <Button title="Save" onPress={handleSave} />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 15,
    marginVertical: 8,
    marginBottom: 20,
    borderWidth: 0.7,
    borderColor: "#ccc",
  },

  skills: {
    fontSize: 18,
    fontWeight: "600",
    left: 20,
    color: "#E1D7DA",
    marginBottom: 10,
  },

  skillContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  skill: {
    backgroundColor: "#f5f5f5",
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 10,
    marginBottom: 5,
    marginTop: 5,
    borderWidth: 1,
    borderColor: "#D9D9D9",
    left: 10,
  },
  skillText: {
    fontSize: 14,
  },

  label: {
    fontSize: 16,
    fontWeight: "600",
    opacity: 0.7,
    left: 15,
    marginBottom: 10,
  },

  image: {
    height: 19,
    width: 19,
    opacity: 0.67,
    right: 16,
  },

  button: {
    marginBottom: 30,
    height: 37,
    width: 112,
    alignSelf: "center",
    borderRadius: 32,
  },
});

export default Skills;
