import React from "react";
import { Box, Button, IconButton, useTheme, Typography } from "@mui/material";
import Header from "../../components/Header";
import PageContainer from "../../components/PageContainer";
import { mockTransactions } from "../../data/mockData";
import { DownloadOutlined, Email, PointOfSale, PersonAdd, Traffic } from "@mui/icons-material";
import LineChart from "../../components/LineChart";
import BarChart from "../../components/BarChart";
import PieChart from "../../components/PieChart";
import GeographyChart from "../../components/GeographyChart";
import StatBox from "../../components/StatBox";
import { tokens } from "../../theme";

export default function Dashboard() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <PageContainer>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subTitle="Welcome to your dashboard" />
        <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <DownloadOutlined sx={{ mr: "10px" }} />
            Download Report
          </Button>
        </Box>
      </Box>
      {/* GRID */}
      <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gridAutoRows="140px" gap="20px" mt={1}>
        {/* Row 1-1 */}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="12,361"
            subtitle="Email Sent"
            progress="0.75"
            increase="+14%"
            icon={<Email sx={{ color: colors.greenAccent[600], fontSize: "26px" }} />}
          />
        </Box>
        {/* Row 1-2 */}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="431,215"
            subtitle="Sales Obtained"
            progress="0.50"
            increase="+21%"
            icon={<PointOfSale sx={{ color: colors.greenAccent[600], fontSize: "26px" }} />}
          />
        </Box>
        {/* Row 1-3 */}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="32,441"
            subtitle="New Clients"
            progress="0.30"
            increase="+5%"
            icon={<PersonAdd sx={{ color: colors.greenAccent[600], fontSize: "26px" }} />}
          />
        </Box>
        {/* Row 1-4 */}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="1,325,134"
            subtitle="Traffic Received"
            progress="0.80"
            increase="+43%"
            icon={<Traffic sx={{ color: colors.greenAccent[600], fontSize: "26px" }} />}
          />
        </Box>
        {/* ROW 2 */}
      </Box>
    </PageContainer>
  );
}
