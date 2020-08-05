import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { colors } from "../styles";

interface ListItemConfirmActionProps {
	onPress?: any;
}

export const ListItemConfirmAction: React.FC<ListItemConfirmActionProps> = ({
	onPress,
}) => {
	return (
		<TouchableWithoutFeedback onPress={onPress}>
			<View style={styles.container}>
				<MaterialCommunityIcons
					name="check"
					size={25}
					color={colors.white}
				/>
			</View>
		</TouchableWithoutFeedback>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.success,
		width: 70,
		justifyContent: "center",
		alignItems: "center",
	},
});

export default ListItemConfirmAction;
