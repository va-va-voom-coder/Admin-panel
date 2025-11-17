import React from "react";

export const HomePage = () => {
  return (
    <div className="card">
      <div>
        <h1>Role Base Access System </h1>
        <Link to="/Login">
          <button>Login Here</button>
        </Link>
        <Link to="/Register">
          <button>Register Here</button>
        </Link>
      </div>
    </div>
  );
};
