"use client";

import Image from "next/image";
import Link from "next/link";
import "@/styles/Sidebar.scss";

const Sidebar: React.FC<{ toggled: boolean; onClose: () => void }> = ({
  toggled,
  onClose,
}) => {
  return (
    <div className={`sidebar ${toggled ? "open" : ""}`}>
      <button className="close-btn" onClick={onClose}>
        Cerrar
        <Image
          src="/close.png"
          alt="Logo"
          width={15}
          height={15}
          className="d-inline-block ms-2"
        />
      </button>
      <ul className="main">
        <li>
          <Link href="/" onClick={onClose}>
            Modelos
          </Link>
        </li>
        <li>
          <Link href="/" onClick={onClose}>
            Servicios y Accesorios
          </Link>
        </li>
        <li>
          <Link href="/" onClick={onClose}>
            Financiación
          </Link>
        </li>
        <li>
          <Link href="/" onClick={onClose}>
            Reviews y Comunidad
          </Link>
        </li>
        <hr className="divider" />
        <li>
          <Link href="/" onClick={onClose}>
            Toyota Mobility Service
          </Link>
        </li>
        <li>
          <Link href="/" onClick={onClose}>
            Toyota Gazoo Racing
          </Link>
        </li>
        <li>
          <Link href="/" onClick={onClose}>
            Toyota Híbridos
          </Link>
        </li>
        <hr className="divider" />
        <li>
          <Link href="/" onClick={onClose}>
            Concesionarios
          </Link>
        </li>
        <li>
          <Link href="/" onClick={onClose}>
            Test Drive
          </Link>
        </li>
        <li>
          <Link href="/" onClick={onClose}>
            Contacto
          </Link>
        </li>
      </ul>
      <ul className="extras">
        <li>
          <Link href="/" onClick={onClose}>
            Actividades
          </Link>
        </li>
        <li>
          <Link href="/car/1">Servicios al Cliente</Link>
        </li>
        <li>
          <Link href="/" onClick={onClose}>
            Ventas Especiales
          </Link>
        </li>
        <li>
          <Link href="/" onClick={onClose}>
            Innovación
          </Link>
        </li>
        <li>
          <Link href="/" onClick={onClose}>
            Prensa
          </Link>
        </li>
        <li>
          <Link href="/" onClick={onClose}>
            Acerca de...
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
