import React from "react";
import WishlistTable from "../../components/table/wishlistTable";
import { useSelector, useDispatch } from "react-redux";
import { removeFromWishList } from "../../redux/slice/recipieSlice";

function WishList() {
  const wishList = useSelector((state) => state.recipie.wishList);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(removeFromWishList({ id }));
  };

  return (
    <div className="h-screen">
      <h1 className="text-5xl text-center py-5 font-bold">WishList</h1>
      <WishlistTable data={wishList} handleDelete={handleDelete} />
    </div>
  );
}

export default WishList;
