import React from "react";
import { Box } from "@mui/material";
import Header from "../../components/Header";
import PageContainer from "../../components/PageContainer";

export default function Dashboard() {
  return (
    <PageContainer>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subTitle="Welcome to your dashboard" />
      </Box>
    </PageContainer>
  );
}
