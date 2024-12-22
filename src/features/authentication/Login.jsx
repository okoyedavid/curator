import styles from "../../modules/Login.module.css";
import { useState } from "react";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import Input from "../../ui/Input";
import FormRowVertical from "../../ui/FormRowVertical";
import Dark from "/login-dark.jpeg";
import Light from "/login-light.jpeg";
import { useDarkMode } from "../../context/DarkModeContext";
//import { useLogin } from "./useLogin";
//import SpinnerMini from "../../ui/SpinnerMini";

function Login() {
  const { isDarkMode } = useDarkMode();
  return (
    <div className={styles.container}>
      <div className={styles.overlay}></div>
      <div className={styles.background}>
        <img src={isDarkMode ? Dark : Light} alt="" className={styles.image} />
      </div>
      <div className={styles.conter}>
        <LoginForm />
      </div>
    </div>
  );
}

export default Login;

function LoginForm() {
  const [email, setEmail] = useState("okoyedav@gmail.com");
  const [password, setPassword] = useState("Okoyedav7$");

  //   const { login, isLoading } = ();
  function handleSubmit(e) {
    e.preventDefault();

    //     if (!email || !password) return;

    //     const user = { email, password };
    //     login(user, {
    //       onSettled: () => {
    //         setEmail(""), setPassword("");
    //       },
    //     });
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormRowVertical label="Email address">
        <Input
          type="email"
          id="email"
          // This makes this form better for password managers
          autoComplete="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormRowVertical>
      <FormRowVertical label="Password">
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormRowVertical>
      <FormRowVertical>
        <Button size="large" variation={"primary"}>
          Login
        </Button>
      </FormRowVertical>
    </Form>
  );
}
