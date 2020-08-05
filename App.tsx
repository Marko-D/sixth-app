import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { AppLoading } from "expo";
import { useFonts } from "expo-font";
import { Ionicons } from "@expo/vector-icons";

// import { TEXT } from "./src/styles/test_components.index";
import {colors, typography} from "./src/styles";
import { Home } from "./src/screens/Home";

export default function App() {
	let [fontsLoaded] = useFonts({
		"Nunito-Regular": require("./assets/fonts/Nunito-Regular.ttf"),
		"Nunito-Bold": require("./assets/fonts/Nunito-Bold.ttf"),
		// Roboto: require("native-base/Fonts/Roboto.ttf"),
		// Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
		...Ionicons.font,
	});

	if (!fontsLoaded) {
		return <AppLoading />;
	} else {
		return (
			<Home></Home>
		);
	}
}

