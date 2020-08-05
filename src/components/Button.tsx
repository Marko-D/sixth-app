import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from "react-native";

import { colors, typography, variables } from '../styles'

interface AppButtonProps {
  title?: string, 
  onPress?: any, 
  color?: string,
  style?: any
}

 const AppButton: React.FC<AppButtonProps> = ({title, onPress, color = "primary", style}) => {
  return (
    <TouchableOpacity
      style={[styles.button, style,{ backgroundColor: colors[color] }]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: variables.borderRadius,
    justifyContent: "center",
    alignItems: "center",
    padding: variables.small,
    width: "100%",
    marginVertical: variables.small,
  },
  text: {
    color: colors.white,
    textTransform: typography.UPPERCASE,
    fontFamily: typography.FONT_FAMILY_REGULAR,
    fontSize: typography.FONT_SIZE_16,
    fontWeight: typography.FONT_WEIGHT_BOLD,
  },
});

export default AppButton;