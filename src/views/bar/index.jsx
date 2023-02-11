import { Box } from "@mui/system";
import React from "react";
import BarChart from "../../components/BarChart";
import PageContainer from "../../components/PageContainer";
import Header from "../../components/Header";
import useWindowDimension from "../../hooks/useWindowDimension";

export default function Bar() {
  const { height } = useWindowDimension();
  const chartHeight = height - 162;
  return (
    <PageContainer>
      <Header title="Bar Chart" subTitle="Simple Bar Chart" />
      <Box mt={2} height={`${chartHeight}px`}>
        <BarChart />
      </Box>
    </PageContainer>
  );
}
