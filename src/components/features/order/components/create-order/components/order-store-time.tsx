import {
  displayDate,
  displayHalfAnHourTimeRange,
} from "@/components/shared/utils/date";
import { matchStatusBarColor } from "@/components/shared/utils/device";
import React, { FC, useMemo, useState, useEffect } from "react";
import { RiCalendarLine } from "react-icons/ri";

import { Picker, Text } from "zmp-ui";

export const OrderStoreTime = ({
  onChange,
  maxDate = 5,
  value,
  error = "",
  ...props
}: any & {
  onChange?: (value: any) => void;
  maxDate?: number;
  value?: string | number | Date;
  error?: string;
}) => {
  const [date, setDate] = useState<any>();
  const [time, setTime] = useState<any>();

  const availableDates = useMemo(() => {
    const days: Date[] = [];
    const today = new Date();
    for (let i = 0; i < maxDate; i++) {
      const nextDay = new Date(today);
      nextDay.setDate(today.getDate() + i);
      days.push(nextDay);
    }
    return days;
  }, [maxDate]);

  const availableTimes = useMemo(() => {
    const times: Date[] = [];
    const now = new Date();
    let time = new Date();

    if (
      date &&
      !isNaN(new Date(date).getTime()) &&
      now.toDateString() === new Date(date).toDateString()
    ) {
      const minutes = Math.ceil(now.getMinutes() / 30) * 30;
      time.setHours(now.getHours());
      time.setMinutes(minutes);
    } else {
      time.setHours(7);
      time.setMinutes(0);
    }
    time.setSeconds(0);
    time.setMilliseconds(0);
    const endTime = new Date();
    endTime.setHours(23);
    endTime.setMinutes(59);
    endTime.setSeconds(0);
    endTime.setMilliseconds(0);
    while (time <= endTime) {
      times.push(new Date(time));
      time.setMinutes(time.getMinutes() + 30);
    }
    return times;
  }, [date]);

  useEffect(() => {
    if (value) {
      const dateValue = new Date(value);
      if (!isNaN(dateValue.getTime())) {
        const matchedDate = availableDates.find(
          (d) => d.toDateString() === dateValue.toDateString()
        );
        if (matchedDate) {
          setDate(+matchedDate);
        }

        const timeSlot = new Date(dateValue);
        timeSlot.setSeconds(0);
        timeSlot.setMilliseconds(0);
        const matchedTime = availableTimes.find((t) => +t === +timeSlot);
        if (matchedTime) {
          setTime(+matchedTime);
        }
      }
    }
  }, [value, availableDates, availableTimes]);

  useEffect(() => {
    if (date === undefined && availableDates.length > 0) {
      setDate(+availableDates[0]);
    }
  }, [availableDates, date]);

  useEffect(() => {
    if (time === undefined && availableTimes.length > 0 && !value) {
      setTime(+availableTimes[0]);
    }
  }, [availableTimes, time, value]);

  const handleChange = ({ date, time }) => {
    if (date) {
      setDate(+date.value);
    }
    if (time) {
      setTime(+time.value);
    }

    if (date && time) {
      const selectedDate = new Date(+date.value);
      const selectedTime = new Date(+time.value);

      selectedDate.setHours(selectedTime.getHours());
      selectedDate.setMinutes(selectedTime.getMinutes());
      selectedDate.setSeconds(selectedTime.getSeconds());
      selectedDate.setMilliseconds(selectedTime.getMilliseconds());

      onChange?.(selectedDate?.toISOString());
    }
  };

  return (
    <>
      <Picker
        mask
        maskClosable
        // onVisibilityChange={(visbile) => matchStatusBarColor(visbile)}
        suffix={<RiCalendarLine size={20} className="text-primary mr-3" />}
        inputClass=" text-sm  rounded-lg  bg-transparent"
        placeholder="Chọn thời gian"
        title="Thời gian lấy hàng"
        value={{
          date,
          time:
            time ??
            (availableTimes.length > 0 ? +availableTimes[0] : undefined),
        }}
        formatPickedValueDisplay={({ date, time }) =>
          date && time
            ? `${displayHalfAnHourTimeRange(
                new Date(time.value)
              )}, ${displayDate(new Date(date.value))}`
            : ``
        }
        onChange={({ date, time }) => handleChange?.({ date, time })}
        data={[
          {
            options: availableTimes.map((time, i) => ({
              displayName: displayHalfAnHourTimeRange(time),
              value: +time,
            })),
            name: "time",
          },
          {
            options: availableDates.map((date, i) => ({
              displayName: displayDate(date, true),
              value: +date,
            })),
            name: "date",
          },
        ]}
        {...props}
        status={error ? "error" : ""}
      />
    </>
  );
};
