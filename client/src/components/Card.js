import React from "react";
import { Card } from "@mui/material";

export default function CustomCard({ children }) {
  return <Card sx={{ maxWidth: 500 }}>{children}</Card>;
}
