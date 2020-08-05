import React from 'react'
import { Text, StyleSheet } from "react-native";

import {colors, typography} from "../styles";

interface AppTextProps<T> {
  children?: any,
  style?: any, 
  numberOfLines?: any,
  // otherProps?: T[] 
  [x:string]: any;
}

const AppText: React.FC<AppTextProps<any>> = ({children, style, ...otherProps}) => {
    return (
      <Text style={[styles.text, style]} {...otherProps}>
        {children}
      </Text>
    );
}

const styles = StyleSheet.create({
  text:{
    color: colors.black,
    fontFamily: typography.FONT_FAMILY_REGULAR,
    fontSize: typography.FONT_SIZE_16,
    fontWeight: typography.FONT_WEIGHT_BOLD,
  }
});

export default AppText