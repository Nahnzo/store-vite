import React from "react";
import styles from "./header.module.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { BsChatRightHeart } from "react-icons/bs";

const Header = () => {
  const { cartItems } = useSelector((state) => state);
  return (
    <div className={styles.Header}>
      <Link to="/cart">
        <div className={styles.cart}>
          <div
            className={styles.counter}
            style={{
              display: cartItems.totalQuantity === 0 ? "none" : "block",
            }}
          >
            {cartItems.totalQuantity === 0 ? "" : cartItems.totalQuantity}
            <h4 className={styles.totalPrice}>
              {cartItems.totalPrice.toFixed(1)}$
            </h4>
          </div>
        </div>
      </Link>
      <div className={styles.favorites}>
        <Link to="/favorites">
          <BsChatRightHeart />
        </Link>
      </div>
    </div>
  );
};

export default Header;
