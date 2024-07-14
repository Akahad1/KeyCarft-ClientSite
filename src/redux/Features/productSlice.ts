import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialState = {
  quantity: 2,
};
const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    incrimentQuantity: (state, actions) => {
      state.quantity = state.quantity + parseInt(actions.payload);
    },
    decrimentQuantity: (state, actions) => {
      state.quantity = state.quantity - parseInt(actions.payload);
    },
  },
});
export const { incrimentQuantity, decrimentQuantity } = productSlice.actions;
export default productSlice.reducer;
export const useQuantity = (state: RootState) => state.product.quantity;
