import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { colors } from "../styles";

interface ListItemDeleteActionProps {
	onPress?: any;
}

export const ListItemDeleteAction: React.FC<ListItemDeleteActionProps> = ({
	onPress,
}) => {
	return (
		<TouchableWithoutFeedback onPress={onPress}>
			<View style={styles.container}>
				<MaterialCommunityIcons
					name="trash-can-outline"
					size={25}
					color={colors.white}
				/>
			</View>
		</TouchableWithoutFeedback>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.alert,
		width: 70,
		justifyContent: "center",
		alignItems: "center",
	},
});

export default ListItemDeleteAction;
