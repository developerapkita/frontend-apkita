interface ProgressBarProps {
  textSize: string;
  progressSize: string;
  textColor: string;
  barColor: string;
}
const ProgressBar: React.FC<ProgressBarProps> = (props) => {
  const { textSize, progressSize, textColor, barColor } = props;
  return (
    <>
      <div className="w-full flex justify-between items-center mb-2">
        <span className={`text-[${textSize}] text-[${textColor}]`}>45.2%</span>
        <span className={`text-[${textSize}] text-[${textColor}]`}>Total</span>
      </div>
      <div className={`w-full h-2 bg-gray-200 rounded-full`}>
        <div className={`bg-[${barColor}] ${progressSize} h-2 rounded-full`}></div>
      </div>
    </>
  );
};
export default ProgressBar;
