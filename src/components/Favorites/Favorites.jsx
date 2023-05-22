import React from "react";
import styles from "./favorites.module.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Footer from "../Footer/Footer";
import Carousel from "../Swiper/Carousel";

const Favorites = () => {
  const items = useSelector((state) => state.favItems);

  return (
    <div>
      <div className={styles.Header}>
        <Link to="/store-vite/" style={{ fontSize: "30px" }}>
          🠔
        </Link>

        <Link to="/cart" style={{ fontSize: "30px" }}>
          <div className={styles.cart}></div>
        </Link>
      </div>
      <div className={styles.carousel}>
        {items.favorites.length === 0 ? (
          <h2 style={{ textAlign: "center", margin: "20px" }}>
            There's nothing here
          </h2>
        ) : (
          <Carousel items={items} />
        )}
      </div>
      <div style={{ position: "fixed", bottom: "0", width: "100%" }}>
        <Footer />
      </div>
    </div>
  );
};

export default Favorites;
