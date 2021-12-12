import React from "react";
import {
  View,
  Text,
  TouchableWithoutFeedback,
  ActivityIndicator,
} from "react-native";
import { colors } from "../../helpers/colors";
import style from "./style";
export default ({
  buttonText,
  buttonFunction,
  buttonColor,
  width,
  loading,
  textColor,
  radius,
}) => {
  const propStyle = {
    borderRadius: radius,
    width,
    backgroundColor: buttonColor,
  }
  return (
    <TouchableWithoutFeedback onPress={buttonFunction}>
      <View style={[style.button, propStyle]}>
        {loading ? (
          <ActivityIndicator color={colors.primary} />
        ) : (
          <Text style={[style.buttonText, { color: textColor }]}>
            {buttonText}
          </Text>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};
