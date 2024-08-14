import Link from "next/link";

export default function NotFound() {
  return (
    <div className="not-found-container">
      <h2>404</h2>
      <p>Ruta no encontrada 🥲</p>
      <p>
        Volve a la <Link href="/">Pagina principal</Link>
      </p>
    </div>
  );
}
