import { DateCalendar, LocalizationProvider } from "@mui/x-date-pickers";
import Card from "../../../Elements/Card";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const CalendarCard: React.FC = () => {
  return (
    <>
      <Card size="col-span-12">
        <Card.Header classname="text-center">
          <h6>Kalendar</h6>
        </Card.Header>
        <Card.Body classname="py-6 overflow-hidden">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar />
          </LocalizationProvider>
        </Card.Body>
      </Card>
    </>
  );
};
export default CalendarCard;
