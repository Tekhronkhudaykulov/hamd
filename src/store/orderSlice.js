import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  meals: [],
  paymentType: null,
  curierId: null,
};

export const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    clearOrder: () => {
      return initialState;
    },
    addMeal: (state, action) => {
      console.log("====================================");
      console.log({ action });
      console.log("====================================");
      const meals = state.meals.map((item) => {
        if (item.id == action.payload.id) {
          return {
            ...item,
            amount: item.amount + 1,
          };
        }
        return item;
      });

      if (meals.find((item) => item.id == action.payload.id) == undefined) {
        meals.push(action.payload);
      }
      return {
        ...state,
        meals: [...meals],
      };
    },

    setPaymentType: (state, paymentType) => {
      return {
        ...state,
        paymentType,
      };
    },
  },
});
export const { addMeal, setPaymentType, clearOrder } = orderSlice.actions;
export default orderSlice.reducer;
