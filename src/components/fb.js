import Road from "./road";

function Fb(props) {
  return (
    <Road
      start=""
      end="B"
      backgroundColor={props.roadColor.backgroundColor}
      color={props.roadColor.color}
      width="10rem"
      distance="3km"
      top="4.5rem"
      right="38rem"
      rotation="90"
    />
  );
}

export default Fb;
