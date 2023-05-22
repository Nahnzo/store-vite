import React, { useEffect } from "react";
import styles from "./categories.module.css";
import { useDispatch } from "react-redux";
import { fetchProducts, filterByCategories } from "../../store/productsSlice";

const Categories = ({ setCurrentPage }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  const sort = (target) => {
    const inputs = document.querySelectorAll("input");
    setCurrentPage(1);
    if (target.checked) {
      for (let i = 2; i < inputs.length; i++) {
        inputs[i].disabled = true;
      }
      target.disabled = false;
      dispatch(filterByCategories(target.placeholder));
    } else {
      for (let i = 2; i < inputs.length; i++) {
        inputs[i].disabled = false;
      }

      dispatch(fetchProducts());
    }
  };

  return (
    <div className={styles.Container}>
      <h3 style={{ margin: "10px" }}>Categories</h3>
      <input
        type="checkbox"
        placeholder="men's clothing"
        onClick={(e) => {
          sort(e.target);
        }}
      />
      Men's clothing
      <input
        type="checkbox"
        placeholder="women's clothing"
        onClick={(e) => {
          sort(e.target);
        }}
      />
      Women's clothing
      <input
        type="checkbox"
        placeholder="jewelery"
        onClick={(e) => {
          sort(e.target);
        }}
      />
      Jewelery
      <input
        type="checkbox"
        placeholder="electronics"
        onClick={(e) => {
          sort(e.target);
        }}
      />
      Electronics
    </div>
  );
};

export default Categories;
