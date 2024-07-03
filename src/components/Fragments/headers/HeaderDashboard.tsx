import HomeIcon from "../../Icons/HomeIcon";
import Notif from "../../Icons/Notif";
import Setting from "../../Icons/Setting";
const HeaderDashboard: React.FC = () => {
  return (
    <>
      <div className="w-full mb-7 sticky top-0 pt-7 z-20 bg-white">
        <div className="w-full grid grid-cols-12">
          <div className=" col-span-8 mb-7">
            <div className="w-full flex justify-between">
              <div>
                <h1 className="text-[48px] text-[#14213D]">Perum Agkasa</h1>
                <span className="text-[#14213D]">Kamis, 13 Juni 2024</span>
              </div>
              <div>
                <button className="p-2 border rounded-lg">
                  <HomeIcon />
                </button>
              </div>
            </div>
          </div>
          <div className="col-span-4">
            <div className="w-full flex justify-end gap-3">
              <button className="p-2 border rounded-lg">
                <Notif />
              </button>
              <button className="p-2 border rounded-lg">
                <Setting color="black" />
              </button>
              <button className="p-5 border bg-[#D9D9D9] rounded-full"></button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default HeaderDashboard;
