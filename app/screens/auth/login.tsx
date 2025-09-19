import { FutsyHorizontalSvg } from "@/assets/svgs";
import BackButton from "@/components/general/BackButton";
import CustomButton from "@/components/general/CustomButton";
import CustomTextInput from "@/components/general/CustomTextInput";
import GeneralBackground from "@/components/general/GeneralBackground";
import {
  LoginFormValues,
  loginValidationSchema,
} from "@/validations/loginValidation";
import { router } from "expo-router";
import { Formik } from "formik";
import React from "react";
import { Alert } from "react-native";
import { Checkbox, Text, TouchableOpacity, View } from "react-native-ui-lib";

const LoginScreen = () => {
  const initialValues: LoginFormValues = {
    email: "",
    password: "",
    rememberMe: false,
  };

  const handleLogin = (values: LoginFormValues) => {
    console.log("Login values:", values);
    console.log("Remember Me:", values.rememberMe);
    Alert.alert("Success", "Login successful");
    router.replace("/screens/onboarding/onboarding");
  };

  const handleSignUp = () => {
    router.push("/screens/auth/signup");
  };

  const handleGoBack = () => {
    router.back();
  };

  return (
    <GeneralBackground>
      <BackButton onPress={handleGoBack} color="#206F52" />
      <View flex paddingH-20 centerV marginT-20>
        <View paddingH-20 flex>
          <View marginV-20>
            <FutsyHorizontalSvg />
          </View>
          <View marginT-10>
            <Formik
              initialValues={initialValues}
              validationSchema={loginValidationSchema}
              onSubmit={handleLogin}
            >
              {({
                handleChange,
                handleBlur,
                handleSubmit,
                setFieldValue,
                values,
                errors,
                touched,
                isValid,
              }) => (
                <>
                  <CustomTextInput
                    placeholder="Email"
                    value={values.email}
                    onChangeText={handleChange("email")}
                    onBlur={handleBlur("email")}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    error={
                      touched.email && errors.email ? errors.email : undefined
                    }
                    hasError={touched.email && !!errors.email}
                  />

                  <CustomTextInput
                    placeholder="Şifre"
                    value={values.password}
                    onChangeText={handleChange("password")}
                    onBlur={handleBlur("password")}
                    secureTextEntry
                    error={
                      touched.password && errors.password
                        ? errors.password
                        : undefined
                    }
                    hasError={touched.password && !!errors.password}
                  />

                  <View row spread centerV marginB-20>
                    <Checkbox
                      value={values.rememberMe}
                      onValueChange={(value) =>
                        setFieldValue("rememberMe", value)
                      }
                      label="Remember Me"
                      labelStyle={{
                        fontSize: 14,
                        fontFamily: "Inter-Regular",
                        color: "#666",
                      }}
                      color="#206F52"
                    />
                    <TouchableOpacity
                      onPress={() => {
                        Alert.alert(
                          "Info",
                          "Forgot password functionality will be implemented"
                        );
                      }}
                    >
                      <Text h8SB color="black">
                        Forgot Password?
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <View marginT-20>
                    <CustomButton
                      label="Login"
                      loading={false}
                      func={handleSubmit}
                      textColor="white"
                      color="#206F52"
                    />
                  </View>
                </>
              )}
            </Formik>
          </View>
          <View marginV-7 />
          <CustomButton
            label="Sign Up"
            loading={false}
            func={handleSignUp}
            textColor="white"
            color="#206F52"
          />
        </View>
      </View>
    </GeneralBackground>
  );
};

export default LoginScreen;
