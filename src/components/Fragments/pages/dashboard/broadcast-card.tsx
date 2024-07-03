import Card from "../../../Elements/Card";
import React, { useState } from "react";
import Button from "@mui/material/Button";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import EventIcon from "@mui/icons-material/Event";
import ScheduleIcon from "@mui/icons-material/Schedule";
import DropdownMenu from "../../../Elements/DropdownItem";
interface MenuItems {
  id: number;
  label: string;
}
const BroadcastCard: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const menuItems: MenuItems[] = [
    { id: 1, label: "Edit Agenda" },
    { id: 2, label: "Edit Tamu Undangan" },
  ];
  return (
    <>
      <Card size="col-span-12 relative">
        <Card.Header classname="text-center mb-6">
          <div>
            <button
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              className="w-full text-black text-[15px]"
              onClick={handleClick}>
              Broadcast Message
              <ExpandMoreIcon strokeWidth={2.5} className={`h-3.5 w-3.5 transition-transform ${open ? "rotate-180" : ""}`} />
            </button>
            <DropdownMenu open={open} handleClose={handleClose} anchorEl={anchorEl} menuItems={menuItems} />
          </div>
        </Card.Header>
        <Card.Body>
          <div className="w-full flex items-center gap-3 mb-4">
            <div className="w-2/12">
              <div className="w-full h-[7vh] flex justify-center items-center bg-[#F4B207] rounded-lg">
                <EventIcon sx={{ fontSize: 40, color: "white" }} />
              </div>
            </div>
            <div className="w-10/12 flex flex-col">
              <label className="mb-2">Tanggal</label>
              <input type="date" className="border p-2 rounded-lg" />
            </div>
          </div>
          <div className="w-full flex items-center gap-3">
            <div className="w-2/12">
              <div className="w-full h-[7vh] bg-[#8C73FF] flex justify-center items-center rounded-lg">
                <ScheduleIcon sx={{ fontSize: 40, color: "white" }} />
              </div>
            </div>
            <div className="w-10/12 flex flex-col">
              <label className="mb-2">Jam</label>
              <input type="time" className="border p-2 rounded-lg" />
            </div>
          </div>
          <div className="w-full mt-7">
            <input className="w-full border p-2 rounded-lg mb-3" placeholder="Tuliskan Nama Pesan" />
            <textarea className="w-full border p-2 rounded-lg" rows={6} placeholder="Tuliskan Nama Pesan" />
          </div>
        </Card.Body>
        <Card.Footer>
          <button className="bg-[#1463FF] mt-3 w-full  py-3 text-white rounded-[12px]">Kirim Announcement</button>
        </Card.Footer>
      </Card>
    </>
  );
};
export default BroadcastCard;
