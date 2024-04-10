import { createSlice } from "@reduxjs/toolkit";
import { menu_list } from "../../assets/data/index";
import { recipie_list } from "../../assets/data/index";
import { toast } from "react-toastify";

const initialState = {
  recipieList: recipie_list,
  menuList: menu_list,
  wishList: [],
};

const recipieSlice = createSlice({
  name: "recipie",
  initialState,
  reducers: {
    addToWishList: (state, action) => {
      // Check if the item is already in the wishList
      const isAlreadyInWishList = state.wishList.some(
        (item) => item.id === action.payload.id
      );
      if (isAlreadyInWishList) {
        //  toast.error("Item is already in the wishlist");
        toast.warning("This item is already in your wishlist!");
      }
      // If the item is not in the wishList, add it
      if (!isAlreadyInWishList) {
        state.wishList.push(action.payload);
        toast.success("Added to wishlist");
      }
    },
    removeFromWishList: (state, action) => {
      state.wishList = state.wishList.filter(
        (item) => item.id !== action.payload.id
      );
    },
  },
});

export const { addToWishList, removeFromWishList } = recipieSlice.actions;

export default recipieSlice.reducer;
