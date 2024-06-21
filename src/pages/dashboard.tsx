import React from "react";
import Card from "../components/Elements/Card";
import ProgressBar from "../components/Elements/ProgressBar";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
const Dashboard: React.FC = () => {
  return (
    <>
      <div className="w-full h-full grid grid-cols-12 gap-4">
        <div className="col-span-8">
          <div className="w-full grid grid-cols-12 gap-5">
            <div className="col-span-12 flex justify-between items-center mb-7">
              <div>
                <h1 className="text-[48px] text-[#14213D]">Perum Agkasa</h1>
                <span className="text-[#14213D]">Kamis, 13 Juni 2024</span>
              </div>
              <div>
                <button className="p-2 border rounded-lg">Tes</button>
              </div>
            </div>
            <Card size="col-span-6">
              <Card.Header classname="w-full flex justify-between items-center">
                <h6>Keamanan</h6>
                <button>Tes</button>
              </Card.Header>
              <Card.Body classname="py-6 overflow-hidden">
                <h6 className=" text-[25px]">Rp.4.000.000,00</h6>
              </Card.Body>
              <Card.Footer>
                <ProgressBar textColor="[#71778E]" textSize="14px" progressSize="w-[20%]" barColor="#446FF2" />
              </Card.Footer>
            </Card>
            <Card size="col-span-6">
              <Card.Header classname="w-full flex justify-between items-center">
                <h6>Keamanan</h6>
                <button>Tes</button>
              </Card.Header>
              <Card.Body classname="py-6 overflow-hidden">
                <h6 className=" text-[25px]">Rp.4.000.000,00</h6>
              </Card.Body>
              <Card.Footer>
                <ProgressBar textColor="[#71778E]" textSize="14px" progressSize="w-[20%]" barColor="#F4B207" />
              </Card.Footer>
            </Card>
            <Card size="col-span-12">
              <Card.Header classname="w-full flex justify-between items-center">
                <h6>Air</h6>
                <button>Tes</button>
              </Card.Header>
              <Card.Body classname="py-6 overflow-hidden">
                <h6 className=" text-[25px]">Rp.4.000.000,00</h6>
              </Card.Body>
              <Card.Footer>
                <ProgressBar textColor="[#71778E]" textSize="14px" progressSize="w-[20%]" barColor="#8C73FF" />
              </Card.Footer>
            </Card>
            <Card size="col-span-12">
              <Card.Header classname="w-full flex justify-between items-center">
                <h6>Tagihan</h6>
                <a href="#" className="text-[#71778E]">
                  Lihat Semua
                </a>
              </Card.Header>
              <Card.Body classname="py-6 overflow-hidden">
                <div></div>
              </Card.Body>
            </Card>
          </div>
          <div></div>
        </div>
        <div className="col-span-4">
          <div className="grid grid-cols-12 gap-4">
            <Card size="col-span-12">
              <Card.Header classname="text-center mb-6">
                <h6>Broadcast Message</h6>
              </Card.Header>
              <Card.Body>
                <div className="w-full flex items-center gap-3 mb-4">
                  <div className="w-2/12">
                    <div className="w-full h-[7vh] bg-[#F4B207] rounded-lg"></div>
                  </div>
                  <div className="w-10/12 flex flex-col">
                    <label className="mb-2">Tanggal</label>
                    <input type="date" className="border p-2 rounded-lg" />
                  </div>
                </div>
                <div className="w-full flex items-center gap-3">
                  <div className="w-2/12">
                    <div className="w-full h-[7vh] bg-[#F4B207] rounded-lg"></div>
                  </div>
                  <div className="w-10/12 flex flex-col">
                    <label className="mb-2">Tanggal</label>
                    <input type="date" className="border p-2 rounded-lg" />
                  </div>
                </div>
                <div className="w-full mt-7">
                  <input className="w-full border p-2 rounded-lg mb-3" placeholder="Tuliskan Nama Pesan" />
                  <textarea className="w-full border p-2 rounded-lg" rows={6} placeholder="Tuliskan Nama Pesan" />
                </div>
              </Card.Body>
            </Card>
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
