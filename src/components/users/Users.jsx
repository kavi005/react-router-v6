import React from "react";
import { Outlet, useSearchParams } from "react-router-dom";

export const Users = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <>
      <div>
        <h2>User 1</h2>
        <h2>User 2</h2>
        <h2>User 3</h2>
        <Outlet />
      </div>

      <div>
        <button onClick={() => setSearchParams({ filter: "active" })}>
          Set filter
        </button>
        <button onClick={() => setSearchParams({})}>Reset</button>
      </div>
    </>
  );
};
