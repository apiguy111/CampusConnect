import { View, Text, StyleSheet } from "react-native";
import React from "react";

const AboutUs = () => {
  return (
    <View style={styles.container}>
      <BasicContent />
    </View>
  );
};

const BasicContent = () => {
  return (
    <View>
      <View>
        <Text style={styles.firstText}>
          Welcome to our community application! Our team consists of Kuwar Shiv
          Pratap Singh, Vaishnavi Dwivedi, Siddharth Gupta and Sneha Nishad, all
          of whom are fourth year computer science undergraduates. We created
          this application with the aim of providing a platform for students to
          connect with like-minded individuals and explore their interests
          through various clubs and societies.
        </Text>
      </View>
      <View style={{ marginTop: 30 }}>
        <Text style={styles.firstText}>
          Our application offers a wide range of technical and non-technical
          clubs, catering to the diverse interests of students. We understand
          the importance of extracurricular activities in shaping a student's
          overall personality and believe that our application will help
          students engage in meaningful activities beyond academics.
        </Text>
      </View>
      <View style={{ marginTop: 30 }}>
        <Text style={styles.firstText}>
          Our application has a wide scope, enabling students to join different
          clubs and societies based on their interests, including technical and
          non-technical clubs. This platform also serves as a great opportunity
          for students to network with like-minded individuals, creating
          meaningful connections that can benefit them in their future
          endeavors.
        </Text>
      </View>
      <View style={{ marginTop: 30 }}>
        <Text style={styles.firstText}>
          We understand that the university experience extends beyond academics,
          and our application is designed to foster an environment where
          students can explore their passions and hobbies. We hope that our
          application provides a valuable social experience to our users, and we
          look forward to seeing our community grow and thrive
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 55,
    left: 15,
    width: "90%",
  },

  firstText: {
    fontSize: 14,
    fontWeight: "400",
    letterSpacing: 1,
    lineHeight: 19,
  },
});

export default AboutUs;
