import React, { useState } from "react";
import {
	TouchableOpacity,
	StyleSheet,
	View,
	Modal,
	FlatList,
	TouchableHighlight,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Text from "./Text";
import Button from "./Button";
import { colors, variables, typography } from "../styles";
import ListItemSeparator from "./ListItemSeparator";

interface SelectItemProps {
	item?: any;
	onPress?: any;
	[x: string]: any;
}

const SelectItem: React.FC<SelectItemProps> = ({ item, onPress }) => {
	return (
		<TouchableHighlight underlayColor={colors.light} onPress={onPress}>
			<Text style={styles.selectItemText}>{item.label}</Text>
		</TouchableHighlight>
	);
};

interface SelectProps {
	icon?: any;
	items?: any;
	numberOfColumns?: any;
	onSelectItem?: any;
	onClear: any;
	SelectItemComponent?: any;
	ItemSeparator?: any;
	placeholder?: any;
	selectedItem?: any;
	width?: any;
	// [key: string]: any;
}

export const Select: React.FC<SelectProps> = ({
	icon,
	items,
	numberOfColumns = 1,
	onSelectItem,
	SelectItemComponent = SelectItem,
	ItemSeparator = ListItemSeparator,
	placeholder,
	selectedItem,
	width = "100%",
}) => {
	const [modalVisible, setModalVisible] = useState(false);
	const [clearSelect, setClearSelect] = useState(false);

	return (
		<>
			<TouchableOpacity onPress={() => setModalVisible(true)}>
				<View style={styles.container}>
					{icon && (
						<MaterialCommunityIcons
							name={icon}
							size={20}
							color={colors.dark}
							style={styles.icon}
						/>
					)}

					{selectedItem ? (
						<>
							<Text style={styles.text}>{selectedItem.label}</Text>
							<TouchableOpacity
								style={styles.close}
								onPress={() => onSelectItem(null)}
							>
								<MaterialCommunityIcons
									name="close-circle"
									size={20}
									color={colors.alert}
								/>
							</TouchableOpacity>
						</>
					) : (
						<Text style={styles.placeholder}>{placeholder}</Text>
					)}

					<MaterialCommunityIcons
						name="chevron-down"
						size={20}
						color={colors.dark}
					/>
				</View>
			</TouchableOpacity>
			<Modal visible={modalVisible} animationType="slide" onRequestClose={() => setModalVisible(false)}>
          <View style={styles.modalContainer}>
            <FlatList
              data={items} 
              keyExtractor={(item) => item.value.toString()}
              numColumns={numberOfColumns}
              ItemSeparatorComponent={ItemSeparator}
              renderItem={({item}) => (
                <SelectItemComponent
                  item={item}
                  onPress={() => {                 
                    setModalVisible(false)
                    onSelectItem(item);
                  }}
                />  
              )}
            />
            <Button title="Close" style={styles.modalBtn} onPress={() => setModalVisible(false)} />
          </View>
        </Modal>
			{/* <Modal
				transparent={true}
				visible={modalVisible}
				onRequestClose={() => setModalVisible(false)}
			>
				<View
					style={{
						flex: 1,
						flexDirection: "column",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<View
						style={{
              backgroundColor: 'white',
							width: 300,
							height: 500,
						}}
					>
						<FlatList
							data={items}
							keyExtractor={(item) => item.value.toString()}
							numColumns={numberOfColumns}
							ItemSeparatorComponent={ItemSeparator}
							renderItem={({ item }) => (
								<SelectItemComponent
									item={item}
									onPress={() => {
										setModalVisible(false);
										onSelectItem(item);
									}}
								/>
							)}
						/>
						<Button
							title="Close"
							style={styles.modalBtn}
							onPress={() => setModalVisible(false)}
						/>
						<View></View>
					</View>
				</View>
			</Modal> */}
		</>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.white,
		borderRadius: variables.borderRadius,
		flexDirection: "row",
		padding: 15,
		marginVertical: 10,
	},
	icon: {
		marginRight: 10,
	},
	placeholder: {
		flex: 1,
		color: colors.medium,
		fontFamily: typography.FONT_FAMILY_REGULAR,
		fontSize: typography.FONT_SIZE_16,
		fontWeight: typography.FONT_WEIGHT_REGULAR,
	},
	selectItemText: {
		flex: 1,
		padding: variables.small,
		color: colors.black,
		fontFamily: typography.FONT_FAMILY_REGULAR,
		fontSize: typography.FONT_SIZE_16,
		fontWeight: typography.FONT_WEIGHT_BOLD,
	},
	text: {
		flex: 1,
		color: colors.black,
		fontFamily: typography.FONT_FAMILY_REGULAR,
		fontSize: typography.FONT_SIZE_16,
		fontWeight: typography.FONT_WEIGHT_BOLD,
	},
	modalBtn: {
		marginBottom: 0,
	},
	modalContainer: {
		flex: 1,
		padding: variables.medium,
	},
	close: {
		marginRight: variables.small,
		zIndex: 1000,
	},
});

export default Select;
