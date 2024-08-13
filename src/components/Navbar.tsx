"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Backdrop from "@/components/Backdrop";
import Sidebar from "@/components/Sidebar";
import "@/styles/Navbar.scss";

const Navbar: React.FC = () => {
  const [toggled, setToggled] = useState(false);
  const pathname = usePathname();

  const handleToggleSidebar = () => {
    setToggled((prev) => !prev);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="container-fluid ps-md-4">
          <Link className="navbar-brand me-4" href="/">
            <Image
              src="/logo.png"
              alt="Logo"
              width={38}
              height={40}
              className="d-inline-block align-text-top"
            />
          </Link>

          <button
            className="btn btn-menu navbar-toggler"
            type="button"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={handleToggleSidebar}
          >
            Menú
            <Image
              src="/menu.png"
              alt="menu"
              height={18}
              width={32}
              className="d-inline-block align-text-top ps-2"
            />
          </button>
          <div className="collapse navbar-collapse ms-lg-5" id="navbarNav">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link
                  className={`nav-link ${pathname === "/" ? "active" : ""}`}
                  href="/"
                >
                  Modelos
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    pathname.startsWith("/models") ? "active" : ""
                  }`}
                  href="/models/1"
                >
                  Ficha de modelos
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item btn-sidebar">
                <button className="btn btn-menu" onClick={handleToggleSidebar}>
                  Menú
                  <Image
                    src="/menu.png"
                    alt="menu"
                    height={18}
                    width={32}
                    className="d-inline-block align-text-top ps-2 ms-1"
                  />
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Sidebar toggled={toggled} onClose={() => setToggled(false)} />
      <Backdrop show={toggled} onClick={() => setToggled(false)} />
    </>
  );
};

export default Navbar;
