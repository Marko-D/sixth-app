import React from "react";
import { View, StyleSheet, Image, TouchableHighlight } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Swipeable from "react-native-gesture-handler/Swipeable";

import Text from "./Text";
import { colors, typography, variables } from "../styles";

interface ListItemSwipeableProps {
  title?: any,
	subTitle?: any,
	image?: any,
	IconComponent?: any,
	onPress?: any,
	renderLeftActions?: any,
	renderRightActions?: any,
	onSwipeFromLeft?: any,
}

export const ListItemSwipeable: React.FC<ListItemSwipeableProps> = ({
	title,
	subTitle,
	image,
	IconComponent,
	onPress,
  renderLeftActions,
	renderRightActions,
	onSwipeFromLeft
}) => {
	return (
		<Swipeable 
			renderRightActions={renderRightActions} 
			renderLeftActions={renderLeftActions}
			onSwipeableLeftOpen={onSwipeFromLeft}
 		>
			<TouchableHighlight underlayColor={colors.light} onPress={onPress}>
				<View style={styles.container}>
					{IconComponent}
					{/* {image && <Image style={styles.image} source={image} />} */}
					{image && <Image style={styles.image} source={image} />}
					<View style={styles.detailsContainer}>
						<Text style={styles.title} numberOfLines={1}>
							{title}
						</Text>
						{subTitle && (
							<Text style={styles.subTitle} numberOfLines={2}>
								{subTitle}
							</Text>
						)}
					</View>
					<MaterialCommunityIcons
						color={colors.medium}
						name="chevron-right"
						size={25}
					/>
				</View>
			</TouchableHighlight>
		</Swipeable>
	);
};

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		flexDirection: "row",
		padding: 15,
    backgroundColor: colors.white,
	},
	detailsContainer: {
		flex: 1,
		marginLeft: variables.small,
		justifyContent: "center",
	},
	image: {
		width: 40,
		height: 40,
		borderRadius: 35,
	},
	subTitle: {
    color: colors.dark,
    fontWeight: typography.FONT_WEIGHT_BOLD,
	},
	title: {
		fontWeight: typography.FONT_WEIGHT_BOLD,
	},
});

export default ListItemSwipeable;
