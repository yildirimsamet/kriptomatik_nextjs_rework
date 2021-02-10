import { useEffect } from "react";

import Router from "next/router";
import Loader from "../components/Loader/Loader";
const notFound = () => {
  useEffect(() => {
    setTimeout(() => {
      Router.push("/");
    }, 1000);
  }, []);
  return <Loader text="Sayfa bulunamadı. Anasayfaya yönlendiriliyorsunuz." />;
};
export default notFound;
