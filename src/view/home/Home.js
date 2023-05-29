import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from "./home.module.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { sepatu } from "./dbColection";
import { useNavigate } from "react-router-dom";
export default function Home() {
  const navigate = useNavigate();
  const settings = {
    // dots: true,
    autoplay: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const handleClick = (product) => {
    navigate("/DetailProduct", { state: product });
  };

  return (
    <div style={{ flex: 1 }}>
      <div className={style.cardSlider}>
        <div className={style.slider}>
          <Slider {...settings}>
            <img
              className={style.image}
              src="https://lelogama.go-jek.com/post_thumbnail/General_1.jpg"
              alt="error"
            />

            <img
              className={style.image}
              src="https://img.sportstars.id//2022/11/23jRC0/master_tslE629v92_754_kredivo_diskon_500k_di_aladinmall_png.png"
              alt="error"
            />

            <img
              className={style.image}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAL0TUXVjshkURp_rwDBBZTfagHY5hW4Aehw&usqp=CAU"
              alt="error"
            />

            <img
              className={style.image}
              src="https://assets.grab.com/wp-content/uploads/sites/9/2020/07/19150912/cropped-CR-GrabMart-July-2020-MFP-Pilot-project-Generic-Blogspot-1200x630-min.png"
              alt="error"
            />

            <img
              className={style.image}
              src="https://assets.klikindomaret.com/share/HERO-BNR-KLiK-FOOD-KUPON-1-DES.jpg"
              alt="error"
            />
          </Slider>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              paddingTop: 15,
            }}
          >
            <h4>Berdasarkan pencarianmu</h4>
            <h5 style={{ paddingLeft: 10, color: "green" }}>Lihat Semua</h5>
          </div>
        </div>
      </div>
      <div className={style.cardGroup}>
        {sepatu.map((i, x) => {
          return (
            <div key={x}>
              <div className={style.card}>
                <button
                  className={style.button}
                  style={{ textAlign: "start" }}
                  onClick={() => handleClick(i)}
                >
                  <img className={style.imgCard} src={i.img} alt="error" />
                  <div className="card-body" style={{ margin: 9 }}>
                    <h6 className={style.hidden}> {i.name}</h6>
                    <h5 className="card-title">{i.harga}</h5>
                    <div style={{ paddingTop: 13 }}>
                      <i
                        className="bi bi-geo-alt-fill"
                        style={{ color: "blue" }}
                      />{" "}
                      {i.alamat}
                    </div>
                    <div>
                      <i
                        className="bi bi-star-fill"
                        style={{ color: "orange" }}
                      />{" "}
                      4.9 | Terjual 1 rb+
                    </div>
                  </div>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
