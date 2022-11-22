import Road from "./road";

function Hc(props) {
  return (
    <Road
      start=""
      end="C"
      backgroundColor={props.roadColor.backgroundColor}
      color={props.roadColor.color}
      width="15rem"
      distance="5km"
      top="-8.9rem"
      right="-47rem"
      rotation="0"
    />
  );
}

export default Hc;
