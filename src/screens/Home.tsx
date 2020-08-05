import React, {useState} from "react";
import {
	View,
	StyleSheet,
	FlatList,
	ScrollView,
	RefreshControl,
} from "react-native";

import Text from "../components/Text";
import Button from "../components/Button";
import Screen from "../components/Screen";
import Card from "../components/Card";
import Swipeable from "../components/ListItemSwipeable";
import DeleteAction from "../components/ListItemDeleteAction";
import ConfirmAction from "../components/ListItemConfirmAction";
import ItemSeparator from "../components/ListItemSeparator";
import Swipeable2 from "../components/ListItemSwipeable2";
import Icon from "../components/Icon";
import TextInput from "../components/TextInput";
import Select from "../components/Select";
import { colors, variables, typography } from "../styles";
import { alert } from "../styles/colors";
import SelectItemIcon from "../components/SelectItemIcon";
import { Accordion, AccordionItem } from "../components/Accordion";

interface HomeProps {}

const menuItems = [
	{
		title: "My Listings",
		subtitle: "Settings",
		icon: {
			name: "format-list-bulleted",
			backgroundColor: colors.alert,
		},
	},
	{
		title: "My Messages",
		icon: {
			name: "email",
			backgroundColor: colors.warning,
		},
	},
];

const categories = [
  {
    backgroundColor: "#fc5c65",
    icon: "floor-lamp",
    label: "Furniture",
    value: 1,
  },
  {
    backgroundColor: "#fd9644",
    icon: "car",
    label: "Cars",
    value: 2,
  },
  {
    backgroundColor: "#fed330",
    icon: "camera",
    label: "Cameras",
    value: 3,
  },
  {
    backgroundColor: "#26de81",
    icon: "cards",
    label: "Games",
    value: 4,
  },
  {
    backgroundColor: "#2bcbba",
    icon: "shoe-heel",
    label: "Clothing",
    value: 5,
  },
  {
    backgroundColor: "#45aaf2",
    icon: "basketball",
    label: "Sports",
    value: 6,
  },
  {
    backgroundColor: "#4b7bec",
    icon: "headphones",
    label: "Movies & Music",
    value: 7,
  },
  {
    backgroundColor: "#a55eea",
    icon: "book-open-variant",
    label: "Books",
    value: 8,
  },
  {
    backgroundColor: "#778ca3",
    icon: "application",
    label: "Other",
    value: 9,
	},
	{
    backgroundColor: "#fc5c65",
    icon: "floor-lamp",
    label: "Furniture",
    value: 10,
  },
  {
    backgroundColor: "#fd9644",
    icon: "car",
    label: "Cars",
    value: 11,
  },
  {
    backgroundColor: "#fed330",
    icon: "camera",
    label: "Cameras",
    value: 12,
  },
  {
    backgroundColor: "#26de81",
    icon: "cards",
    label: "Games",
    value: 13,
  },
  {
    backgroundColor: "#2bcbba",
    icon: "shoe-heel",
    label: "Clothing",
    value: 14,
  },
  {
    backgroundColor: "#45aaf2",
    icon: "basketball",
    label: "Sports",
    value: 15,
  },
  {
    backgroundColor: "#4b7bec",
    icon: "headphones",
    label: "Movies & Music",
    value: 16,
  },
  {
    backgroundColor: "#a55eea",
    icon: "book-open-variant",
    label: "Books",
    value: 17,
  },
  {
    backgroundColor: "#778ca3",
    icon: "application",
    label: "Other",
    value: 18,
  },
];

export const Home: React.FC<HomeProps> = ({}) => {
	const [refreshing, setRefreshing] = useState(false);
	const [selectedCategory, setSelectedCategory] = useState();
	const [selectedItem, setSelectedItem] = useState();

	const wait = (timeout) => {
		return new Promise((resolve) => {
			setTimeout(resolve, timeout);
		});
	};

	const onRefresh = React.useCallback(() => {
		setRefreshing(true);
		wait(2000).then(() => setRefreshing(false));
	}, []);

	return (
		<Screen style={styles.container}>
			<ScrollView
				contentContainerStyle={[
					styles.scrollView,
					!!refreshing && styles.green,
				]}
				refreshControl={
					<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
				}
			>
				{/* {!!refreshing && <Text style={styles.textRefresh}>Loading data...</Text>} */}

				<Text style={styles.heading}>Home</Text>

				<Accordion>
					<AccordionItem title="Veeeeeeeeeryyyyyy looooong titleeeeeeeeeeee">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam eos, eius ipsam numquam, atque vero aliquid consectetur asperiores voluptate voluptatesssitatibus dicta! Sit, tempore voluptate
					</AccordionItem>
					<AccordionItem title="Title 2">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam eos, eius ipsam numquam, atque vero aliquid consectetur asperiores voluptate voluptatesssitatibus dicta! Sit, tempore voluptate Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam eos, eius ipsam numquamconsectetur adipisicing elit. Aperiam eos, eius ipsam numquam, atque vero aliquid consectetur asperiores voluptate voluptatesssitatibus dictaLorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam eos, eius ipsam numquam, atque vero aliquid consectetur asperiores voluptate voluptatesssitatibus dicta! Sit, tempore voluptate Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam eos, eius ipsam numquamconsectetur adipisicing elit. Aperiam eos, eius ipsam numquam, atque vero aliquid consectetur asperiores voluptate voluptatesssitatibus dicta! Sit, tempore voluptate Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam eos, eius ipsam numquam, atque vero aliquid consectetur asperiores voluptate voluptatesssitatibus dicta! Sit, tempore , atque vero aliquid consectetur asperiores voluptate voluptatesssitatibus! Sit, tempore voluptate Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam eos, eius ipsam numquam, atque vero aliquid consectetur asperiores voluptate voluptatesssitatibus dicta! Sit, tempore , atque vero aliquid consectetur asperiores voluptate voluptatesssitatibus dicta! Sit, tempore voluptate.
					</AccordionItem>
				</Accordion>
				<Card
					title="Title"
					subTitle="Subtitle"
					image="https://source.unsplash.com/user/erondu/1600x900"
				/>

				<View style={styles.listContainer}>
					<FlatList
						data={menuItems}
						keyExtractor={(menuItem) => menuItem.title}
						ItemSeparatorComponent={ItemSeparator}
						renderItem={({ item }) => (
							<Swipeable
								title={item.title}
								subTitle={item.subtitle}
								image={require("../../assets/images/user.png")}
								// IconComponent={
								// 	<Icon
								// 		name={item.icon.name}
								// 		backgroundColor={item.icon.backgroundColor}
								// 	/>
								// }								
								onPress={(item) => alert("Item")}
								// onSwipeFromLeft={() => alert('swiped from left!')}
								renderLeftActions={() => (
									<ConfirmAction onPress={(item) => alert("Confirm")} />
								)}
								renderRightActions={() => (
									<DeleteAction onPress={(item) => alert("Delete")} />
								)}
							/>
						)}
					/>
				</View>
				<View style={styles.listContainer}>
					<FlatList
						data={menuItems}
						keyExtractor={(menuItem) => menuItem.title}
						ItemSeparatorComponent={ItemSeparator}
						renderItem={({ item }) => (
							<Swipeable2
								text={item.title}
								onSwipeFromLeft={() => alert("swiped from left!")}
								onRightPress={() => alert(a)}
							/>
						)}
					/>
				</View>

				<Select 
					items={categories} 			
					placeholder="Select Item"
					width="50%"					
					onSelectItem={(item) => setSelectedCategory(item)}
					selectedItem={selectedCategory}
					onClear={() => setSelectedCategory(null)}					
				></Select>

				<Select 
					items={categories} 
					numberOfColumns={3}
					placeholder="Select Category"
					width="50%"
					ItemSeparator={null}
					SelectItemComponent={SelectItemIcon}
					onSelectItem={(item) => setSelectedItem(item)}
					selectedItem={selectedItem}
					onClear={() => setSelectedItem(null)}
				></Select>

				<TextInput icon="account" placeholder="User Name"/>
				<TextInput icon="email" placeholder="Email"/>


				<Button title="Login" color={"success"} />
			</ScrollView>
		</Screen>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.light,
		paddingHorizontal: variables.small,
		paddingVertical: variables.small,
	},
	heading: {
		marginBottom: variables.medium,
		fontSize: typography.FONT_SIZE_20,
	},
	listContainer: {
		borderRadius: variables.borderRadius,
		overflow: "hidden",
		marginBottom: variables.medium,
	},
	scrollView: {
		// backgroundColor: colors.warning,
	},
	red: {
	// 	backgroundColor: colors.alert,
	},
	green: {
		// backgroundColor: colors.success,
	},
	textRefresh: {
		flex: 1,
		justifyContent: 'center',
		alignSelf: 'center',
		padding: variables.small
	}
});
