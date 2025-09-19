import { FutsyMainSvg } from "@/assets/svgs";
import CustomButton from "@/components/general/CustomButton";
import GeneralBackground from "@/components/general/GeneralBackground";
import { router } from "expo-router";
import React from "react";
import { Text, View } from "react-native-ui-lib";

const OnboardingScreen = () => {
  const handleGetStarted = () => {
    router.push("/screens/auth/login");
  };

  return (
    <GeneralBackground>
      <View flex-5 centerH style={{ justifyContent: "flex-end" }}>
        <FutsyMainSvg />
      </View>
      <View flex-4 centerV paddingH-70>
        <View center>
          <Text h6R text center>
            Find soccer players in your area to play together
          </Text>
        </View>
        <View flex centerH gap-12 marginT-40>
          <CustomButton
            label="Login"
            loading={false}
            func={() => {
              router.push("/screens/auth/login");
            }}
            textColor="white"
            color="#206F52"
          />
          <CustomButton
            label="Sign Up"
            loading={false}
            func={() => {
              router.push("/screens/auth/signup");
            }}
            textColor="white"
            color="#206F52"
          />
        </View>
      </View>
    </GeneralBackground>
  );
};

export default OnboardingScreen;
