import { useEffect, useState } from "react";

import classes from "./Repositories.module.css";

// assets
import branchPng from "../assets/branch.png";
import repositoryPng from "../assets/repository.png";
import tagPng from "../assets/tag.png";
import loading from "../assets/loading.gif";

const Repositories = () => {
  const [userName, setUserName] = useState<string | null>("");
  const [repositories, setRepositories] = useState([]);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setShowContent(false);
    setUserName(localStorage.getItem("user"));
    const fetchProjs = async () => {
      if (userName) {
        const res = await fetch(
          `https://api.github.com/users/${userName.substring(
            1,
            userName.length - 1
          )}/repos`
        );
        const data = await res.json();

        setRepositories(data);
        if (repositories) setShowContent(true);
      }
    };

    fetchProjs();
  }, [userName]);

  return (
    <div>
      {!showContent ? (
        <div className={classes.loading_container}>
          <img src={loading} alt="loading" className={classes.loading} />
        </div>
      ) : (
        repositories.map(
          (
            repo: {
              name: string;
              default_branch: string;
              language: string;
              html_url: string;
              updated_at: string;
              created_at: string;
            },
            index: number
          ) => (
            <div key={index} className={classes.repositories}>
              <div className={classes.informations}>
                <div className={classes.container}>
                  <img
                    src={repositoryPng}
                    className={classes.repository}
                    alt="repository"
                  />
                  <p>Nome: {repo.name}</p>
                </div>
                <div className={classes.container}>
                  <img src={tagPng} alt="tag" className={classes.tag} />
                  <p>
                    Linguagem:{" "}
                    {repo.language ? repo.language : "Não reconhecida"}
                  </p>
                </div>
                <div className={classes.container}>
                  <img
                    src={branchPng}
                    alt="branch"
                    className={classes.branch}
                  />
                  <p>Branch: {repo.default_branch}</p>
                </div>
              </div>
              <div className={classes.container_datas}>
                <div className={classes.datas}>
                  <p>Criado em:</p>
                  <p>{repo.created_at.substring(0, 10)}</p>
                </div>
                <div className={classes.datas}>
                  <p>Atualizado em:</p>
                  <p>{repo.updated_at.substring(0, 10)}</p>
                </div>
              </div>
              <a target="_blank" href={repo.html_url}>
                Ver repositório
              </a>
            </div>
          )
        )
      )}
    </div>
  );
};

export default Repositories;
