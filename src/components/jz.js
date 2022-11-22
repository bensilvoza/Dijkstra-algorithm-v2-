import Road from "./road";

function Jz(props) {
  return (
    <Road
      start=""
      end="Z"
      backgroundColor={props.roadColor.backgroundColor}
      color={props.roadColor.color}
      width="10rem"
      distance="3km"
      top="27rem"
      right="17.4rem"
      rotation="90"
    />
  );
}

export default Jz;
