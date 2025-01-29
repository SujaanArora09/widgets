import Image from "next/image";
import ExpenseTracker from "./components/ComponentOne";
import { CarouselCustomIndicator } from "./components/ProductCard";
import ToggleTheme from "./components/ToggleTheme";
import ClockWidget from "./components/ClockWidget";

export default function Home() {
  return (
    <div>
      <div className="flex items-center justify-center p-8 text-2xl flex-col">
        <ExpenseTracker
          spending={[
            { amount: 3420 },
            { amount: 4230 },
            { amount: 5987 },
            { amount: 7372 },
          ]}
        />
        <div className="flex gap-10">
          <CarouselCustomIndicator />
          <ToggleTheme />
          <div className="flex flex-col gap-10">
            <ClockWidget />
            <ClockWidget />
          </div>
          
        </div>
      </div>
    </div> 
  );
}
