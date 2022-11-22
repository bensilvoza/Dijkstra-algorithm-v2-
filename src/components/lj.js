import Road from "./road";

function Lj(props) {
  return (
    <Road
      start=""
      end="J"
      backgroundColor={props.roadColor.backgroundColor}
      color={props.roadColor.color}
      width="13rem"
      distance="4km"
      top="16rem"
      right="5.9rem"
      rotation="90"
    />
  );
}

export default Lj;
