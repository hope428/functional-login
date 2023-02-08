import React, { useState } from "react";
import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  Container,
} from "@mui/material";

export default function Form() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [thankYou, setThankYou] = useState(false);

  const submitForm = (e) => {
    e.preventDefault();
    console.log(`Username: ${username}, Password: ${password}`);
    setThankYou(true)
    setTimeout(() => {
      setThankYou(false)
    }, 3000);
  };

  return (
    <>
      {thankYou ? (
        <h1>Thank you for signing up</h1>
      ) : (
        <Container>
          <FormControl>
            <InputLabel htmlFor="email">Email address</InputLabel>
            <Input id="email" onChange={(e) => setUsername(e.target.value)} />
            <FormHelperText id="my-helper-text">
              We'll never share your email.
            </FormHelperText>
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input
              id="password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>
          <button onClick={submitForm}>Sign up!</button>
        </Container>
      )}
    </>
  );
}
