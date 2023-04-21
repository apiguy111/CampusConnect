import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import { TextInput } from "react-native";

const PhoneNumberVerificationForm = () => {
  const OtpSchema = Yup.object().shape({
    otp: Yup.string()
      .matches(/^[0-9]{4}$/, "OTP must be a four-digit number")
      .required("OTP is required"),
  });

  return (
    <View>
      <Text style={styles.text}>
        We’ve sent you a 4 digit code on your registered number
      </Text>
      <View style={styles.wrapper}>
        <Formik
          initialValues={{ otp: "" }}
          onSubmit={(values) => {
            onLogin(values.otp);
          }}
          validationSchema={OtpSchema}
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
                  placeholderTextColor="#444"
                  placeholder="Enter code here"
                  autoCapitalize="none"
                  keyboardType="number-pad"
                  textContentType="telephoneNumber"
                  autoFocus={true}
                  onChangeText={handleChange("otp")}
                  onBlur={handleBlur("otp")}
                  value={values.otp}
                />
              </View>

              <View style={styles.resend}>
                <Text style={{ color: "rgba(0, 0, 0, 0.5)" }}>Resend code</Text>
                <Text> 4:28</Text>
              </View>

              <Pressable
                titleSize={20}
                style={[styles.button(isValid), { marginTop: 30 }]}
                onPress={handleSubmit}
              >
                <Text style={styles.buttonText}>Verify</Text>
              </Pressable>
            </>
          )}
        </Formik>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    position: "absolute",
    width: 350,
    height: 32,
    left: -5,
    top: 110,
    fontWeight: "400",
    fontSize: 15.5,
    lineHeight: 19,
    textAlign: "center",
    letterSpacing: -0.333333,
    color: "#000000",
  },

  wrapper: {
    marginTop: 140,
  },

  inputField: {
    borderRadius: 12,
    padding: 12,
    backgroundColor: "#FAFAFA",
    marginBottom: 14,
    borderWidth: 0.5,
  },

  button: (isValid) => ({
    backgroundColor: isValid ? "#0096F6" : "#9ACAF7",
    alignItems: "center",
    justifyContent: "center",
    minHeight: 42,
    borderRadius: 20,
  }),

  resend: {
    alignItems: "flex-start",
    flexDirection: "row",
    left: 5,
  },
});

export default PhoneNumberVerificationForm;
