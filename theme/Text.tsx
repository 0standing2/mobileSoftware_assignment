import React from "react";
import type {FC, ComponentProps} from "react";
import {Text as RNText, StyleSheet} from "react-native";
import {useTheme} from "@react-navigation/native";

export type TextProps = ComponentProps<typeof RNText> & {
    fontFlag? : boolean,
    colorFlag? : boolean
};

export const Text : FC<TextProps> = ({fontFlag, colorFlag, style, ...props}) => {
    const fontFamily = fontFlag ? "NanumMyeongjo" : undefined;
    const fontColor = colorFlag ? "#293b5f" : undefined;
    return <RNText style = {[{color : fontColor, fontFamily : fontFamily, fontSize : 15}, style]} {...props}/>;
}