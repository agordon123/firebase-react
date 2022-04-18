import { useState } from "react";
import { signIn } from "../auth/firebase";
import ResponsiveAppBar from "../ResponsiveAppBar";

export const Login = () => {
  const [data,setData] = useState({})
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");


  const renderAppBar = () => {
    return (
      <ResponsiveAppBar />
    );
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    setEmail("");
    setPassword("");
    const res = await signIn(email, password).then(
      (res) => {
        setData(res);
      }
    )
    if (res.error) setError(res.error);
      };

      return (
        <div className="Login">
          {renderAppBar()}
              {error ? <div>{error}</div> : null}
              <form onSubmit={handleSubmit}>
              <input
                  type="text"
                  name="email"
                  value={email}
                  placeholder="Your Email"
                  onChange={(e) => setEmail(e.target.value)}
                 />
              <input
              type="password"
              name="password"
              value={password}
              placeholder="Your Password"
              onChange={(e) => setPassword(e.target.value)}
              />
            <input type="submit" value="submit" />
            </form>
            </div>
            );
        };


export default Login;