import React from "react";
import styles from "./productCard.module.css";

const ProductCard = ({ props }) => {
  return (
    <div
      className={styles.Card}
      style={{ backgroundImage: `url(${props.image})` }}
    >
      <div className={styles.title}>{props.title}</div>
      <div>
        <div className={styles.price}>{props.price}$</div>
      </div>
    </div>
  );
};

export default ProductCard;
