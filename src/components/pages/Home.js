import LinkButton from "../layout/LinkButton";
import saving from "../../img/savings.svg";
import styles from "./Home.module.css";

function Home() {
  return (
    <section className={styles.home_container}>
      <h1>
        Bem-vindo ao <span>Costs</span>
      </h1>
      <p>Comece a gerenciar seu projeto agora mesmo!</p>
      <LinkButton to="/newproject" text="Criar Projeto"></LinkButton>
      <img src={saving} alt="Costs"></img>
    </section>
  );
}

export default Home;
