import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from "react-native";
import React from "react";
import { Image } from "react-native";

const Skills = () => {
  return (
    <View>
      <SkillsContainer />
      <Text style={styles.projects}>Projects</Text>
      <ProjectContainer />
      <Text style={styles.clubText}>Club’s and Societies</Text>
      <ClubContainer />
      <View style={styles.underline} />
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
      <Text style={styles.skills}>Skills</Text>
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

  return <View style={{ marginBottom: 10 }}>{renderProjects()}</View>;
};

const societies = [
  {
    id: 1,
    name: "Debate club",
    date: "Nov 2019",
    position: "Admin",
  },
  {
    id: 2,
    name: "Designing club",
    date: "Dec 2019",
    position: "Group member",
  },
];

const ClubContainer = () => {
  const renderClubs = () => {
    return societies.map((club) => (
      <TouchableOpacity
        key={club.id}
        style={{
          alignItems: "center",
          padding: 10,
          borderBottomWidth: 1,
          borderBottomColor: "#ddd",
          backgroundColor: "#fff",
        }}
        activeOpacity={1}
      >
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <Text
            style={{
              flex: 1,
              color: "#000",
              left: 5,
              fontSize: 16,
              fontWeight: "400",
              marginBottom: 2,
            }}
          >
            {club.name}
          </Text>
          <Text style={styles.position}>{club.position}</Text>
        </View>
        <Text style={styles.member}>Member since {club.date}</Text>
      </TouchableOpacity>
    ));
  };

  return <View style={{ marginBottom: 30 }}>{renderClubs()}</View>;
};

const styles = StyleSheet.create({
  skills: {
    fontSize: 18,
    fontWeight: "600",
    left: 20,
    color: "#E1D7DA",
    marginBottom: 10,
  },

  projects: {
    fontSize: 18,
    fontWeight: "600",
    left: 20,
    color: "#E1D7DA",
    marginBottom: 20,
  },

  underline: {
    backgroundColor: "#000",
    height: 1,
    marginBottom: 15,
    opacity: 0.2,
  },

  container: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginVertical: 8,
    marginBottom: 20,
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
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

  image: {
    height: 15,
    width: 15,
    opacity: 0.6,

    right: 5,
  },

  clubsContainer: {
    backgroundColor: "#fff",
    padding: 15,
    marginVertical: 8,
    marginBottom: 20,
  },

  clubText: {
    fontSize: 18,
    fontWeight: "600",
    left: 20,
    marginTop: 10,
    marginBottom: 15,
    color: "#E1D7DA",
  },

  member: {
    flex: 1,
    color: "rgba(0, 0, 0, 0.45)",
    left: 5,
    fontSize: 12,
    alignSelf: "flex-start",
    fontWeight: "500",
  },

  position: {
    fontSize: 14,
    fontWeight: "600",
    color: "rgba(0, 0, 0, 0.61)",
    right: 10,
  },
});

export default Skills;
