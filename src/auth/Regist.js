import React, { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import styles from "./StyleRegist.module.css";
import { useNavigate } from "react-router-dom";
export default function Regist() {
  const navigate = useNavigate();
  const [account, setAccount] = useState({
    email: "",
    password: "",
    name: "",
    contact: "",
  });
  const [errors, seterrors] = useState({});

  const handleChange = (e) => {
    seterrors("");
    setAccount({
      ...account,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setAccount({
      email: "",
      password: "",
      name: "",
      contact: "",
    });

    if (account.email === "") {
      alert("Please Input Your email!!!");
      seterrors({...errors,email:"Please Input Your email!!!"});
    } else if (account.password === "") {
      alert("Please Input Your password!!!");
      seterrors({...errors,password:"Please Input Your email!!!"});
    } else if (account.name === "") {
      alert("Please Input Your Name!!!");
      seterrors({...errors,name:"Please Input Your email!!!"});
    } else if (account.contact === "") {
      alert("Please Input Your Phone!!!");
      seterrors({...errors,contact:"Please Input Your email!!!"});
    } else {
      await localStorage.setItem("simpanAccount", JSON.stringify(account));
      console.log(account);
      navigate("/Validasi", { state: account });
    }
  };
  // useEffect(() => {

  // console.log(account);
  // }, [])

  return (
    <div className={styles.container}>
      <img
        src="https://img.lovepik.com/photo/45010/5619.jpg_wh860.jpg"
        alt="error"
        style={{ width: window.innerWidth, height: window.innerHeight }}
      />

      <div className={styles.formRegist}>
        <div
          style={{
            width: 300,
          }}
        >
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ paddingBottom: 20 }}>
              <button
                style={{ position: "absolute", top: 110, right: 123 }}
                type="button"
                className="btn btn-link"
              >
                <i className="bi bi-plus-circle-fill"></i>
              </button>
              <img
                src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                alt="error"
                className={styles.userProfile}
              />
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label className={styles.label}>Email</label>

              <input
                type="text"
                name="email"
                value={account.email}
                onChange={handleChange}
                className="form-control"
                placeholder="randisimp@gmail.com"
              />
              {errors.email && <div style={{ color: "red" }}>{errors.email}</div>}
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>Password</label>
              <input
                type="password"
                name="password"
                value={account.password}
                onChange={handleChange}
                className="form-control"
                placeholder="Password"
              />
              {errors.password && <div style={{ color: "red" }}>{errors.password}</div>}
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>Nama Lengkap</label>

              <input
                type="text"
                name="name"
                value={account.name}
                onChange={handleChange}
                className="form-control"
                placeholder="Nama Lengkap"
              />
              {errors.name && <div style={{ color: "red" }}>{errors.name}</div>}
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>No. Telfon</label>

              <input
                type="number"
                name="contact"
                value={account.contact}
                onChange={handleChange}
                className="form-control"
                placeholder="0812xxxx"
              />
              {errors.contact && <div style={{ color: "red" }}>{errors.contact}</div>}
            </div>

            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label" for="flexCheckDefault">
                <p className={styles.label}> remember me</p>
              </label>
            </div>
            <button
              style={{ width: "100%" }}
              type="submit"
              className="btn btn-primary"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
