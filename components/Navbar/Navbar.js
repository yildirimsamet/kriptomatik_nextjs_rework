import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };
  const closeNav = () => {
    setClicked(false);
  };

  return (
    <div className="navbar-background">
      <nav className="NavbarItems">
        <Link href="/">
          <a onClick={closeNav} className="navbar-logo">
            <Image src="/logo.png" width={250} height={80} />
          </a>
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul className={clicked ? "nav-menu active" : "nav-menu"}>
          <li>
            <Link className="nav-links" href="/">
              <a className="nav-links" onClick={closeNav}>
                Anasayfa
              </a>
            </Link>
          </li>
          <li>
            <Link href="/haberler/page/1">
              <a onClick={closeNav} className="nav-links">
                Haberler
              </a>
            </Link>
          </li>
          <li>
            <Link href="/borsa-anlik">
              <a onClick={closeNav} className="nav-links">
                Borsa Anlık
              </a>
            </Link>
          </li>
          <li>
            <Link href="/kripto-para-nedir">
              <a onClick={closeNav} className="nav-links">
                Kripto para nedir
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
