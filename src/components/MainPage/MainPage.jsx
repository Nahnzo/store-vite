import React, { useEffect, useState } from "react";
import Header from "../Header/Header";

import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/productsSlice";
import { addItem } from "../../store/cartSlice";

import ProductCard from "../ProductCard/ProductCard";
import styles from "./mainPage.module.css";
import Filters from "../Filters/Filters";
import HandleFavorite from "../HandleFavorite/HandleFavorite";
import Pagination from "../Pagination/Pagination";
import Footer from "../Footer/Footer";

const MainPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  const { products, isLoading } = useSelector((state) => state.getProducts);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 5;
  const lastIndex = currentPage * productsPerPage;
  const firstIndex = lastIndex - productsPerPage;
  const currentsProducts = products.slice(firstIndex, lastIndex);

  return (
    <div>
      <Header />
      <Filters setCurrentPage={setCurrentPage} />
      <div className={styles.Container}>
        {isLoading ? (
          <div className={styles.loader}></div>
        ) : (
          currentsProducts.map((item) => (
            <div key={item.id}>
              <ProductCard props={item} />
              <div className={styles.containerButtons}>
                <button
                  onClick={() => dispatch(addItem(item))}
                  className={styles.addButton}
                >
                  Add to cart
                </button>
                <HandleFavorite product={item} />
              </div>
            </div>
          ))
        )}
        <div className={styles.pagination}>
          <Pagination
            totalProducts={products.length}
            productsPerPage={productsPerPage}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MainPage;
