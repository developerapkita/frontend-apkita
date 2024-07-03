import Card from "../../../Elements/Card";
import ProgressBar from "../../../Elements/ProgressBar";
import MoreVertIcon from "@mui/icons-material/MoreVert";
const KebersihanCard: React.FC = () => {
  return (
    <>
      <Card size="col-span-6">
        <Card.Header classname="w-full flex justify-between items-center">
          <h6>Kebersihan</h6>
          <button>
            <MoreVertIcon />
          </button>
        </Card.Header>
        <Card.Body classname="py-6 overflow-hidden">
          <h6 className=" text-[25px]">Rp.4.000.000,00</h6>
        </Card.Body>
        <Card.Footer>
          <ProgressBar textColor="[#71778E]" textSize="14px" progressSize="w-[20%]" barColor="#F4B207" />
        </Card.Footer>
      </Card>
    </>
  );
};
export default KebersihanCard;
