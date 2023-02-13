import React from "react";
import { Box } from "@mui/material";
import useWindowDimension from "../../hooks/useWindowDimension";
import PageContainer from "../../components/PageContainer";
import Header from "../../components/Header";
import PieChart from "../../components/PieChart";

export default function Pie() {
  const { height } = useWindowDimension();
  const chartHeight = height - 162;
  return (
    <PageContainer>
      <Header title="Pie Chart" subTitle="Simple Pie Chart" />
      <Box mt={2} height={`${chartHeight}px`}>
        <PieChart />
      </Box>
    </PageContainer>
  );
}
