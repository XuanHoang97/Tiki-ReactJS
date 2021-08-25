import React from "react";
import { useSelector } from "react-redux";
import LoadingIcon from "./../../assets/img/ld1.gif";

function GlobalLoading() {
  const loading = useSelector((state) => state.ui.showLoading);
  return (
    <>
      {loading ? (
        <div className="loading">
          <img src={LoadingIcon} alt="Loading" className="icon" />
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default GlobalLoading;
