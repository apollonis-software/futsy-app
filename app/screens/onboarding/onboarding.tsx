import { FutsyMainSvg } from "@/assets/svgs";
import GeneralBackground from "@/components/general/GeneralBackground";
import { router } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const OnboardingScreen = () => {
  const handleGetStarted = () => {
    router.push("/screens/auth/login");
  };

  return (
    <GeneralBackground>
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.title}>Welcome to Futsy</Text>
          <FutsyMainSvg />
          <Text style={styles.subtitle}>
            Discover amazing features and get started with your journey
          </Text>
          <TouchableOpacity style={styles.button} onPress={handleGetStarted}>
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </View>
    </GeneralBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  content: {
    alignItems: "center",
    maxWidth: 300,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 16,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    lineHeight: 24,
    marginBottom: 40,
  },
  button: {
    backgroundColor: "#007AFF",
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 8,
    width: "100%",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
});

export default OnboardingScreen;
