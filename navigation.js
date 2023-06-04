import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import AccountCreatedSuccessfullyScreen from "./screens/AccountCreatedSuccessfullyScreen";
import ClubProfileScreen from "./screens/ClubProfileScreen";
import ContactScreen from "./screens/ContactScreen";
import EditPlaceScreen from "./screens/HomeScreen";
import EditProfile from "./screens/EditProfile";
import EditSocialLinkScreen from "./screens/EditSocialLinkScreen";
import EventMainScreen from "./screens/EventMainScreen";
import JoinClub from "./screens/JoinClub";
import LogInScreen from "./screens/LoginScreen";
import NonTechnicalClubScreen from "./screens/NonTechnicalClubScreen";
import PhoneNumberScreen from "./screens/PhoneNumberScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ProjectScreen from "./screens/ProjectScreen";
import RegistrationScreen from "./screens/RegistrationScreen";
import SearchScreen from "./screens/SearchScreen";
import SignupScreen from "./screens/SignupScreen";
import SkillScreen from "./screens/SkillScreen";
import StartingScreen from "./screens/StartingScreen";
import TechnicalClubScreen from "./screens/TechnicalClubScreen";
import UserScreen from "./screens/UserScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import AboutUsScreen from "./screens/about/AboutUsScreen";
import CommunityGuidelinesScreen from "./screens/about/CommunityGuidelinesScreen";
import ServiceScreen from "./screens/about/ServiceScreen";

const Stack = createStackNavigator();

const screenOptions = {
  headerShown: false,
};

const SignedInStack = () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName="StartingScreen"
      screenOptions={screenOptions}
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen
        name="AccountCreatedSuccessfullyScreen"
        component={AccountCreatedSuccessfullyScreen}
      />
      <Stack.Screen name="ClubProfileScreen" component={ClubProfileScreen} />
      <Stack.Screen name="ContactScreen" component={ContactScreen} />
      <Stack.Screen name="EditPlaceScreen" component={EditPlaceScreen} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen
        name="EditSocialLinkScreen"
        component={EditSocialLinkScreen}
      />
      <Stack.Screen name="EventMainScreen" component={EventMainScreen} />
      <Stack.Screen name="JoinClub" component={JoinClub} />
      <Stack.Screen name="LogInScreen" component={LogInScreen} />
      <Stack.Screen
        name="NonTechnicalClubScreen"
        component={NonTechnicalClubScreen}
      />
      <Stack.Screen name="PhoneNumberScreen" component={PhoneNumberScreen} />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      <Stack.Screen name="ProjectScreen" component={ProjectScreen} />
      <Stack.Screen name="RegistrationScreen" component={RegistrationScreen} />
      <Stack.Screen name="SearchScreen" component={SearchScreen} />
      <Stack.Screen name="SignupScreen" component={SignupScreen} />
      <Stack.Screen name="SkillScreen" component={SkillScreen} />
      <Stack.Screen name="StartingScreen" component={StartingScreen} />
      <Stack.Screen
        name="TechnicalClubScreen"
        component={TechnicalClubScreen}
      />
      <Stack.Screen name="UserScreen" component={UserScreen} />
      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      <Stack.Screen name="ServiceScreen" component={ServiceScreen} />
      <Stack.Screen
        name="CommunityGuidelinesScreen"
        component={CommunityGuidelinesScreen}
      />
      <Stack.Screen name="AboutUsScreen" component={AboutUsScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default SignedInStack;
