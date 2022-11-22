import Road from "./road";

function Xq(props) {
  return (
    <Road
      start=""
      end="Q"
      backgroundColor={props.roadColor.backgroundColor}
      color={props.roadColor.color}
      width="12.3rem"
      distance="4km"
      top="26.7rem"
      right="-38.3rem"
      rotation="90"
    />
  );
}

export default Xq;
