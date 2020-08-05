import { Platform } from "react-native";
import { scaleFont } from "./mixins";

// FONT FAMILY
// export const FONT_FAMILY_REGULAR = 'Nunito-Regular';
// export const FONT_FAMILY_BOLD = 'Nunito-Bold';
export const FONT_FAMILY_REGULAR =	Platform.OS === "android" ? "Nunito-Regular" : "Avenir";
export const FONT_FAMILY_BOLD = Platform.OS === "android" ? "Nunito-Bold" : "Avenir Black";

// FONT WEIGHT
export const FONT_WEIGHT_REGULAR = '400';
export const FONT_WEIGHT_BOLD = '700';

// FONT SIZE
export const FONT_SIZE_20 = scaleFont(20);
export const FONT_SIZE_18 = scaleFont(18);
export const FONT_SIZE_16 = scaleFont(16);
export const FONT_SIZE_14 = scaleFont(14);
export const FONT_SIZE_12 = scaleFont(12);

// LINE HEIGHT
export const LINE_HEIGHT_24 = scaleFont(24);
export const LINE_HEIGHT_20 = scaleFont(20);
export const LINE_HEIGHT_16 = scaleFont(16);

// TEXT TRANSFORM
export const UPPERCASE = 'uppercase';

// FONT STYLE
export const FONT_REGULAR = {
	fontFamily: FONT_FAMILY_REGULAR,
	fontWeight: FONT_WEIGHT_REGULAR,
};

export const FONT_BOLD = {
	fontFamily: FONT_FAMILY_BOLD,
	fontWeight: FONT_WEIGHT_BOLD,
};

// export default {
// 	FONT_REGULAR: FONT_REGULAR,
// 	FONT_BOLD: FONT_BOLD,
// 	FONT_FAMILY_REGULAR: FONT_FAMILY_REGULAR,
// 	FONT_FAMILY_BOLD: FONT_FAMILY_BOLD,
// 	FONT_WEIGHT_REGULAR: FONT_WEIGHT_REGULAR,
// 	FONT_WEIGHT_BOLD: FONT_WEIGHT_BOLD,
// 	FONT_SIZE_16: FONT_SIZE_16,
// 	FONT_SIZE_14: FONT_SIZE_14,
// 	FONT_SIZE_12: FONT_SIZE_12,
// 	LINE_HEIGHT_24: LINE_HEIGHT_24,
// 	LINE_HEIGHT_20: LINE_HEIGHT_20,
// 	LINE_HEIGHT_16: LINE_HEIGHT_16,
// };
