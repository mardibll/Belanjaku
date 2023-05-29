import React, { useEffect, useRef, useState } from "react";
import TypeIt from "typeit-react";
// const photos = [
//   {
//     image:
//       "https://i0.wp.com/blog.dealpos.com/wp-content/uploads/2022/01/tips-memulai-bisnis-minimarket.jpg?fit=5472%2C3648&ssl=1",
//   },
//   {
//     image:
//       "https://awsimages.detik.net.id/community/media/visual/2021/04/10/tak-sempat-ke-pasar-belanja-kebutuhan-ramadan-bisa-di-5-toko-online-ini-1.jpeg?w=1200",
//   },
//   {
//     image:
//       "https://asset.kompas.com/crops/F1gYYsPzcCmRMp1J8se5FOUIrQU=/0x0:0x0/1200x800/data/photo/2022/11/16/6374dd147d7ab.jpg",
//   },
//   {
//     image:
//       "https://medanheadlines.com/wp-content/uploads/2018/09/alasan-orang-masih-suka-belanja-ke-mal-meski-ada-toko-online-1.jpg",
//   },
//   {
//     image:
//       "https://img.lovepik.com/photo/20211123/medium/lovepik-young-womens-clothing-store-shopping-picture_500792730.jpg",
//   },
// ];
export default function Login() {
  const [text, setText] = useState("This will just keep on going.");
  const typeItRef = useRef(null);
  const [instance, setInstance] = useState(null);
  useEffect(() => {
    if (instance) {
      const timeout = setTimeout(() => {
        setText("");
        // instance.reset().go(); // Menghapus konten dan memulai lagi
      }, 100000);
      return () => clearTimeout(timeout);
    }
  }, [instance]);

  // const toggleFreeze = () => {
  //   if (instance.is("frozen")) {
  //     instance.unfreeze();
  //     setButtonText("Freeze");
  //     return;
  //   }

  //   instance.freeze();
  //   setButtonText("Unfreeze");
  // };
  useEffect(() => {
    const ambil = JSON.parse(localStorage.getItem("simpanAccount"));
    console.log("ini data sy ambil", ambil);
  }, []);

  const [account, setAccount] = useState({
    email: "",
    password: "",
    name: "",
    contact: "",
  });

  const handleChange = (e) => {
    setAccount({
      ...account,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission or any desired actions
    console.log(account);
    // Reset form inputs
    setAccount({
      email: "",
      password: "",
      name: "",
      contact: "",
    });
  };
  return (
    <div>
      <img
        src="https://i0.wp.com/blog.dealpos.com/wp-content/uploads/2022/01/tips-memulai-bisnis-minimarket.jpg?fit=5472%2C3648&ssl=1"
        alt="error"
        style={{ width: " 100%", height: 800 }}
      />
      {/* <button onClick={toggleFreeze}>{buttonText}</button> */}
      <div style={{ position: "absolute", top: 80, left: 50 }}>
        <TypeIt
          options={{ loop: true }}
          getAfterInit={(instance) => {
            setInstance(instance);
            return instance;
          }}
        >
          <h4 style={{ color: "white" }}>{text}</h4>
        </TypeIt>
      </div>
      {/* <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="email"
          value={account.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          value={account.password}
          onChange={handleChange}
        />
        <input
          type="text"
          name="name"
          value={account.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="contact"
          value={account.contact}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form> */}
    </div>
  );
}
