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
    changeCount: (state, { payload }) => {
      let { id, node } = payload;
      return {
        ...state,
        meals: state.meals.map((item) => {
          if (item.id == id) {
            return {
              ...item,
              amount: item.amount + node,
            };
          }
          return item;
        }),
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
export const { addMeal, setPaymentType, clearOrder, changeCount } =
  orderSlice.actions;
export default orderSlice.reducer;
