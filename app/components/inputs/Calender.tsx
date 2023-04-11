"use client";

import { DateRange, Range, RangeKeyDict } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

type CalenderProps = {
  value: Range;
  disabledDates?: Date[];
  onChange: (value: RangeKeyDict) => void;
};

function Calender({ value, disabledDates, onChange }: CalenderProps) {
  return (
    <DateRange
      rangeColors={["#262626"]}
      ranges={[value]}
      date={new Date()}
      onChange={onChange}
      direction="vertical"
      showDateDisplay={false}
      minDate={new Date()}
      disabledDates={disabledDates}
    />
  );
}

export default Calender;
