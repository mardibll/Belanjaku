import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import imgageOtp from "../assets/DisainOtp.png";
export default function Validasi(props) {
  const [randomNumbers, setRandomNumbers] = useState([]);
  useEffect(() => {
    const interval = setInterval(() => {
      generateRandomNumbers();
    }, 2000); // 120000 milliseconds = 2 minutes

    return () => {
      clearInterval(interval); // Cleanup interval on component unmount
    };
  }, []);
  const generateRandomNumbers = () => {
    const min = 1;
    const max = 9;
    const newRandomNumbers = [];

    for (let i = 0; i < 4; i++) {
      const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
      newRandomNumbers.push(randomNum);
    }

    setRandomNumbers(newRandomNumbers);
  };
  // console.log(props);
  const location = useLocation();
  const account = location.state;
  console.log(account);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        // alignItems: "center",
        backgroundColor: "#0aa5fd",
        flex: 1,
        // width: window.innerWidth,
        // height: window.innerHeight,
      }}
    >
      <div style={{display:'flex',alignItems:"center"}}>
        <div style={{ position: "absolute", top: 194, left: 820 }}>
          {randomNumbers.length > 0 && (
            <div style={{ display: "flex" }}>
              {randomNumbers.map((number, index) => (
                <h4 style={{ letterSpacing: 3 }} key={index}>
                  {number}
                </h4>
              ))}
            </div>
          )}
        </div>
        <img src={imgageOtp} alt="error" style={{ height: 400, width: 800 }} />
        <h5>Masukkan 4 digit Kode Otp Sesuai Angka Yg Ada Diatas </h5>
      </div>
    </div>
  );
}
