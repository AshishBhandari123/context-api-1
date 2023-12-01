import React, { useContext } from "react";
import UserContext from "../context/UserContext";

function Login() {
  const { setUser } = useContext(UserContext);
  const [name, setname] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ name, password });
  };
  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        value={name}
        placeholder="username"
        onChange={(e) => setname(e.target.value)}
      />{" "}
      <input
        type="password"
        value={password}
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Login;
