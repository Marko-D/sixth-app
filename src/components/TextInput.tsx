import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import {colors, variables, typography} from "../styles";

interface AppTextInputProps<T>{
  icon?: any, 
  width?: any, 
  [x:string]: any;
}

const AppTextInput: React.FC<AppTextInputProps<any>> = ({icon, width = "100%", ...otherProps}) => {
  return (
    <View style={[styles.container, { width }]}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={colors.medium}
          style={styles.icon}
        />
      )}
      <TextInput
        placeholderTextColor={colors.medium}
        style={styles.text}
        {...otherProps}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: variables.borderRadius,
    flexDirection: "row",
    padding: variables.small,
    marginVertical: variables.small,
  },
  icon: {
    marginRight: variables.small,
    justifyContent: 'center',
    alignSelf: 'center'
  },
  text: {
    flex: 1,
    // height: 30,
    // backgroundColor: colors.alert,
    color: colors.black,
    fontSize: typography.FONT_SIZE_16
  }
});

export default AppTextInput;
