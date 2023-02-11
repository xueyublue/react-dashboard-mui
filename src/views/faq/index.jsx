import { useTheme, Box, Typography } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { ExpandMore } from "@mui/icons-material";
import PageContainer from "../../components/PageContainer";
import Header from "../../components/Header";
import { tokens } from "../../theme";

export default function FAQ() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <PageContainer>
      <Header title="FAQ" subTitle="Frequently Asked Questions Page" />
      <Box mt={2}>
        <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography color={colors.greenAccent[500]} variant="h5">
              An important question
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur aspernatur beatae, deserunt autem
              eligendi fugit reiciendis molestiae eveniet quae voluptatibus quidem dolorum sint nulla ea natus
              asperiores quis officia accusantium?
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography color={colors.greenAccent[500]} variant="h5">
              Another important question
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur aspernatur beatae, deserunt autem
              eligendi fugit reiciendis molestiae eveniet quae voluptatibus quidem dolorum sint nulla ea natus
              asperiores quis officia accusantium?
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography color={colors.greenAccent[500]} variant="h5">
              You favorite question
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur aspernatur beatae, deserunt autem
              eligendi fugit reiciendis molestiae eveniet quae voluptatibus quidem dolorum sint nulla ea natus
              asperiores quis officia accusantium?
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography color={colors.greenAccent[500]} variant="h5">
              Some random question
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur aspernatur beatae, deserunt autem
              eligendi fugit reiciendis molestiae eveniet quae voluptatibus quidem dolorum sint nulla ea natus
              asperiores quis officia accusantium?
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </PageContainer>
  );
}
