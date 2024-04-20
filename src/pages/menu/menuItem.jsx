import { assets } from "../../assets/data";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { addToWishList } from "../../redux/slice/recipieSlice";
import { useSelector } from "react-redux";
import { LazyLoadImage } from "react-lazy-load-image-component";

function MenuItem({ id, name, description, image, ...props }) {
  const dispatch = useDispatch();

  const wishList = useSelector((state) => state.recipie.wishList);
  const isWishlisted = wishList.some((item) => item.id === id);

  return (
    <div className="w-full m-auto rounded-xl shadow-lg transition-all recipie-item-animation">
      {/* Recipie Item container */}
      <div className="relative overflow-hidden rounded-xl">
        <LazyLoadImage
          className="w-full rounded-xl hover:scale-110 transition-all ease-out duration-700 cursor-pointer"
          src={image}
          alt="recipie-logo"
        />
        <button
          className="absolute bottom-0 right-0 m-2 rounded-md p-2 transition-all ease-out duration-300 bg-white w-14 h-12"
          onClick={() =>
            dispatch(
              addToWishList({
                id,
                name,
                description,
                image,
              })
            )
          }
        >
          <FontAwesomeIcon
            icon={faHeart}
            className={
              isWishlisted
                ? "text-tomato w-7 h-7"
                : "text-gray-600 w-7 h-7 hover:scale-125 transition-all ease-out duration-300"
            }
          />
        </button>
      </div>
      <div className="p-5">
        <div className="flex justify-between items-center mb-3">
          <p className="text-lg font-medium">
            <Link to={`/recipie-item/${id}`} className="hover:underline">
              {name}
            </Link>
          </p>
          <img src={assets.rating_starts} alt="ratings" className="w-16" />
        </div>
        <p className="text-description-color text-base">{description}</p>
      </div>
    </div>
  );
}

export default MenuItem;
