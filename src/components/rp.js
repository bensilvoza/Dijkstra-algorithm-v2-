import Road from "./road";

function Rp(props) {
  return (
    <Road
      start=""
      end="P"
      backgroundColor={props.roadColor.backgroundColor}
      color={props.roadColor.color}
      width="8rem"
      distance="2km"
      top="10.5rem"
      right="-2.5rem"
      rotation="90"
    />
  );
}

export default Rp;
