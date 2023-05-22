import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFromFavorites } from "../../store/favoritesSlice";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import styles from "./handleFavorite.module.css";

const HandleFavorite = ({ product }) => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.favItems.favorites);
  const isFavorite = items.some((item) => item.id === product.id);
  const buttonLabel = isFavorite ? (
    <AiFillHeart style={{ color: "red" }} />
  ) : (
    <AiOutlineHeart />
  );

  const handleClick = (product) => {
    if (isFavorite) {
      dispatch(removeFromFavorites(product.id));
    } else {
      dispatch(addFavorite(product));
    }
  };

  return (
    <button onClick={() => handleClick(product)} className={styles.container}>
      {buttonLabel}
    </button>
  );
};

export default HandleFavorite;
