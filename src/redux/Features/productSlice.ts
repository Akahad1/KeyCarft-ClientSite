import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TcartProduct } from "../../pages/Cart";

type TinitialState = {
  cart: TcartProduct[];
};
const initialState: TinitialState = {
  cart: [],
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
    removeCart: (state, action: PayloadAction<string>) => {
      state.cart = state.cart.filter((item) => action.payload !== item._id);
    },
  },
});
// export const { incrimentQuantity, decrimentQuantity } = productSlice.actions;
export default productSlice.reducer;
// export const useQuantity = (state: RootState) => state.product.quantity;
