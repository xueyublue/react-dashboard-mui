import { useState } from "react";
import FullCalendar, { formatDate } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/core";
import listPlugin from "@fullcalendar/list";
import { Box, List, ListItem, ListItemText, Typography, useTheme } from "@mui/material";
import PageContainer from "../../components/PageContainer";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import { borderRadius } from "@mui/system";

export default function Calendar() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [currentEvents, setCurrentEvents] = useState([]);
  const handleDateClick = (selected) => {
    const title = prompt("Please enter a new title for your event");
    const calendarApi = selected.view.calendar;
    calendarApi.unselect();
    if (title) {
      calendarApi.addEvent({
        id: `${selected.dateStr}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      });
    }
  };
  const handleEventClick = (selected) => {
    if (window.confirm(`Are you sure you want to delete the event ${selected.event.title}`)) {
      selected.event.remote();
    }
  };
  return (
    <PageContainer>
      <Header title="CALENDAR" subTitle="Full Calendar Interactive Page" />
      <Box mt={2} display="flex" justifyContent="space-between">
        {/* Calendar Sidebar */}
        <Box flex="1 1 20%" backgroundColor={colors.primary[400]} padding="15px" borderRadius="4px">
          <Typography variant="h5">Events</Typography>
          <List>
            {currentEvents.map((event) => (
              <listItem
                key={event.id}
                sx={{ backgroundColor: colors.greenAccent[500], margin: "10px 0", borderRadius: "2px" }}
              >
                <ListItemText
                  primary={event.title}
                  secondary={
                    <Typography>
                      {formatDate(event.start, { year: "numeric", month: "short", day: "numeric" })}
                    </Typography>
                  }
                />
              </listItem>
            ))}
          </List>
        </Box>
        {/* Calendar */}
        <Box flex="1 1 100%" ml="15px">
          {/* <FullCalendar
            height="75vh"
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
            headerToolbar={{
              left: "prec, next today",
              center: "title",
              right: "dayGridMonth, timeGridWeek, timeGridDay, listMonth",
            }}
            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            select={handleDateClick}
            eventClick={handleEventClick}
            eventsSet={(events) => setCurrentEvents(events)}
            initialEvents={[
              { id: "1234", title: "All-day event", date: "2022-01-12" },
              { id: "1235", title: "All-day event 2", date: "2022-01-14" },
            ]}
          /> */}
        </Box>
      </Box>
    </PageContainer>
  );
}
