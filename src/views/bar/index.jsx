import { Box } from "@mui/system";
import React from "react";
import BarChart from "../../components/BarChart";
import PageContainer from "../../components/PageContainer";
import Header from "../../components/Header";

export default function Bar() {
  return (
    <PageContainer>
      <Header title="Bar Chart" subTitle="Simple Bar Chart" />
      <Box mt={2} height="75vh">
        <BarChart />
      </Box>
    </PageContainer>
  );
}
