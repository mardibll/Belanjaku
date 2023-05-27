import React from "react";
import { useLocation } from "react-router-dom";
import styles from "./detail.module.css";
export default function DetailProduct(props) {
  console.log("ini data props", props);

  const jumlah = 1;
  const total = 120;
  const color = "Grey";
  const location = useLocation();
  const product = location.state;
  console.log(product);
  return (
    <div className={styles.container}>
      <div>
        <img src={product.img} style={{ height: 300, width: 300 }} alt='dm'/>
        {/* <div style={{ display: "flex", justifyContent: "space-between" }}>
          {product.lainnya.map((item, index) => {
            console.log(item);
            return (
              <div key={index}>
                <img
                  src={item}
                  alt={`Image ${index + 1}`}
                  style={{ height: 90, width: 90 }}
                />
              </div>
            );
          })}
        </div> */}
      </div>
      <div className={styles.title}>
        <h4>{product.name}</h4>
        <div style={{ paddingBottom: 15 }}>
          <h6>
            Terjual 2 rb+ .{" "}
            <i className="bi bi-star-fill" style={{ color: "orange" }} />{" "}
            4.9(938 reting) . Diskusi (150)
          </h6>
        </div>
        <h3 style={{ paddingBottom: 20 }}>{product.harga}</h3>
        <hr />
        <div style={{ display: "flex" }}>
          <h5>Pilih Warna : </h5>
          <p>{color}</p>
        </div>
      </div>
      <div className={styles.card}>
        <h5>Atur Jumlah dan Catatan</h5>
        <div className={styles.cardTitle}>
          <img src={product.img} style={{ height: 70, width: 70 }} />
          <p style={{ paddingLeft: 10 }}> Navy, 43</p>
        </div>
        <hr />
        <div style={{ display: "flex" }}>
          <div className={styles.cardItem}>
            <button type="button" className={styles.cardBtnItem}>
              <h4>-</h4>
            </button>
            <h5>{jumlah}</h5>
            <button type="button" className={styles.cardBtnItem}>
              <h4>+</h4>
            </button>
          </div>
          <div
            style={{
              alignItems: "center",
              display: "flex",
            }}
          >
            <h6 style={{ paddingLeft: 10 }}> Stok: </h6>
            <h5> {total}</h5>
          </div>
        </div>
        <p style={{ fontSize: 13 }}>Max. pembelian 61 pcs</p>
        <div style={{ display: "flex", alignItems: "center", paddingTop: 15 }}>
          <i
            className="bi bi-pencil"
            style={{ color: "green", fontSize: 13 }}
          />{" "}
          <h6 style={{ color: "green", paddingLeft: 5 }}>Tambah Catatan</h6>
        </div>
        <div className={styles.cardPrice}>
          <p>Subtotal</p>
          <h5>{product.harga}</h5>
        </div>
        <div style={{ paddingTop: 20 }}>
          <button
            type="button"
            className={styles.cardBtn}
            style={{ backgroundColor: "green" }}
          >
            <h6 style={{ color: "white" }}>+ Keranjang</h6>
          </button>
          <button type="button" className={styles.cardBtn}>
            <h6 style={{ color: "green" }}>Beli Langsung</h6>
          </button>
        </div>

        <div className={styles.cardItemMenu}>
          <button type="button" className={styles.cardMenu}>
            <i className="bi bi-chat-left-text" />{" "}
            <h6 style={{ paddingLeft: 7 }}>Chat</h6>
          </button>

          <button type="button" className={styles.cardMenu}>
            <i className="bi bi-star" />{" "}
            <h6 style={{ paddingLeft: 7 }}>Wishlist</h6>
          </button>
          <button type="button" className={styles.cardMenu}>
            <i className="bi bi-share" />{" "}
            <h6 style={{ paddingLeft: 7 }}>Share</h6>
          </button>
        </div>
      </div>
    </div>
  );
}
