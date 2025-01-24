"use client";
import { cn } from "../lib/utils";
import { useState } from "react";
import NumberFlow from "@number-flow/react";
import { TextLoop } from "./TextLoop";

interface SpendingItem {
  amount: number;
}

interface SpendingDetailsProps {
  spending: SpendingItem[];
}

export const spendingTrackerProps: SpendingDetailsProps = {
  spending: [
    { amount: 3420 },
    { amount: 4230 },
    { amount: 5987 },
    { amount: 7372 },
  ],
};

export default function ExpenseTracker({
  spending = spendingTrackerProps.spending,
}: SpendingDetailsProps) {
  const [selectedIndex, setSelectedIndex] = useState(spending.length - 1); 
  const totalSpending = spending.reduce((acc, item) => acc + item.amount, 0);

 
  const getDateLabel = (index: number) => {
    if (index === spending.length - 1) return "Today";
    if (index === spending.length - 2) return "Yesterday";
    const date = new Date();
    date.setDate(date.getDate() - (spending.length - 1 - index));
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
  };

  const dateLabels = spending.map((_, index) => getDateLabel(index));

  return (
    <div
      className={cn(
        "relative h-36 w-72 flex-col rounded-3xl border bg-[#162341] text-white px-4 m-4 overflow-hidden"
      )}
    >
      <div className="mt-3">
        <div className="text-3xl font-black text-foreground tracking-wide">
          <NumberFlow value={spending[selectedIndex].amount} />
        </div>
        <div className="text-xs font-semibold text-[#B9BEC7] text-muted-foreground pt-1 uppercase">
          <TextLoop currentIndex={selectedIndex}>
            {dateLabels.map((label, index) => (
              <span className="tracking-wide" key={index}>STEPS {label}</span>
            ))}
          </TextLoop>
        </div>
      </div>
      <div className="absolute bottom-0 right-5">
        <div className="group flex flex-1 items-end justify-end gap-2">
          {spending.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center cursor-pointer hover:bg-gray-200/5 w-12"
              onClick={() => setSelectedIndex(index)}
            >
              <div
                className="h-60 w-10"
                style={{
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  className={cn(
                    "absolute bottom-0 left-0 transition-all rounded-t-lg",
                    index === selectedIndex ? "bg-[#FFC446]" : "bg-[#d8d8d8]"
                  )}
                  style={{
                    height: `${(item.amount / totalSpending) * 100}%`,
                    width: "100%",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}