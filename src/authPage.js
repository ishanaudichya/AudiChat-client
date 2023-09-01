import { useState } from "react";
import axios from "axios";
import logo from "./logo.png"
const AuthPage = (props) => {
  const [username, setUsername] = useState();
  const [secret, setSecret] = useState();
  const [email, setEmail] = useState();
  const [first_name, setFirstName] = useState();
  const [last_name, setLastName] = useState();

  const onLogin = (e) => {
    e.preventDefault();
    axios
      .post("https://chatapp-server-jlp7.onrender.com/login", { username, secret })
      .then((r) => props.onAuth({ ...r.data, secret })) // NOTE: over-ride secret
      .catch((e) => console.log(JSON.stringify(e.response.data)));
  };

  const onSignup = (e) => {
    e.preventDefault();
    axios
      .post("https://chatapp-server-jlp7.onrender.com/signup", {
        username,
        secret,
        email,
        first_name,
        last_name,
      })
      .then((r) => props.onAuth({ ...r.data, secret })) // NOTE: over-ride secret
      .catch((e) => console.log(JSON.stringify(e.response.data)));
  };

  return (
<div className="login-page">
  <div className="card">
  <img src={logo} alt="Img" className="alogo"/>
    {/* Login Form */}
    <form onSubmit={onLogin}>
      <div className="title">Login</div>
      <input
        type="text"
        name="username"
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
        className="input-field"
      />
      <input
        type="password"
        name="secret"
        placeholder="Password"
        onChange={(e) => setSecret(e.target.value)}
        className="input-field"
      />
      <button type="submit" className="action-button">LOG IN</button>
    </form>

    {/* Sign Up Form */}
    <form onSubmit={onSignup}>
      <div className="title"><br/><br></br>Sign Up</div>
      <input
        type="text"
        name="username"
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
        className="input-field"
      />
      <input
        type="password"
        name="secret"
        placeholder="Password"
        onChange={(e) => setSecret(e.target.value)}
        className="input-field"
      />
      <input
        type="text"
        name="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        className="input-field"
      />
      <input
        type="text"
        name="first_name"
        placeholder="First name"
        onChange={(e) => setFirstName(e.target.value)}
        className="input-field"
      />
      <input
        type="text"
        name="last_name"
        placeholder="Last name"
        onChange={(e) => setLastName(e.target.value)}
        className="input-field"
      />
      <button type="submit" className="action-button">SIGN UP</button>
    </form>
    
    <div className="sign">Please wait a few secs after pressing login<br></br>Backend server boots in 10 secs<br></br><br></br>Made with ♥ by Ishan Audichya</div>
  </div>

  <style>{`
  .login-page {
  width: 100vw;
  height: 100vh;
  background: linear-gradient(to top, #e0d1b0, #f6f2e9);
  display: flex;
  justify-content: center;
  align-items: center;
}
.sign{
  padding-top: 30px;
}

.alogo {
  height: 50px;
  object-fit: cover;
  padding-bottom: 50px;
}

.card {
  width: 300px;
  text-align: center;
  padding: 20px;
  background-color: #DAC0A3; /* Updated color */
  border-radius: 10px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.3);
  padding-bottom: 30px;
}

.title {
  font-size: 24px;
  color: #102C57; /* Updated color */
  font-weight: 700;
  margin-bottom: 16px;
}

.input-field {
  width: 90%;
  margin-top: 12px;
  padding: 10px;
  background-color: #EADBC8; /* Updated color */
  border: none;
  border-radius: 4px;
  outline: none;
  padding-right: 16px; /* Added right padding */
}

.action-button {
  margin-top: 16px;
  width: 100%;
  padding: 10px;
  background-color: #102C57;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 600;
}

  `}</style>
</div>

  );
};

export default AuthPage;
