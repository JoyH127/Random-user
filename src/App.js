import "./App.css";
import fetchData from "./service/rando_user";
import { useState, useEffect } from "react";
import UserSummary from "./components/UserSummary";

function App() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetchData().then((res) => {
      setUser(res);
    });
  }, []);
  console.log(user);
  function refreshUser() {
    console.log("hello");
  }
  return (
    <div className="App">
      <header>
        <button onClick={refreshUser}>refresh</button>
        {user.map((u, index) => {
          const { name, email, location, picture } = u;
          return (
            <UserSummary
              name={name}
              email={email}
              location={location}
              picture={picture}
              key={index}
            />
          );
        })}
      </header>
    </div>
  );
}

export default App;
