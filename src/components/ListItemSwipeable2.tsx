import React from "react";
import {
	View,
	Text,
	StyleSheet,
	Animated,
	TouchableOpacity,
} from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { colors, typography, variables } from "../styles";

export const Separator = () => <View style={styles.separator} />;

const LeftActions = (progress, dragX) => {
	const scale = dragX.interpolate({
		inputRange: [0, 100],
		outputRange: [0, 1],
		extrapolate: "clamp",
	});
	return (
		<View style={styles.leftAction}>
			<Animated.Text style={[styles.actionText, { transform: [{ scale }] }]}>
				Add to Cart
			</Animated.Text>
		</View>
	);
};

const RightActions = ({ progress, dragX, onPress }) => {
	const scale = dragX.interpolate({
		inputRange: [-100, 0],
		outputRange: [1, 0],
		extrapolate: "clamp",
	});
	return (
		<TouchableOpacity onPress={onPress}>
			<View style={styles.rightAction}>
				<Animated.Text style={[styles.actionText, { transform: [{ scale }] }]}>
					Delete
				</Animated.Text>
			</View>
		</TouchableOpacity>
	);
};

interface ListItemSwipeable2Props {
	text: any;
	onSwipeFromLeft: any;
	onRightPress: any;
}

const ListItemSwipeable2: React.FC<ListItemSwipeable2Props> = ({
	text,
	onSwipeFromLeft,
	onRightPress,
}) => (
	<Swipeable
		renderLeftActions={LeftActions}
		onSwipeableLeftOpen={onSwipeFromLeft}
		renderRightActions={(progress, dragX) => (
			<RightActions progress={progress} dragX={dragX} onPress={onRightPress} />
		)}
	>
		<View style={styles.container}>
			<Text style={styles.text}>{text}</Text>
		</View>
	</Swipeable>
);

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.white,
		paddingHorizontal: variables.small,
		paddingVertical: variables.large,
	},
	text: {
		color: colors.black,
    fontSize: typography.FONT_SIZE_16,
    fontWeight: typography.FONT_WEIGHT_BOLD,
	},
	separator: {
		flex: 1,
		height: 1,
		backgroundColor: "#e4e4e4",
		marginLeft: 10,
	},
	leftAction: {
		backgroundColor: colors.success,
		justifyContent: "center",
		flex: 1,
	},
	rightAction: {
		backgroundColor: colors.alert,
		flex: 1,
		justifyContent: "center",
    alignItems: "center",
    width: 80,
	},
	actionText: {
		color: "#fff",
		fontWeight: typography.FONT_WEIGHT_BOLD,
		fontSize: typography.FONT_SIZE_16,
    padding: variables.medium,
	},
});

export default ListItemSwipeable2;
