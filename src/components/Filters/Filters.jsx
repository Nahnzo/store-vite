import React, { useEffect, useState } from "react";
import styles from "./filters.module.css";
import { fetchProducts, filteredArray } from "../../store/productsSlice";
import { useDispatch } from "react-redux";
import { VscSearch } from "react-icons/vsc";
import Categories from "../Categories/Categories";

const Filters = ({ setCurrentPage }) => {
  const [priceMin, setPriceMin] = useState(0);
  const [priceMax, setPriceMax] = useState(0);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
    setCurrentPage(1);
  }, [priceMax, priceMin]);

  return (
    <div className={styles.Container}>
      <div>
        Min
        <input
          className={styles.myInput}
          onChange={(e) => setPriceMin(Number(e.target.value))}
          placeholder="0"
        ></input>
      </div>
      <div>
        Max
        <input
          className={styles.myInput}
          onChange={(e) => setPriceMax(Number(e.target.value))}
          placeholder="1000"
        ></input>
        <button
          onClick={() => {
            dispatch(filteredArray([priceMax, priceMin]));
          }}
          disabled={priceMax === 0 || priceMin === 0 ? true : false}
        >
          <VscSearch className={styles.search} />
        </button>
      </div>
      <Categories setCurrentPage={setCurrentPage} />
    </div>
  );
};

export default Filters;
