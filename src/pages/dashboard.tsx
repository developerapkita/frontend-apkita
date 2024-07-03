import React from "react";
import KeamananCard from "../components/Fragments/pages/dashboard/keamanan-card";
import KebersihanCard from "../components/Fragments/pages/dashboard/kebersihan-card";
import AirCard from "../components/Fragments/pages/dashboard/air-card";
import TagihanCard from "../components/Fragments/pages/dashboard/tagihan-card";
import BroadcastCard from "../components/Fragments/pages/dashboard/broadcast-card";
import CalendarCard from "../components/Fragments/pages/dashboard/calendar-card";
const Dashboard: React.FC = () => {
  return (
    <>
      <div className="w-full h-full grid grid-cols-12 gap-4">
        <div className="col-span-8">
          <div className="w-full grid grid-cols-12 gap-5">
            <KeamananCard />
            <KebersihanCard />
            <AirCard />
            <TagihanCard />
          </div>
          <div></div>
        </div>
        <div className="col-span-4 ">
          <div className="grid grid-cols-12 gap-4">
            <BroadcastCard />
            <CalendarCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
