import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: true,
  curiers: [],
  isError: false,
  courier: null,
};

export const getCuriers = createAsyncThunk(
  "curiers/getCuriers",
  async (search, { dispatch }) => {
    try {
      const res = await axios.get(
        `https://hamd.loko.uz/api/operator/couriers-way`,
        search
      );
      return res.data.data;
    } catch (e) {
      console.log(e);
    } finally {
      dispatch(setLoading(false));
    }
  }
);

export const curierSlice = createSlice({
  name: "curiers",
  initialState,
  reducers: {
    setCuriers: (state, action) => {
      state.curiers = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    addModal: (state, action) => {
      return {
        ...state,
        courier: action.payload,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCuriers.fulfilled, (state, { payload }) => {
      state.curiers.push(...payload);
    });
  },
});

export const { setCuriers, setLoading, addModal, setCuriersId } =
  curierSlice.actions;
export default curierSlice.reducer;
