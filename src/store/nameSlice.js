import { createAsyncThunk } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const localNames = createAsyncThunk("names/localNames", async (data) => {
  const names = (await AsyncStorage.getItem("@NAMES")) || "[]";
  const newNames = [...JSON.parse(names), data];
  await AsyncStorage.setItem("@NAMES", JSON.stringify(newNames));
  return newNames;
});
export const getNames = createAsyncThunk("names/getNames", async (data) => {
  const names = await AsyncStorage.getItem("@NAMES");
  return JSON.parse(names);
});
export const editNames = createAsyncThunk("names/editNames", async (data) => {
  const names = (await AsyncStorage.getItem("@NAMES")) || "[]";
  const editName = JSON.parse(names).find((i) => i.id === data.id);
  const updateName = JSON.parse(names).map((t) =>
    t.id === editName.id
      ? (t = { id: t.id, name: t.name, isCheck: !t.isCheck, date: t.date })
      : t
  );
  await AsyncStorage.setItem("@NAMES", JSON.stringify(updateName));
  return updateName;
});
import { createSlice } from "@reduxjs/toolkit";
export const names = createSlice({
  name: "names",
  initialState: {
    names: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [localNames.pending]: (state) => {
      state.isLoading = true;
    },
    [localNames.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.names = action.payload;
    },
    [localNames.rejected]: (state, action) => {
      state.error = action.error;
    },

    [getNames.pending]: (state) => {
      state.isLoading = true;
    },
    [getNames.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.names = action.payload;
    },
    [getNames.rejected]: (state, action) => {
      state.error = action.error;
    },

    [editNames.pending]: (state) => {
      state.isLoading = true;
    },
    [editNames.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.names = action.payload;
    },
    [editNames.rejected]: (state, action) => {
      state.error = action.error;
    },
  },
});
export default names.reducer;
