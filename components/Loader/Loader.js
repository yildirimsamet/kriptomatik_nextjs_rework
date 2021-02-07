import React from "react";
import Loading from "react-loading-components";

const Loader = () => (
  <div className="loader">
    <Loading type="tail_spin" width={75} height={75} fill="#cf7500" />
    <h2 className="loader-text">YÜKLENİYOR...</h2>
  </div>
);

export default Loader;
