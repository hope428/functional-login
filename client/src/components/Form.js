import React, { useState } from "react";
import Auth from '../utils/auth';
import { addUser } from "../utils/api";
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

  const submitForm = async (e) => {
    e.preventDefault();

    try {
      const res = await addUser({ username, password });

      if (!res.ok) {
        throw new Error("something went wrong!");
      }

      const data = await res.json();
      Auth.login(data.token)

    } catch (error) {
      console.error(error);
    }

    setThankYou(true);
    setTimeout(() => {
      setUsername("");
      setPassword("");
      setThankYou(false);
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
            <Input
              id="email"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
            />
            <FormHelperText id="my-helper-text">
              We'll never share your email.
            </FormHelperText>
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>
          <button onClick={submitForm}>Sign up!</button>
          <button onClick={() => Auth.logout()}>Logout</button>
        </Container>
      )}
    </>
  );
}
