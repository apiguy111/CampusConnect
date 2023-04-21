import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Button,
  Alert,
} from "react-native";
import React, { useState } from "react";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import * as Yup from "yup";

const Skill = () => {
  return (
    <View>
      <ChooseSkillsScreen />
    </View>
  );
};

const skills = [
  "JavaScript",
  "React",
  "Node.js",
  "HTML",
  "React Native",
  "CSS",
  "Python",
  "Java",
  "Swift",
  "PHP",
  "Ruby",
  "C++",
  "C#",
  "Prolog",
  "Lisp",
  "Cobol",
  "Fortran",
  "Groovy",
  "Objective-C",
  "Scala",
  "Dart",
  "Perl",
  "R",
  "MATLAB",
  "Shell scripting",
  "TypeScript",
  "SQL",
  "Rust",
  "Go",
  "Kotlin",
  "Apache Cassandra",
  "Apache HBase",
  "Apache Hive",
  "Firebase Realtime Database",
  "CouchDB",
  "Couchbase",
  "Amazon DynamoDB",
  "SQLite",
  "Cassandra",
  "MongoDB",
  "PostgreSQL",
  "Oracle",
  "MySQL",
  "Artificial intelligence",
  "Machine learning",
  "Network security",
  "Team management",
  "Public speaking",
  "Writing and editing",
  "Marketing and advertising",
  "Graphic design",
  "Event planning",
  "Leadership and mentoring",
  "Sales and negotiation",
  "Time management",
  "Financial management",
  "Project management",
];

const maxSkills = 5;

const ChooseSkillsScreen = () => {
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [disableSkills, setDisableSkills] = useState(
    skills.map(() => selectedSkills.length >= maxSkills)
  );

  const handleSkillSelection = (skill, index) => {
    if (selectedSkills.includes(skill)) {
      setSelectedSkills(selectedSkills.filter((s) => s !== skill));
      setDisableSkills(disableSkills.map((d, i) => (i === index ? false : d)));
    } else {
      if (selectedSkills.length < maxSkills) {
        setSelectedSkills([...selectedSkills, skill]);
        setDisableSkills(
          disableSkills.map((d, i) => (i === index ? false : d))
        );
      } else {
        setDisableSkills(disableSkills.map((d, i) => (i === index ? true : d)));
      }
    }
  };

  const handleSaveSkills = () => {
    console.log(selectedSkills);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose your skills:</Text>
      <ScrollView style={styles.skillsContainer}>
        {skills.map((skill, index) => (
          <TouchableOpacity
            key={skill}
            style={styles.skillItem}
            onPress={() => handleSkillSelection(skill, index)}
          >
            <BouncyCheckbox
              isChecked={selectedSkills.includes(skill)}
              disableBuiltInState={true}
              fillColor="green"
              unfillColor="#FFFFFF"
              disable={disableSkills[index]}
            />
            <Text style={styles.skillLabel}>{skill}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <TouchableOpacity
        style={styles.button}
        onPress={handleSaveSkills}
        disabled={selectedSkills.length === 0}
      >
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>
      {selectedSkills.length === maxSkills && (
        <Text style={styles.maxSkillsMessage}>
          You have reached the maximum number of skills.
        </Text>
      )}
      {selectedSkills.length < maxSkills && (
        <Text style={styles.maxSkillsMessage}>
          You can select {maxSkills - selectedSkills.length} more skills.
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  skillsContainer: {
    maxHeight: 305,
    marginTop: 22,
    marginBottom: 30,
  },
  skillItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  skillLabel: {
    marginLeft: 10,
    fontSize: 16,
  },
  button: {
    backgroundColor: "#6C63FF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignSelf: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },

  maxSkillsMessage: {
    marginTop: 20,
    textAlign: "center",
    fontSize: 15,
  },
});
export default Skill;
