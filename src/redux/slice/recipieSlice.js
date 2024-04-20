import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  wishList: [],
};

const recipieSlice = createSlice({
  name: "recipie",
  initialState,
  reducers: {
    addToWishList: (state, action) => {
      // If the item is not in the wishList, add it
      state.wishList.push(action.payload);
      toast.success("Added to wishlist");
    },
    removeFromWishList: (state, action) => {
      toast.error("Removed from wishlist");
      state.wishList = state.wishList.filter(
        (item) => item.id !== action.payload.id
      );
    },
  },
});

export const { addToWishList, removeFromWishList } = recipieSlice.actions;

export default recipieSlice.reducer;
