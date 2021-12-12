import React, { useState, useEffect } from "react";
import {
  View,
  Alert,
  FlatList,
  TouchableWithoutFeedback,
  Text,
} from "react-native";
import { Button, Input, Name, Sort } from "../components";
import { useSelector, useDispatch } from "react-redux";
import style from "../components/button/style";
import strings from "../helpers/strings";
import appStyle from "../helpers/appStyle";
import { colors } from "../helpers/colors";
import { getNames, localNames } from "../store/nameSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import uuid from "react-native-uuid";

const HomeScreen = () => {
  const [name, setName] = useState("");
  const { names } = useSelector((state) => state.names);
  const [results, setResults] = useState(names);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNames());
  }, []);
  useEffect(() => {
    setResults(names);
  }, [names]);
  const add = () => {
    if (
      name.trim().split(" ").length <= 2 &&
      !/\d/.test(name) &&
      name.trim() !== ""
    ) {
      const data = {
        id: uuid.v4(),
        name: name.trim(),
        date: JSON.stringify(Date.now()),
        isCheck: false,
      };
      dispatch(localNames(data));
      setName("");
    } else if(/\d/.test(name)) {
      Alert.alert("Baby Name App", strings.justString);
    } else {
      Alert.alert("Baby Name App", strings.justString);
    }
  };
  const sortByDate = () => {
    const sortedResults = [...results].sort((a, b) => b.date - a.date);
    setResults(sortedResults);
  };
  const sortByLength = () => {
    const sortedResults = [...results].sort(
      (a, b) => b.name.length - a.name.length
    );
    setResults(sortedResults);
  };
  const sortByName = () => {
    const sortedResults = [...results].sort(function (a, b) {
      var textA = a.name.toUpperCase();
      var textB = b.name.toUpperCase();
      return textA < textB ? -1 : textA > textB ? 1 : 0;
    });
    setResults(sortedResults);
  };
  return (
    <View style={appStyle.screenContainer}>
      <View style={style.input}>
        <Input
          value={name}
          setValue={setName}
          placeholder={strings.typeBabyName}
        />
        <View style={style.btnContainer}>
          <Button
            width={"100%"}
            buttonText={strings.add}
            buttonColor={colors.primary}
            textColor={colors.white}
            buttonFunction={add}
          />
        </View>
      </View>
      <View>
        <View style={style.order}>
          <Sort buttonFunction={sortByName} buttonText={strings.name} />
          <Sort buttonFunction={sortByDate} buttonText={strings.date} />
          <Sort buttonFunction={sortByLength} buttonText={strings.length} />
        </View>
        <FlatList
          data={results}
          renderItem={({ item, index }) => <Name item={item} />}
          keyExtractor={(item, index) => index}
        />
      </View>
    </View>
  );
};

export default HomeScreen;
