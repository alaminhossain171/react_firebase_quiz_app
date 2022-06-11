
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Button from "./Button";
import Checkbox from "./Checkbox";
import Form from "./Form";
import TextInput from "./TextInput";
function SignupForm() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agree, setAgree] = useState("");
  const [err, setErr] = useState();
  const [loading, setLoading] = useState();
  const { signup } = useAuth();

  const history = useHistory();

async function handleSubmit(event){
    event.preventDefault();

    if (password !== confirmPassword) {
      setErr("Passwords not  match !");
    
    }
    else{
        try {
            setErr("");
            setLoading(true);
            await signup(email, password, userName);
            history.push("/");
          } catch (err) {
            console.log(err);
            setLoading(false);
            setErr("Faild to create account!");
          }
    }
  
  };
  return (
    <Form className={{ height: "500px" }} onSubmit={handleSubmit}>
      <TextInput
      
        type="text"
        placeholder="Enter name"
        icon="person"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        required
      />

      <TextInput
     
        type="email"
        placeholder="Enter email"
        icon="alternate_email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <TextInput

        type="password"
        placeholder="Enter password"
        icon="lock"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <TextInput
      
        type="password"
        placeholder="Confirm password"
        icon="lock_clock"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        required
      />
      <Checkbox
     
        text="I agree to the Terms & Conditions"
        value={agree}
        onChange={(e) => setAgree(e.target.value)}
        required
      />
      <Button disabled={loading} type="submit">
        Submit Now!
      </Button>

      {err && <p className="error">{err}</p>}

      <div className="info">
        Already have an account? <Link to='/'>Login</Link> instead.
      </div>
    </Form>
  );
}

export default SignupForm;
