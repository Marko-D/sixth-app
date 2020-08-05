import React from 'react'
import { View, StyleSheet, TouchableOpacity } from "react-native";

import Icon from "./Icon";
import Text from "./Text";
import { variables } from '../styles';

interface SelectItemIconProps {
  item?: any;
  onPress?: any;
}

const SelectItemIcon: React.FC<SelectItemIconProps> = ({ item, onPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <Icon
          backgroundColor={item.backgroundColor}
          name={item.icon}
          size={80}
        />
      </TouchableOpacity>
      <Text style={styles.label}>{item.label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: variables.medium,
    paddingVertical: variables.medium,
    alignItems: "center",
    width: "33%",
  },
  label: {
    marginTop: variables.small,
    textAlign: "center",
  },
});

export default SelectItemIcon;
