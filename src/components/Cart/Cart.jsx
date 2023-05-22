import React from "react";
import { BsChatRightHeart } from "react-icons/bs";

import { removeAll } from "../../store/cartSlice";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import styles from "../Header/header.module.css";
import classes from "./cart.module.css";
import CardItem from "../CardItem/CardItem";
import Footer from "../Footer/Footer";

const Cart = () => {
  const { cartItems } = useSelector((state) => state.cartItems);
  const { totalQuantity } = useSelector((state) => state.cartItems);
  const dispatch = useDispatch();

  return (
    <div>
      <div className={styles.Header}>
        <Link to="/store-vite/" style={{ fontSize: "30px" }}>
          🠔
        </Link>
        <div className={styles.favorites}>
          <Link to="/favorites">
            <BsChatRightHeart />
          </Link>
        </div>
      </div>
      <button
        style={{ display: cartItems.length === 0 ? "none" : "block" }}
        className={classes.deleteButton}
        onClick={() => dispatch(removeAll())}
      >
        Delete All({totalQuantity})
      </button>
      {cartItems.length === 0 ? (
        <h1 style={{ textAlign: "center", margin: "20px" }}> No items here</h1>
      ) : (
        <div className={styles.Container}>
          {cartItems.map((item) => (
            <CardItem item={item} key={item.id} />
          ))}
        </div>
      )}
      <div style={{ position: "fixed", bottom: "0", width: "100%" }}>
        <Footer />
      </div>
    </div>
  );
};

export default Cart;
