import Notif from "../../Icons/Notif";
import Setting from "../../Icons/Setting";
const HeaderDashboard: React.FC = () => {
  return (
    <>
      <div className="w-full mb-10 sticky top-0 pt-7 bg-white">
        <div className="flex items-center justify-between">
          <input type="text" className="border w-[25%] p-3 rounded-lg" placeholder="Cari" />
          <div className="flex gap-3">
            <button className="p-2 border rounded-lg">
              <Notif />
            </button>
            <button className="p-2 border rounded-lg">
              <Setting color="black" />
            </button>
            <button className="p-2 border rounded-lg">tes</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default HeaderDashboard;
