import React from "react";
import PageContainer from "../../components/PageContainer";
import { Box } from "@mui/material";
import Header from "../../components/Header";
import GeographyChart from "../../components/GeographyChart";
import useWindowDimension from "../../hooks/useWindowDimension";

export default function Geography() {
  const { height } = useWindowDimension();
  const chartHeight = height - 162;
  return (
    <PageContainer>
      <Header title="Geography Chart" subTitle="Simple Geography Chart" />
      <Box mt={2} height={`${chartHeight}px`}>
        <GeographyChart />
      </Box>
    </PageContainer>
  );
}
