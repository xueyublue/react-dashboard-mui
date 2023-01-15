import React from "react";
import { Box } from "@mui/material";

export default function PageContainer({ children }) {
  return (
    <Box pl={2} pr={2}>
      {children}
    </Box>
  );
}
