import { UserProps } from "../types/user";
import { useState } from "react";
import Search from "../components/Search";
import User from "../components/User";
import Error from "../components/Error";

const Home = () => {
  const [user, setUser] = useState<UserProps | null>(null);
  const [userName, setUserName] = useState("");
  const [error, setError] = useState(false);
  const [showProjects, setShowProjects] = useState(false);

  const loadUser = async (userName: string) => {
    setError(false);
    setUser(null);
    setShowProjects(false);
    const res = await fetch(`https://api.github.com/users/${userName}`);

    const data = await res.json();

    console.log(data);

    if (res.status === 404) {
      setError(true);
      return;
    }

    const { avatar_url, login, location, followers, following } = data;

    const userData: UserProps = {
      login,
      avatar_url,
      location,
      followers,
      following,
    };
    setUser(userData);
    setUserName(userData.login);
    localStorage.removeItem("user");
    localStorage.setItem("user", JSON.stringify(userName));
  };

  return (
    <div>
      <Search loadUser={loadUser} />
      {user && !showProjects && <User {...user} />}
      {error && <Error />}
    </div>
  );
};

export default Home;
