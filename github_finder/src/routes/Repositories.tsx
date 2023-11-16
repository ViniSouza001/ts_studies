import React, { useEffect, useState } from "react";

import classes from "./Repositories.module.css";

const Repositories = () => {
  const [userName, setUserName] = useState<string | null>("");
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
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
        // console.log(data);

        setRepositories(data);
        console.log(repositories);
      }
    };

    fetchProjs();
  }, [userName]);

  return (
    <div>
      {repositories &&
        repositories.map(
          (
            repo: {
              name: string;
              default_branch: string;
              language: string;
            },
            index: number
          ) => (
            <div className={classes.repositories}>
              <p>Nome: {repo.name}</p>
              <p>
                Linguagem: {repo.language ? repo.language : "Não reconhecida"}
              </p>
              <p>Branch: {repo.default_branch}</p>
            </div>
          )
        )}
    </div>
  );
};

export default Repositories;
