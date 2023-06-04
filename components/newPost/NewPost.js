import { View, Text, StyleSheet, Image, Button } from "react-native";
import React, { useState } from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import { TextInput } from "react-native";
import ImagePicker from "react-native-image-picker";

const NewPost = () => {
  const schema = Yup.object().shape({
    images: Yup.array().max(2, "Maximum of 2 photos allowed").nullable(),
    post: Yup.string()
      .max(300, "Maximum of 300 characters allowed")
      .required("Post content is required"),
  });

  const [bioCharCount, setBioCharCount] = useState(0);

  const handleBioChange = (text) => {
    const newCount = text.length > 300 ? 300 : text.length;
    setBioCharCount(newCount);
  };

  const handlePostSubmit = (values) => {
    // Handle post submission logic here
    console.log(values);
  };

  const handleImagePicker = () => {
    const options = {
      mediaType: "photo",
      maxWidth: 300,
      maxHeight: 300,
      quality: 1,
      storageOptions: {
        skipBackup: true,
      },
    };

    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        console.log("Image picker canceled");
      } else if (response.error) {
        console.log("Image picker error: ", response.error);
      } else if (response.uri) {
        const { uri } = response;
        setFieldValue("images", [...values.images, uri]);
      }
    });
  };

  return (
    <View style={styles.wrapper}>
      <Formik
        initialValues={{ bio: "", images: [] }}
        onSubmit={(values) => {
          onLogin(values.bio);
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
              <View>
                <Text style={styles.label}>Post</Text>
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
                    placeholder="Write a post..."
                    autoCapitalize="words"
                    multiline={true}
                    onChangeText={(text) => {
                      handleChange("bio")(text);
                      handleBioChange(text);
                    }}
                    onBlur={handleBlur("bio")}
                    value={values.bio}
                    style={styles.bio}
                    maxLength={300}
                  />
                  <Text style={styles.bioCharCount}>{bioCharCount}/300</Text>
                </View>
              </View>
              <View style={styles.imageContainer}>
                {values.images.map((imageUri, index) => (
                  <Image
                    key={index}
                    source={{ uri: imageUri }}
                    style={styles.image}
                  />
                ))}
              </View>
              <Button title="Add Image" onPress={handleImagePicker} />
              <Button title="Submit" onPress={handleSubmit} />
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
    marginTop: 10,
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
    fontSize: 15,
    fontWeight: "400",
    opacity: 0.7,
    left: 5,
    marginBottom: 15,
    lineHeight: 19,
    letterSpacing: 0.7,
  },

  imageContainer: {
    flexDirection: "row",
    marginBottom: 10,
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 10,
  },
});

export default NewPost;
