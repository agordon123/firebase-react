import { useState } from "react";
import { signIn } from "../auth/firebase";
import ResponsiveAppBar from "../ResponsiveAppBar";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { app } from "../firebase";
import "./styles.css";


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







export const SignUp = () => { 
    
    const [error, setError] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const auth = getAuth(app)
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                navigate('/');

            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorCode, errorMessage);
            });    
    }

    return(
        <div className="signup">
            <form onSubmit={handleLogin}>
                <input type="email" placeholder="Email" onChange={e=>setEmail(e.target.value)} autoComplete="username" />
                <input type="password" placeholder="Password" autoComplete="current-password" onChange={e=>setPassword(e.target.value)}/>
                <button type="submit">Login</button>
                {error && <span>Wrong Information</span>}
            </form>
        </div>
    )
}

