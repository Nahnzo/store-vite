import React from "react";
import { addItem, deleteItem } from "../../store/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import styles from "./cardItem.module.css";

const CardItem = ({ item }) => {
  const data = useSelector((state) => state.cartItems.date);

  const dispatch = useDispatch();
  return (
    <div>
      <div className={styles.card}>
        <h3>{item.title}</h3>
        <div
          className={styles.image}
          style={{ backgroundImage: `url(${item.image})` }}
        ></div>
        <h4>
          Total <span>{item.quantity}</span>
        </h4>
        <h4 style={{ fontSize: "14px", margin: "5px" }}>{item.description}</h4>
        <h4>Total price {item.totalPrice.toFixed(1)}$</h4>
        <div className={styles.containerButtons}>
          <button
            onClick={() => dispatch(addItem(item))}
            className={styles.myButtonAdd}
          >
            <AiOutlineArrowUp />
          </button>
          <button
            onClick={() => dispatch(deleteItem(item))}
            className={styles.myButtonDec}
          >
            {item.quantity === 1 ? <RxCross2 /> : <AiOutlineArrowDown />}
          </button>
        </div>
        <div className={styles.time}>
          <strong>{item.date}</strong>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
