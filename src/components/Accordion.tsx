import React, { useState, useRef } from "react";
import {
	Animated,
	StyleSheet,
	View,
	TouchableOpacity,
	ScrollView,
  Easing,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { colors, variables, typography } from "../styles";
import Text from "./Text";
import Separator from "./ListItemSeparator";

interface AccordionProps {}

const AccordionItem = ({ children, title }) => {
  const defaultNumOfLines = 0;
	const [toggle, setToggle] = useState(false);
  const [numOfLines, setNumOfLines] = useState(defaultNumOfLines);
	const [accordionItemNumOfLines, setAccordionItemNumOfLines] = useState(0);

	const switchToggle = () => setToggle(!toggle);
	const fadeAnim = useRef(new Animated.Value(0)).current;
  const spinValue = new Animated.Value(0)
  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg']
  })

  Animated.timing(spinValue,{
      toValue: !toggle ? 0 : 1,
      duration: 300,
      easing: Easing.ease,
      useNativeDriver: true  // To make use of native driver for performance
    }
  ).start()

	const toggleFade = () => {
		let lines = !!toggle ? defaultNumOfLines : +accordionItemNumOfLines;
		Animated.timing(fadeAnim, {
			toValue: !toggle ? 130 : 0,
			duration: 300,
			useNativeDriver: false,
    }).start();
    

		switchToggle();
		setNumOfLines(lines);
	};

	// const getDimensions = (layout) => {
	//   const {x, y, width, height} = layout;
	//   console.warn(x);
	//   console.warn(y);
	//   console.warn(width);
	//   console.warn(height);
	//   setAccordionItemDimensions(layout)
	// }

	return (
		// Bind opacity to animated value
		<>
			<View style={styles.accordionItem}>
				<TouchableOpacity onPress={toggleFade}>
					<View style={styles.accordionItemHeader}>
						<Text style={styles.accordionItemHeaderText} numberOfLines={1} ellipsizeMode="tail">
							{title}
						</Text>
            <Animated.View style={{transform: [{rotate: spin}] }}>
              <MaterialCommunityIcons                
                name="chevron-down"
                size={20}
                color={colors.dark}
              />
              </Animated.View>
					</View>
				</TouchableOpacity>
				<Separator />
				<Animated.View style={[styles.accordionItem, { height: fadeAnim }]}>
					{/* onLayout={(event) => { getDimensions(event.nativeEvent.layout) }} */}
					<View style={styles.accordionItemBody}>
						<ScrollView
							contentContainerStyle={{ flexGrow: 1 }}
							nestedScrollEnabled
						>
							<Text
								style={styles.accordionItemBodyText}
								numberOfLines={numOfLines}
								ellipsizeMode="tail"
								onTextLayout={(event) =>
									setAccordionItemNumOfLines(event.nativeEvent.lines.length)
								}
							>
								{children}
							</Text>
						</ScrollView>
					</View>
				</Animated.View>
			</View>
			<Separator />
		</>
	);
};

const Accordion: React.FC<AccordionProps> = ({ children }) => {
	return (
		<>
			<View style={styles.accordion}>{children}</View>
		</>
	);
};

const styles = StyleSheet.create({
	accordion: {
		flex: 1,
		marginBottom: variables.medium,
		overflow: "hidden",
		borderRadius: variables.borderRadius,
	},
	accordionItem: {
		flex: 1,
		backgroundColor: colors.white,
		// minHeight: 120,
		minHeight: 0,
		overflow: "hidden",
	},
	accordionItemHeader: {
		flex: 1,
		justifyContent: "center",
		padding: variables.medium,
    backgroundColor: colors.white,
    flexDirection: "row",
  },
  accordionItemHeaderText: {
		flex: 1,
	},
	accordionItemBody: {
		padding: variables.medium,
	},
	accordionItemBodyText: {
		fontFamily: typography.FONT_FAMILY_REGULAR,
		fontWeight: typography.FONT_WEIGHT_REGULAR,
		color: colors.dark,
	},
});

export { Accordion, AccordionItem };
