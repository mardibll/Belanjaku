import React, { useEffect, useState } from "react";

export default function Login() {
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
      <form onSubmit={handleSubmit}>
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
      </form>
    </div>
  );
}
