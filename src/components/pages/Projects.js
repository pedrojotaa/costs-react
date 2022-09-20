import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import Container from "../layout/Container";
import LinkButton from "../layout/LinkButton";
import Message from "../layout/Message";

import ProjectCard from "../project/ProjectCard";

import styles from "./Projects.module.css";
import Loading from "../layout/Loader";

function Projects() {
  const [projects, setProjects] = useState([]);
  //começa com false pq ele sempre inicia com o loading
  const [removeLoading, setRemoveLoading] = useState(false);

  const location = useLocation();

  let message = "";

  if (location.state) {
    message = location.state.message;
  }

  useEffect(() => {
    fetch("http://localhost:5000/projects", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setProjects(data);
        //quando terminar de carregar os projetos colocamos o loader como true
        setRemoveLoading(true);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className={styles.project_container}>
      <div className={styles.title_container}>
        <h1>Projetos</h1>
        <LinkButton to="/newproject" text="Criar Projeto" />
      </div>
      {message && <Message msg={message} type="success" />}
      <Container customClass="start">
        {/* so exibe se os projeto estiverem carregados */}
        {projects.length > 0 &&
          //o retorno é um objeto, portanto é recebido 'entre parênteses ()'
          projects.map((project) => (
            <ProjectCard
              id={project.id}
              name={project.name}
              budget={project.budget}
              category={project.category.name}
              key={project.id}
            />
          ))}
        {!removeLoading && <Loading />}
        {removeLoading && projects.length === 0 && (
          <p>Não há projetos cadastrados</p>
        )}
      </Container>
    </div>
  );
}

export default Projects;
