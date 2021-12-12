import React from "react";
import {
  View,
  Text,
  TouchableWithoutFeedback,
  ActivityIndicator,
} from "react-native";
import strings from "../../helpers/strings";
import style from "./style";
export default ({ buttonText, buttonFunction }) => {
  return (
    <TouchableWithoutFeedback onPress={buttonFunction}>
      <View>
        <Text>{strings.sort} {buttonText}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};
