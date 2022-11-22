import Road from "./road";

function Bi(props) {
  return (
    <Road
      start=""
      end="I"
      backgroundColor={props.roadColor.backgroundColor}
      color={props.roadColor.color}
      width="13rem"
      distance="4km"
      top="14rem"
      right="-8.5rem"
      rotation="90"
    />
  );
}

export default Bi;
