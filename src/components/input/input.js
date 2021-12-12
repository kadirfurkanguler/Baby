import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import { colors } from "../../helpers/colors";
import style from "./style";
export default ({ title, value, setValue, placeholder }) => {
  const [isFocus, setIsFocus] = useState(false);
  const propStyle = {
    borderColor: isFocus ? colors.primary : colors.muted,
  };
  return (
    <View style={style.container}>
      <Text style={style.title}>{title}</Text>
      <TextInput
        style={[style.input, propStyle]}
        value={value}
        onChangeText={setValue}
        placeholderTextColor={colors.muted}
        placeholder={placeholder}
        onBlur={() => setIsFocus(false)}
        onFocus={() => setIsFocus(true)}
      />
    </View>
  );
};
