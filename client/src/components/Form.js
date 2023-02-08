import React from "react";
import { FormControl, InputLabel, Input, FormHelperText, Container } from "@mui/material";

export default function Form() {

  return (
      <Container>
        <FormControl>
          <InputLabel htmlFor="email">Email address</InputLabel>
          <Input id="email" aria-describedby="my-helper-text" />
          <FormHelperText id="my-helper-text">
            We'll never share your email.
          </FormHelperText>
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="password">Password</InputLabel>
          <Input id="password" type="password" />
        </FormControl>
      </Container>
  );
}
