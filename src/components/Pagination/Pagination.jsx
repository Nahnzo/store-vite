import React from "react";
import styles from "./pagination.module.css";

const Pagination = ({
  totalProducts,
  productsPerPage,
  setCurrentPage,
  currentPage,
}) => {
  let pageNumbers = [];
  for (let i = 1; i <= totalProducts / productsPerPage; i++) {
    pageNumbers.push(i);
  }
  return (
    <>
      {pageNumbers.map((item) => (
        <button
          key={item}
          onClick={() => setCurrentPage(item)}
          className={
            item === currentPage ? styles.pgnButtonCurrent : styles.pgnButton
          }
        >
          {item}
        </button>
      ))}
    </>
  );
};

export default Pagination;
