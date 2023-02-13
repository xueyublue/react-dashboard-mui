import React from "react";
import useWindowDimension from "../../hooks/useWindowDimension";
import PageContainer from "../../components/PageContainer";
import { Box } from "@mui/system";
import LineChart from "../../components/LineChart";
import Header from "../../components/Header";

export default function Line() {
  const { height } = useWindowDimension();
  const chartHeight = height - 162;
  return (
    <PageContainer>
      <Header title="Line Chart" subTitle="Simple Line Chart" />
      <Box mt={2} height={`${chartHeight}px`}>
        <LineChart />
      </Box>
    </PageContainer>
  );
}
