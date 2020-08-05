import React from "react";
import Constants from "expo-constants";
import { StyleSheet, SafeAreaView, View } from "react-native";

interface ScreenProps {
  children?: any, 
  style?: any
}

export const Screen: React.FC<ScreenProps> = ({ children, style }) => {
	return (
		<SafeAreaView style={[styles.screen, style]}>
			<View style={[styles.view, style]}>{children}</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
  view: {
    flex: 1,
  },
});

export default Screen;
