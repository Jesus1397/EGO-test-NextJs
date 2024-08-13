import { useRouter } from "next/router";
import styles from "@/styles/404.module.scss";

const NotFound = () => {
  const router = useRouter();

  const handleRedirect = () => {
    router.push("/");
  };

  return (
    <div className={styles.container}>
      <h1>404 - Esta página no existe</h1>
      <p>Parece que la página que estás buscando no está disponible.</p>
      <button onClick={handleRedirect} className={styles.button}>
        Volver a la página principal
      </button>
    </div>
  );
};

export default NotFound;
