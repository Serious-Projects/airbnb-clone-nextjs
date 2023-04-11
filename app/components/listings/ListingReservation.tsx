"use client";

import Button from "@/app/components/Button";
import Calender from "@/app/components/inputs/Calender";
import { Range } from "react-date-range";

type ListingReservationProps = {
  price: number;
  totalPrice: number;
  dateRange: Range;
  disabled: boolean;
  disabledDates: Date[];
  onChangeDate: (value: Range) => void;
  onSubmit: () => void;
};

function ListingReservation({
  price,
  totalPrice,
  dateRange,
  disabled,
  disabledDates,
  onChangeDate,
  onSubmit,
}: ListingReservationProps) {
  return (
    <div className="bg-white rounded-xl border border-neutral-200 overflow-hidden">
      <div className="flex flex-row items-center gap-1 p-4">
        <div className="text-2xl font-semibold">$ {price}</div>
        <div className="font-light text-neutral-600">/ night</div>
      </div>
      <hr />
      <Calender
        value={dateRange}
        disabledDates={disabledDates}
        onChange={(value) => onChangeDate(value.selection)}
      />
      <hr />
      <div className="p-4">
        <Button label="Reserve" onClick={onSubmit} disabled={disabled} />
      </div>
      <hr />
      <div className="flex flex-row items-center justify-between p-4 font-semibold text-lg">
        <div>Total</div>
        <div>$ {totalPrice}</div>
      </div>
    </div>
  );
}

export default ListingReservation;
