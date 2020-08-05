import React from "react";
import { View, StyleSheet, Image } from "react-native";

import {colors, variables, typography} from '../styles';
import Text from './Text';

interface CardProps {
  title?: any,
  subTitle?: any,
  image?: any
}

const Card: React.FC<CardProps> = ({title, subTitle, image}) => {
  return (
    <View style={styles.card}>
      {/* <Image style={styles.image} source={image} /> */}
      <Image style={styles.image} source={{uri: image}} />
      <View style={styles.detailsContainer}>
        <Text style={styles.title} numberOfLines={1}>
          {title}
        </Text>
        <Text style={styles.subTitle} numberOfLines={2}>
          {subTitle}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: variables.borderRadius,
    backgroundColor: colors.white,
    marginBottom: variables.medium,
    overflow: "hidden",
  },
  detailsContainer: {
    padding: variables.medium,
  },
  image: {
    width: "100%",
    height: 200,
  },
  subTitle: {
    color: colors.dark,
    fontWeight: typography.FONT_WEIGHT_BOLD
  },
  title: {
    marginBottom: 5,
  },
});

export default Card;