import styles from "./Layout.module.css";
import Head from "next/head";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import TopRates from "../TopRates/TopRates";

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Kripto para
      olarak adlandırılan bu sanal paralar nedir, nasıl
      alınır, nasıl satılır, bitcoin ve altcoin
      nedir gibi sorulara sitemizden cevap bulabilirsiniz."
        />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
          crossOrigin="anonymous"
        ></link>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"
          integrity="sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w=="
          crossOrigin="anonymous"
        ></link>
      </Head>
      <div>
        <Navbar />
        <TopRates />

        <main>{children}</main>
      </div>
      <Footer />
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
        crossOrigin="anonymous"
      ></script>
    </div>
  );
};
export default Layout;
