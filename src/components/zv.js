import Road from "./road";

function Zv(props) {
  return (
    <Road
      start=""
      end="V"
      backgroundColor={props.roadColor.backgroundColor}
      color={props.roadColor.color}
      width="10rem"
      distance="3km"
      top="37rem"
      right="27.4rem"
      rotation="90"
    />
  );
}

export default Zv;
