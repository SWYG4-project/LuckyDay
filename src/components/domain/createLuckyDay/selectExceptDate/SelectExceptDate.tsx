import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import type { UseFormSetValue, UseFormWatch } from "react-hook-form";

import { Calendar } from "components";
import type { CreateLuckyDayForm } from "types";
import * as S from "./SelectExceptDate.styled";

interface SelectExceptDateProps {
  watch: UseFormWatch<CreateLuckyDayForm>;
  setValue: UseFormSetValue<CreateLuckyDayForm>;
}

function SelectExceptDate({ watch, setValue }: SelectExceptDateProps) {
  const [expDates, setExpDates] = useState<string[]>([]);

  const selectedPeriod = `${watch("period")}` ?? "0";
  const EndOfDate = dayjs(dayjs())
    .add(+selectedPeriod, "day")
    .format("YYYY년 MM월 DD일");

  const makeExpDates = (dates: string) => {
    if (expDates.includes(dates)) {
      setExpDates((prevExpDates) =>
        prevExpDates.filter((date) => date !== dates)
      );
    } else {
      setExpDates([...expDates, dates]);
    }
  };

  useEffect(() => {
    setValue("expDTList", expDates);
  }, [expDates]);

  return (
    <>
      <S.HeadLine>럭키 데이 배정을 원하지 않는 날짜를 선택하세요.</S.HeadLine>
      <S.SubHeadLine>
        {dayjs().format("YYYY년 MM월 DD일")} ~ {EndOfDate}
      </S.SubHeadLine>
      <div>
        <Calendar dates={selectedPeriod} makeExpDates={makeExpDates} />
      </div>
    </>
  );
}

export default SelectExceptDate;
