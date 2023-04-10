import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>HomePage</div>
      {/* replace: true avoids an entry into the Browser - stack entry of each navigation */}
      {/* <button onClick={() => navigate("/ordersummary", { replace: true })}> */}
      <button onClick={() => navigate("/ordersummary")}>Order Summary</button>
      {/* <button onClick={() => navigate("/ordersummary")}>Order summary</button> */}
    </>
  );
};

export default HomePage;
