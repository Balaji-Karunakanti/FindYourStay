import { Calendar } from "react-native-calendars";

interface CalendarPickerProps {
  selectedDate: string;
  onDateChange: (date: string) => void;
}

export default function CalendarPicker({
  selectedDate,
  onDateChange,
}: CalendarPickerProps) {
  return (
    <Calendar
      onDayPress={(day) => onDateChange(day.dateString)}
      markedDates={{
        [selectedDate]: {
          selected: true,
          selectedColor: "#0B1F72",
        },
      }}
      theme={{
        todayTextColor: "#0B1F72",
        selectedDayBackgroundColor: "#0B1F72",
        arrowColor: "#0B1F72",
        monthTextColor: "#0B1F72",
        textMonthFontWeight: "bold",
        textDayFontSize: 16,
        textMonthFontSize: 20,
      }}
      style={{
        borderRadius: 16,
      }}
    />
  );
}