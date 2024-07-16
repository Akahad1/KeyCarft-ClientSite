import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialState = {
  Qurey: "",
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    // incrimentQuantity: (state, actions) => {
    //   state.quantity = state.quantity + parseInt(actions.payload);
    // },
    // decrimentQuantity: (state, actions) => {
    //   state.quantity = state.quantity - parseInt(actions.payload);
    // },
    // removeCart: (state, action: PayloadAction<string>) => {
    //   state.cart = state.cart.filter((item) => action.payload !== item._id);
    // },
    addQurey: (state, action) => {
      console.log("stateID", state.Qurey);
      state.Qurey = action.payload;
    },
  },
});
export const { addQurey } = productSlice.actions;
export default productSlice.reducer;
export const useaddQurey = (state: RootState) => state.product.Qurey;
