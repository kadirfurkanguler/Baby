import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { colors } from "../../helpers/colors";
import { useDispatch } from "react-redux";
import { editNames } from '../../store/nameSlice';
import style from "./style";
export default ({ item }) => {
  const dispatch = useDispatch();
  const check = () =>{
    dispatch(editNames(item))
  };
  const propTextStyle = {
    textDecorationLine: item.isCheck ? "line-through" : "none",
  };
  const propContainerStyle = {
    borderColor: item.isCheck ? colors.red : colors.green,
  };
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        check();
      }}
    >
      <View style={[style.container, propContainerStyle]}>
        <View style={style.nameContainer}>
          <Text style={[style.name, propTextStyle]}>{item.name}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
