import React from "react";

export default function Input({}) {

  return (
    <div>
      <div className={{}}>
        <label className={{}}>Password</label>
        <input
          type="password"
          name="password"
          value={account.password}
          onChange={handleChange}
          className="form-control"
          placeholder="Password"
        />
      </div>
    </div>
  );
}
